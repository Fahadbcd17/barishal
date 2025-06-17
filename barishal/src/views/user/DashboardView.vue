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

    <!-- City Hero Section -->
    <div class="relative" v-if="city">
      <div class="absolute inset-0 bg-gray-900 opacity-40"></div>
      <img
        class="w-full h-96 object-cover"
        :src="city.hero_image"
        :alt="`${city.name} skyline`"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center px-4">
          <h1
            class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {{ city.name }}, {{ city.country }}
          </h1>
          <p class="mt-3 text-xl text-indigo-200 max-w-2xl mx-auto">
            {{ city.tagline }}
          </p>
        </div>
      </div>
    </div>

    <!-- Quick Facts -->
    <div class="bg-white py-8" v-if="city?.quick_facts?.length">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div v-for="fact in city.quick_facts" :key="fact.label" class="p-4">
            <div class="text-3xl font-bold text-indigo-600">
              {{ fact.value }}
            </div>
            <div class="text-sm text-gray-500 mt-1">{{ fact.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- City Introduction -->
    <div class="py-12 bg-gray-50" v-if="city">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-extrabold text-gray-900">
              About {{ city.name }}
            </h2>
            <div class="mt-4 prose prose-indigo text-gray-500">
              {{ city.description }}
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div
              class="bg-white p-6 rounded-lg shadow"
              v-if="city.fun_facts?.length"
            >
              <h3 class="text-lg font-medium text-gray-900">
                Did You Know? 🤔
              </h3>
              <div class="mt-4 space-y-4">
                <div
                  v-for="fact in city.fun_facts"
                  :key="fact.text"
                  class="flex items-start"
                >
                  <div class="flex-shrink-0 mt-1">💡</div>
                  <p class="ml-3 text-sm text-gray-600">{{ fact.text }}</p>
                </div>
              </div>
            </div>
            <!-- In your Best Time to Visit section -->
            <div class="mt-4 bg-white p-6 rounded-lg shadow" v-if="city?.best_season">
              <h3 class="text-lg font-medium text-gray-900">Best Time to Visit</h3>
              <div class="mt-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Season</span>
                  <span class="text-sm font-medium text-gray-900">{{ city.best_season }}</span>
                </div>
                <div class="mt-2 flex items-center justify-between">
                  <span class="text-sm text-gray-500">Months</span>
                  <span class="text-sm font-medium text-gray-900">{{ city.best_months }}</span>
                </div>
                <div class="mt-2 flex items-center justify-between">
                  <span class="text-sm text-gray-500">Avg. Temp</span>
                  <span class="text-sm font-medium text-gray-900">{{ city.best_temperature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Highlights Section -->
    <div class="py-12 bg-white" v-if="city?.highlights?.length">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {{ city.name }} Highlights
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Must-see attractions and experiences
          </p>
        </div>

        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="highlight in city.highlights.slice(0, 3)"
              :key="highlight.name"
              class="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                class="w-full h-48 object-cover"
                :src="highlight.image"
                :alt="highlight.name"
              />
              <div class="p-6">
                <h3 class="text-xl font-medium text-gray-900">
                  {{ highlight.name }}
                </h3>
                <p class="mt-2 text-gray-500">{{ highlight.description }}</p>
                <div class="mt-4 flex items-center">
                  <span class="text-sm text-gray-500"
                    >📍 {{ highlight.location }}</span
                  >
                  <span class="mx-2 text-gray-300">•</span>
                  <span class="text-sm text-gray-500"
                    >⭐ {{ highlight.rating }}/5</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Neighborhoods Section -->
    <div class="py-12 bg-gray-50" v-if="city?.neighborhoods?.length">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Neighborhoods
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover the unique character of each district
          </p>
        </div>

        <div class="mt-12">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              v-for="neighborhood in city.neighborhoods.slice(0, 4)"
              :key="neighborhood.name"
              class="bg-white overflow-hidden rounded-lg shadow"
            >
              <div class="p-6">
                <h3 class="text-xl font-medium text-gray-900">
                  {{ neighborhood.name }}
                </h3>
                <p class="mt-2 text-gray-500">{{ neighborhood.description }}</p>
                <div class="mt-4" v-if="neighborhood.tags?.length">
                  <h4 class="text-sm font-medium text-gray-900">Known for:</h4>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="tag in neighborhood.tags"
                      :key="tag.tag"
                      class="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800"
                    >
                      {{ tag.tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="bg-white py-12" v-if="city">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Getting Around {{ city.name }}
          </h2>
        </div>
        <div
          class="mt-8 bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center"
        >
        <div class="text-center p-8">
          
          <!-- Kunming-specific responsive map container -->
          <div class="w-full">
            <!-- Full-width Kunming map container -->
            <div class="relative overflow-hidden pb-[50%] h-0 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221996.5011076276!2d102.5762419!3d25.0216075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36d083c31227d3cb%3A0xccb1f3a4984f0a36!2sKunming%2C%20Yunnan%2C%20China!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                class="absolute top-0 left-0 w-full h-full border-0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                aria-label="Full-width map of Kunming, China">
              </iframe>
            </div>
            
            <!-- Optional caption -->
            <div class="text-center mt-2">
              <p class="text-sm text-gray-500">Interactive map of Kunming, Yunnan Province</p>
            </div>
          </div>
          
          <h3 class="text-xl font-medium text-gray-900 mt-6">
            Kunming City Map
          </h3>
          <p class="mt-2 text-gray-600">
            Explore the Spring City's layout and key locations
          </p>
        </div>
        </div>
        <div
          class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          v-if="city.transport_tips?.length"
        >
          <div
            v-for="tip in city.transport_tips.slice(0, 4)"
            :key="tip.title"
            class="bg-indigo-50 p-6 rounded-lg"
          >
            <div class="text-2xl mb-3">{{ tip.emoji }}</div>
            <h3 class="text-lg font-medium text-gray-900">{{ tip.title }}</h3>
            <p class="mt-2 text-gray-600">{{ tip.description }}</p>
          </div>
        </div>
      </div>
    </div>
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
    await store.dispatch("city/fetchCity", cityId.value);
    loading.value = false;
  } catch (err) {
    error.value = err.message || "Failed to load city data";
    loading.value = false;
  }
});

// Get city data from Vuex store
const city = computed(() => {
  return store.getters['city/currentCity']
})
</script>
