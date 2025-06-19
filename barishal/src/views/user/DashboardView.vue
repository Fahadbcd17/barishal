<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div
      v-if="loading"
      class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50"
    >
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
      ></div>
    </div>

    <!-- Welcome Section -->
    <div class="bg-indigo-700">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-3xl font-extrabold text-white sm:text-4xl">
            Welcome back,
            {{ store.state.auth.user.username || "user@unknown.com" }}! 👋
          </h1>
          <p class="mt-3 text-xl text-indigo-200">
            <!-- Ready to explore {{ city.name }} today? -->
          </p>
        </div>
      </div>
    </div>

    <!-- Travel Tips Section -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Tip Cards -->
          <div 
            v-for="tip in tips" 
            :key="tip.id" 
            class="bg-indigo-50 p-6 rounded-lg"
          >
            <div class="text-2xl mb-3">{{ tip.emoji }}</div>
            <h3 class="text-lg font-medium text-gray-900">
              {{ tip.title }}
            </h3>
            <p class="mt-2 text-gray-600">
              {{ tip.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Continue with the rest of the original homeview components -->
    <!-- City Hero Section -->
    
    <!-- Include other sections from the original homeview as needed -->
  </div>
</template>

<script setup>
import { ref, onMounted,computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const loading = ref(true);
const error = ref(null);
const tips = ref([]);
const accessToken = computed(()=> store.getters['auth/accessToken'])

onMounted(async () => {
  console.log('Fetching tips with access token:', accessToken.value);
  try {
    const response = await fetch('http://127.0.0.1:8000/api/tips/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tips');
    }

    const data = await response.json();
    tips.value = data;
    loading.value = false;
  } catch (err) {
    error.value = err.message || "Failed to load tips data";
    loading.value = false;
    console.error('Error fetching tips:', err);
  }
});
</script>