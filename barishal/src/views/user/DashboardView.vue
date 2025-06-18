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
    <div class="py-12 bg-white" v-if="city">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center">
          Travel Tips for {{ city.name }}
        </h2>

        <div class="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Tip 1 -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">🌞</div>
            <h3 class="text-lg font-medium text-gray-900">
              Best Time to Visit
            </h3>
            <p class="mt-2 text-gray-600">
              {{ city.best_season }} ({{ city.best_months }}) is ideal with
              average temperatures around {{ city.best_temperature }}.
            </p>
          </div>

          <!-- Tip 2 -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">🚕</div>
            <h3 class="text-lg font-medium text-gray-900">Getting Around</h3>
            <p class="mt-2 text-gray-600">
              Use the metro for speed or taxis for convenience. Download DiDi
              (China's Uber) for easy rides.
            </p>
          </div>

          <!-- Tip 3 -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">🍜</div>
            <h3 class="text-lg font-medium text-gray-900">Must-Try Food</h3>
            <p class="mt-2 text-gray-600">
              Don't miss Crossing-the-Bridge Rice Noodles, Yunnan's famous dish.
              Try it at local favorites like Guanxinglou.
            </p>
          </div>

          <!-- Tip 4 -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">💵</div>
            <h3 class="text-lg font-medium text-gray-900">Money Tips</h3>
            <p class="mt-2 text-gray-600">
              WeChat Pay and Alipay are widely accepted. Carry some cash for
              small vendors.
            </p>
          </div>

          <!-- Tip 5 -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">📷</div>
            <h3 class="text-lg font-medium text-gray-900">Top Photo Spot</h3>
            <p class="mt-2 text-gray-600">
              Dianchi Lake at sunset offers stunning views, especially near
              Haigeng Park.
            </p>
          </div>

          <!-- Tip 6 -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <div class="text-2xl mb-3">⚠️</div>
            <h3 class="text-lg font-medium text-gray-900">Important Note</h3>
            <p class="mt-2 text-gray-600">
              Carry your passport as it's required for hotel check-ins and
              ticket purchases.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Continue with the rest of the original homeview components -->
    <!-- City Hero Section -->
    <div class="relative" v-if="city">
      <!-- ... existing city hero section ... -->
    </div>

    <!-- Include other sections from the original homeview as needed -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const loading = ref(true);
const error = ref(null);

// Fetch city data when component mounts
onMounted(async () => {
  try {
    await store.dispatch("city/fetchCity", 1);
    loading.value = false;
  } catch (err) {
    error.value = err.message || "Failed to load city data";
    loading.value = false;
  }
});

// Get city data from Vuex store
const city = computed(() => {
  return store.getters["city/currentCity"];
});
</script>
