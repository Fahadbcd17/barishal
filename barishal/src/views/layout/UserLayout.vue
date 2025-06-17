<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <!-- Mobile sidebar toggle button -->
          <button @click="toggleSidebar" class="lg:hidden p-2 text-gray-500 hover:text-indigo-600 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-gray-800">Barishal</span>
          </router-link>
        </div>
        
        <div class="flex items-center space-x-4">
          <button @click="toggleSearch" class="p-2 text-gray-500 hover:text-indigo-600 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button class="p-2 text-gray-500 hover:text-indigo-600 transition relative">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div class="relative group">
            <button @click="toggleUserMenu" class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium">
                {{ userInitials }}
              </div>
              <span class="hidden md:inline text-gray-700">{{ userName }}</span>
              <svg class="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-show="userMenu" class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-10 border border-gray-100">
              <router-link to="/profile" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 transition flex items-center space-x-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span>Profile</span>
              </router-link>
              <router-link to="/settings" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 transition flex items-center space-x-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Settings</span>
              </router-link>
              <div class="border-t border-gray-100 my-1"></div>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50 transition flex items-center space-x-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Search Bar -->
      <div v-if="searchOpen" class="container mx-auto px-4 py-3 bg-white border-t border-gray-100">
        <div class="relative">
          <input type="text" placeholder="Search attractions, events..." class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </header>

    <!-- Main Content with Sidebar -->
    <div class="flex flex-grow relative">
      <!-- Mobile Sidebar Overlay -->
      <div 
        v-if="sidebarOpen" 
        @click="sidebarOpen = false"
        class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
      ></div>
      
      <!-- Sidebar -->
      <aside 
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        class="fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 p-4 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto"
      >
        <div class="flex justify-between items-center mb-6 lg:hidden">
          <h3 class="text-lg font-semibold">Menu</h3>
          <button @click="sidebarOpen = false" class="p-2 text-gray-500 hover:text-indigo-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Discover</h3>
          <nav class="space-y-1">
            <router-link 
              to="/explore" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Explore City
            </router-link>
            <router-link 
              to="/attractions" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Top Attractions
            </router-link>
            <router-link 
              to="/tours" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Guided Tours
            </router-link>
          </nav>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">My Content</h3>
          <nav class="space-y-1">
            <router-link 
              to="/saved" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
              Saved Places
            </router-link>
            <router-link 
              to="/itineraries" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              My Itineraries
            </router-link>
            <router-link 
              to="/reviews" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
              My Reviews
            </router-link>
          </nav>
        </div>
        
        <div>
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Community</h3>
          <nav class="space-y-1">
            <router-link 
              to="/events" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Local Events
            </router-link>
            <router-link 
              to="/forums" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Discussion Forums
            </router-link>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-grow p-4">
        <div class="bg-white rounded-xl shadow-sm p-6">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed,onBeforeMount } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const sidebarOpen = ref(false)
const searchOpen = ref(false)
const userName = 'Alex Johnson'
const userMenu = ref(false);
const userInitials = computed(() => {
  const parts = userName.split(' ')
  return parts.length > 1 
    ? `${parts[0][0]}${parts[1][0]}`
    : parts[0][0]
})

const toggleUserMenu = () =>{
  userMenu.value = !userMenu.value;
  
  if(userMenu.value){
    setTimeout(()=>{
      userMenu.value = false;
    },3000);
  }
}
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  // Close search if open
  if (searchOpen.value) searchOpen.value = false
}

const toggleSearch = () => {
  searchOpen.value = !searchOpen.value
  // Close sidebar if open
  if (sidebarOpen.value) sidebarOpen.value = false
}

const logout = () => {
  store.dispatch("auth/logout").then(() => {
    router.push({ name: "login" });
  });
};
onBeforeMount(() => {
  console.log(
    "🚀 ~ file: UserLayout.vue:315 ~ onBeforeMount ~ store.state.auth.user:",
    store.state
  );
});
</script>

<style scoped>
/* Smooth transitions for sidebar */
.transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Ensure proper stacking context */
.z-30 {
  z-index: 30;
}
.z-40 {
  z-index: 40;
}
</style>