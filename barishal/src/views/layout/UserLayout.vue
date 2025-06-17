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
          
          <!-- <router-link to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-gray-800">City Tour</span>
          </router-link> -->
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
              
              <span class="hidden md:inline text-gray-700">{{ store.state.auth.user.username }}</span>
              <svg class="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-show="userMenu" class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-10 border border-gray-100">
              <router-link to="/user/profile" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 transition flex items-center space-x-2">
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
          <router-link to="/" class="flex items-center space-x-2 mb-8">
            <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-gray-800">City Tour</span>
          </router-link>

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
              to="/explore" 
              @click="sidebarOpen = false"
              class="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-indigo-50 transition"
              active-class="bg-indigo-50 text-indigo-700 font-medium"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Add Post
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
              Request For Guide
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
      <main class="flex-grow ">
        <div class="bg-white rounded-xl shadow-sm ">
          <slot></slot>
        </div>
      </main>
    </div>
    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">City Tour</h3>
            <p class="text-gray-400">Discover the soul of our city through its landmarks, culture, and hidden gems.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Explore</h4>
            <ul class="space-y-2">
              <li><router-link to="/attractions" class="text-gray-400 hover:text-white transition">Top Attractions</router-link></li>
              <li><router-link to="/tours" class="text-gray-400 hover:text-white transition">Guided Tours</router-link></li>
              <li><router-link to="/neighborhoods" class="text-gray-400 hover:text-white transition">Neighborhoods</router-link></li>
              <li><router-link to="/itineraries" class="text-gray-400 hover:text-white transition">Suggested Itineraries</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Resources</h4>
            <ul class="space-y-2">
              <li><router-link to="/maps" class="text-gray-400 hover:text-white transition">Interactive Maps</router-link></li>
              <li><router-link to="/transportation" class="text-gray-400 hover:text-white transition">Transportation</router-link></li>
              <li><router-link to="/tips" class="text-gray-400 hover:text-white transition">Travel Tips</router-link></li>
              <li><router-link to="/faq" class="text-gray-400 hover:text-white transition">FAQ</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <div class="flex space-x-4 mb-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-400 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-pink-600 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </a>
            </div>
            
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2023 City Tour. All rights reserved. | <router-link to="/privacy" class="hover:text-white transition">Privacy Policy</router-link> | <router-link to="/terms" class="hover:text-white transition">Terms of Service</router-link></p>
        </div>
      </div>
    </footer>
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