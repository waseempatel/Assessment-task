<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getNavBar } from "@/services/navbarservices";

// ----- State -----
type RawNav = {
  id?: number | string;
  Id?: number | string;
  label?: string;
  Label?: string;
  link?: string;
  Link?: string;
  displayOrder?: number;
  DisplayOrder?: number;
  parentId?: number | string | null;
  ParentId?: number | string | null;
};

type NavItem = {
  id?: number | string;
  label: string;
  link: string;
  displayOrder: number;
  parentId?: number | string | null;
  children: NavItem[];
};

const isMenuOpen = ref(false);
const openDropdownId = ref<number | string | null>(null);
const navItems = ref<NavItem[]>([]);

// ----- Helpers -----
const normalize = (row: RawNav): NavItem => {
  const label =
    (row.label ?? row.Label ?? "").toString().trim().replace(/^\+?\s*/, "");
  return {
    id: row.id ?? row.Id ?? label, // fallback to label for stable keys
    label,
    link: (row.link ?? row.Link ?? "#").toString(),
    displayOrder: Number(row.displayOrder ?? row.DisplayOrder ?? 9999),
    parentId: (row.parentId ?? row.ParentId ?? null) as number | string | null,
    children: [],
  };
};

const buildTree = (rows: RawNav[]): NavItem[] => {
  const items = rows.map(normalize);

  // map by id for quick parent lookup
  const byId = new Map<NavItem["id"], NavItem>();
  items.forEach((i) => byId.set(i.id, i));

  // attach children to parents when parentId is present
  items.forEach((i) => {
    if (i.parentId != null && byId.has(i.parentId)) {
      byId.get(i.parentId)!.children.push(i);
    }
  });

  // top-level items = no parent or parent not present
  let top = items.filter((i) => i.parentId == null || !byId.has(i.parentId));

  // Heuristic: if parentId is not set in DB but "Pages" exists,
  // attach known children to Pages by label.
  const pages = top.find((i) => i.label === "Pages");
  if (pages) {
    const possibleChildren = ["Features", "Blog Post", "Testimonial", "404 Error"];
    items.forEach((i) => {
      if (i !== pages && top.includes(i) && possibleChildren.includes(i.label)) {
        // remove from top before attaching
        top = top.filter((x) => x !== i);
        pages.children.push(i);
      }
    });
  }

  // Keep only required top-level items
  const order = ["Home", "About", "Menu", "Chefs", "Pages", "Contact"];
  top = top.filter((i) => order.includes(i.label));

  // ✅ Deduplicate by label to avoid doubles
  const seen = new Set<string>();
  top = top.filter((i) => {
    if (seen.has(i.label)) return false;
    seen.add(i.label);
    return true;
  });

  // Sort top-level items by given order
  top.sort((a, b) => order.indexOf(a.label) - order.indexOf(b.label));

  // Sort Pages children by displayOrder then label
  top.forEach((p) => {
    if (p.children && p.children.length) {
      p.children.sort(
        (a, b) =>
          a.displayOrder - b.displayOrder || a.label.localeCompare(b.label)
      );
    }
  });

  return top;
};


// ----- Lifecycle -----
onMounted(async () => {
  try {
    const data = await getNavBar();
    navItems.value = (Array.isArray(data) ? data : []).map(normalizeWithChildren);
  } catch (err) {
    console.error("Error loading NavBar:", err);
    navItems.value = [];
  }
});

const normalizeWithChildren = (row: any): NavItem => {
  return {
    id: row.id ?? row.Id ?? row.Label,
    label: row.label ?? row.Label,
    link: row.link ?? row.Link ?? "#",
    displayOrder: row.displayOrder ?? row.DisplayOrder ?? 9999,
    parentId: row.parentId ?? row.ParentId ?? null,
    children: (row.children ?? row.Children ?? []).map(normalizeWithChildren),
  };
};

// ----- Methods -----
const toggleDropdown = (id: number | string) => {
  openDropdownId.value = openDropdownId.value === id ? null : id;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  openDropdownId.value = null;
};
</script>

<template>
  <header class="m-0 p-0 border-0 w-full">
    <section class="flex flex-col lg:flex-row w-full">
      <!-- Logo / Hamburger -->
      <div
        class="flex items-center justify-between px-6 py-6 bg-[var(--dark-color)] lg:bg-[#FB5B21] w-full lg:w-auto"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="ml-2 py-2 px-2 text-3xl sm:text-5xl lg:text-6xl 
                 font-['Emblema_One'] uppercase text-[var(--secondary-color)] whitespace-nowrap"
        >
          Chefer
        </NuxtLink>

        <!-- Hamburger Icon (mobile only) -->
        <button
          class="lg:hidden text-[var(--secondary-color)] text-3xl focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Right Side -->
      <div class="flex flex-col flex-1">
        <!-- Top Info Bar -->
        <nav
          class="flex flex-col sm:flex-row justify-between items-center bg-[#2a2b2e] text-[#686A6F] text-sm sm:text-base px-6 sm:px-12 py-3 sm:py-4 gap-2 sm:gap-0"
        >
          <div class="flex items-center space-x-2 text-base sm:text-lg">
            <i class="fa fa-envelope text-[var(--primary-color)]"></i>
            <p class="mb-0">info@example.com</p>
          </div>
          <div class="flex items-center space-x-2 text-base sm:text-lg">
            <i class="bi bi-telephone text-[var(--primary-color)]"></i>
            <p class="mb-0">+012 345 6789</p>
          </div>
        </nav>

        <!-- Main Navigation (desktop) -->
        <nav
          class="hidden lg:flex flex-row items-center justify-between px-8 py-5 bg-[var(--dark-color)]"
        >
          <!-- Menu Links -->
          <div
            class="flex flex-row gap-8 text-lg lg:text-xl text-[var(--secondary-color)]/70"
          >
            <template v-for="(item, index) in navItems" :key="item.id ?? item.label ?? index">
              <!-- Normal Links -->
              <NuxtLink
                v-if="!item.children || item.children.length === 0"
                :to="item.link || '#'"
                class="hover:text-[var(--primary-color)]"
                active-class="text-[var(--primary-color)] font-semibold"
                exact-active-class="text-[var(--primary-color)] font-semibold"
                @click="closeMenu()"
              >
                {{ item.label }}
              </NuxtLink>

              <!-- Dropdown -->
              <div v-else class="relative group">
                <span class="flex items-center cursor-pointer hover:text-[var(--primary-color)]">
                  {{ item.label }}
                  <span class="ml-1 inline-block 
                         border-t-[0.35em] border-r-[0.35em] border-l-[0.35em] 
                         border-t-current border-r-transparent border-l-transparent"></span>
                </span>
                <div
                  class="absolute hidden group-hover:block bg-[var(--secondary-color)] text-[var(--dark-color)] p-5 space-y-3 shadow-lg z-10 min-w-[170px]"
                >
                  <NuxtLink
                    v-for="(child, cIndex) in item.children"
                    :key="child.id ?? child.label ?? cIndex"
                    :to="child.link || '#'"
                    class="block hover:text-[var(--primary-color)]"
                    @click="closeMenu()"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>

          <!-- Social Icons -->
          <div class="flex items-center space-x-5">
            <a
              href="#"
              class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-[var(--secondary-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-[var(--secondary-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-[var(--secondary-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>


<style scoped>
html {
  scroll-behavior: smooth;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
