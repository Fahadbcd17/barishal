<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Admin Navigation Bar -->
    <header class="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <router-link to="/admin" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <span class="text-2xl font-bold">CityVoyage Admin</span>
        </router-link>
        
        <nav class="hidden md:flex items-center space-x-8">
          <router-link to="/admin/dashboard" class="text-gray-300 hover:text-white transition">Dashboard</router-link>
          <router-link to="/admin/content" class="text-gray-300 hover:text-white transition">Content</router-link>
          <router-link to="/admin/users" class="text-gray-300 hover:text-white transition">Users</router-link>
          <router-link to="/admin/analytics" class="text-gray-300 hover:text-white transition">Analytics</router-link>
        </nav>
        
        <div class="flex items-center space-x-4">
          <button class="p-2 text-gray-400 hover:text-white transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </button>
          <div class="relative group">
            <button class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-medium">
                {{ userInitials }}
              </div>
              <span class="hidden md:inline">{{ adminName }}</span>
              <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl py-1 z-10 hidden group-hover:block border border-gray-700">
              <router-link to="/admin/profile" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition">Admin Profile</router-link>
              <router-link to="/admin/settings" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition">System Settings</router-link>
              <div class="border-t border-gray-700 my-1"></div>
              <router-link to="/" class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition">View Site</router-link>
              <div class="border-t border-gray-700 my-1"></div>
              <button @click="logout" class="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Admin Dashboard Layout -->
    <div class="flex flex-grow">
      <!-- Admin Sidebar -->
      <aside class="hidden lg:block w-64 bg-gray-800 text-gray-300 border-r border-gray-700">
        <div class="p-4">
          <h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-gray-500">Management</h3>
          <nav class="space-y-1">
            <router-link 
              to="/admin/dashboard" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Dashboard
            </router-link>
            <router-link 
              to="/admin/places" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Places
            </router-link>
            <router-link 
              to="/admin/events" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Events
            </router-link>
            <router-link 
              to="/admin/categories" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
              </svg>
              Categories
            </router-link>
          </nav>
        </div>
        
        <div class="p-4 border-t border-gray-700">
          <h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-gray-500">User Management</h3>
          <nav class="space-y-1">
            <router-link 
              to="/admin/users" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              Users
            </router-link>
            <router-link 
              to="/admin/roles" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Roles & Permissions
            </router-link>
            <router-link 
              to="/admin/reviews" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active-class="bg-gray-700 text-white"
              inactive-class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
              Review Moderation
            </router-link>
          </nav>
        </div>
        
        <div class="p-4 border-t border-gray-700">
          <h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-gray-500">System</h3>
          <nav class="space-y-1">
            <router-link 
              to="/admin/settings" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active_class="bg-gray-700 text-white"
              inactive_class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Settings
            </router-link>
            <router-link 
              to="/admin/analytics" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active_class="bg-gray-700 text-white"
              inactive_class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Analytics
            </router-link>
            <router-link 
              to="/admin/logs" 
              class="flex items-center px-3 py-2 rounded-lg transition group"
              active_class="bg-gray-700 text-white"
              inactive_class="hover:bg-gray-700 hover:text-white"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              System Logs
            </router-link>
          </nav>
        </div>
      </aside>

      <!-- Admin Content Area -->
      <main class="flex-grow p-6 bg-gray-100">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <!-- Admin controls bar -->
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 class="text-2xl font-bold text-gray-800">{{ pageTitle }}</h1>
              <p class="text-gray-600">{{ pageSubtitle }}</p>
            </div>
            <div class="flex space-x-3">
              <button 
                v-if="showExportButton"
                class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Export
              </button>
              <button 
                v-if="showAddButton"
                class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add New
              </button>
            </div>
          </div>
          
          <!-- Slot for admin pages content -->
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const adminName = 'Admin User'
const userInitials = computed(() => {
  const parts = adminName.split(' ')
  return parts.length > 1 
    ? `${parts[0][0]}${parts[1][0]}`
    : parts[0][0]
})

// These would be passed as props in actual implementation
const pageTitle = 'Dashboard'
const pageSubtitle = 'Overview of your system'
const showExportButton = true
const showAddButton = true

const logout = () => {
  // Logout logic here
  console.log('Admin logging out...')
}
</script>