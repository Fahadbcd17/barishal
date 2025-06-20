<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
    <!-- Navigation Bar -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <span class="text-2xl font-bold text-gray-800">City Tour</span>
        </router-link>
        
        <nav class="hidden md:flex items-center space-x-8">
          <router-link to="/user/explore" class="text-gray-600 hover:text-blue-600 transition">Explore</router-link>
          <router-link to="/user/attractions" class="text-gray-600 hover:text-blue-600 transition">Attractions</router-link>
          <router-link to="/user/events" class="text-gray-600 hover:text-blue-600 transition">Events</router-link>
          <router-link to="/user/about" class="text-gray-600 hover:text-blue-600 transition">About</router-link>
        </nav>
        
        <div class="flex items-center space-x-4">
          <router-link to="/login" class="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Sign In</router-link>
        
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <router-link to="/explore" class="py-2 text-gray-600 hover:text-blue-600 transition">Explore</router-link>
          <router-link to="/attractions" class="py-2 text-gray-600 hover:text-blue-600 transition">Attractions</router-link>
          <router-link to="/events" class="py-2 text-gray-600 hover:text-blue-600 transition">Events</router-link>
          <router-link to="/about" class="py-2 text-gray-600 hover:text-blue-600 transition">About</router-link>
          <div class="pt-2 border-t border-gray-100">
            <router-link to="/login" class="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Sign In</router-link>
          </div>
        </div>
      </div>
      
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot></slot>
    </main>

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
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()  
const mobileMenuOpen = ref(false)
const searchOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (searchOpen.value) searchOpen.value = false
}

const toggleSearch = () => {
  searchOpen.value = !searchOpen.value
  if (mobileMenuOpen.value) mobileMenuOpen.value = false
}
</script>