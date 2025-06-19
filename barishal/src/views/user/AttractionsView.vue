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

    <!-- Header Section -->
    <div class="bg-indigo-700">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-3xl font-extrabold text-white sm:text-4xl">
            Top Attractions in {{ cityName }}
          </h1>
          <p class="mt-3 text-xl text-indigo-200">
            Discover the best places to visit
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter/Search Controls -->
        <div class="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="w-full sm:w-auto">
            <label for="sort-by" class="block text-sm font-medium text-gray-700">Sort by:</label>
            <select
              id="sort-by"
              v-model="sortBy"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
          <div class="w-full sm:w-auto">
            <label for="search" class="block text-sm font-medium text-gray-700">Search:</label>
            <input
              id="search"
              v-model="searchQuery"
              type="text"
              placeholder="Search attractions..."
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <!-- Attractions Grid -->
        <div v-if="filteredAttractions.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="attraction in filteredAttractions"
            :key="attraction.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <!-- Attraction Image -->
            <div class="h-48 bg-gray-200 overflow-hidden relative">
              <img
                v-if="attraction.imageUrl"
                :src="attraction.imageUrl"
                :alt="attraction.name"
                class="w-full h-full object-cover"
                @error="handleImageError(attraction)"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div
                v-if="attraction.rating"
                class="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">
                  {{ attraction.rating }}
                </span>
              </div>
            </div>

            <!-- Attraction Details -->
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900 mb-2">
                {{ attraction.name }}
              </h3>
              <p class="text-sm text-gray-500 mb-3" v-if="attraction.location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 inline-block mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {{ attraction.location }}
              </p>
              <p class="text-gray-600 line-clamp-3 mb-4">
                {{ attraction.description || 'No description available' }}
              </p>
              <div class="flex justify-between items-center">
                <!-- <button
                  @click="viewAttractionDetails(attraction)"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Details
                </button> -->
                <button
                  v-if="isAdmin"
                  @click="editAttraction(attraction)"
                  class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="text-center py-12 bg-gray-50 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 class="mt-2 text-lg font-medium text-gray-900">
            No attractions found
          </h3>
          <p class="mt-1 text-gray-500">
            Try adjusting your search or filters
          </p>
          <div class="mt-6">
            <button
              @click="resetFilters"
              v-if="searchQuery"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset filters
            </button>
          </div>
        </div>

        <!-- Admin Controls -->
        <div v-if="isAdmin" class="mt-8 border-t border-gray-200 pt-8">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Admin Controls</h3>
          <button
            @click="showAddModal = true"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Add New Attraction
          </button>
        </div>
      </div>
    </div>

    <!-- Add Attraction Modal -->
    <div
      v-if="showAddModal"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium text-gray-900">Add New Attraction</h3>
          <button
            @click="showAddModal = false"
            class="text-gray-400 hover:text-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form @submit.prevent="handleAddAttraction">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                v-model="newAttraction.name"
                type="text"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                v-model="newAttraction.description"
                rows="3"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
              <input
                id="location"
                v-model="newAttraction.location"
                type="text"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="rating" class="block text-sm font-medium text-gray-700">Rating (0-5)</label>
              <input
                id="rating"
                v-model="newAttraction.rating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
              <input
                id="image"
                type="file"
                @change="handleImageUpload"
                class="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
              <p class="mt-1 text-xs text-gray-500">Upload an image for this attraction</p>
            </div>
          </div>
          <div class="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              @click="showAddModal = false"
              class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const loading = ref(false);
const cityName = ref('Your City');
const sortBy = ref('rating');
const searchQuery = ref('');
const showAddModal = ref(false);
const newAttraction = ref({
  name: '',
  description: '',
  location: '',
  rating: null,
  image: null
});

// Backend configuration
const backendUrl = 'http://127.0.0.1:8000'; // Update with your backend URL

// Image handling utilities
const formatImageUrl = (imagePath) => {
  if (!imagePath) return null;
  return imagePath.startsWith('http') ? imagePath : `${backendUrl}${imagePath}`;
};

const handleImageError = (attraction) => {
  console.error('Image failed to load:', attraction.imageUrl);
  attraction.imageUrl = null; // Fallback to default
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newAttraction.value.image = file;
  }
};

// Authentication and permissions
const isAdmin = computed(() => {
  return store.state.auth.user?.is_admin || false;
});

// Data fetching
const fetchAttractions = async () => {
  try {
    loading.value = true;
    await store.dispatch('attraction/fetchAttractions', {
      headers: {
        Authorization: `Bearer ${store.state.auth.accessToken}`
      }
    });
    if (attractions.value.length > 0 && attractions.value[0].city) {
      cityName.value = attractions.value[0].city.name || 'Your City';
    }
  } catch (error) {
    console.error('Error fetching attractions:', error);
  } finally {
    loading.value = false;
  }
};

// Computed properties
const attractions = computed(() => {
  return store.getters['attraction/attractions'].map(attraction => ({
    ...attraction,
    imageUrl: formatImageUrl(attraction.image)
  }));
});

const filteredAttractions = computed(() => {
  let result = [...attractions.value];
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(attraction => 
      attraction.name.toLowerCase().includes(query) ||
      (attraction.description && attraction.description.toLowerCase().includes(query)) ||
      (attraction.location && attraction.location.toLowerCase().includes(query))
    );
  }
  
  if (sortBy.value === 'rating') {
    result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortBy.value === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  return result;
});

// Component lifecycle
onMounted(fetchAttractions);

// Actions
const viewAttractionDetails = (attraction) => {
  store.commit('attraction/setCurrentAttraction', attraction);
  router.push(`/attractions/${attraction.id}`);
};

const editAttraction = (attraction) => {
  store.commit('attraction/setCurrentAttraction', attraction);
  router.push(`/attractions/${attraction.id}/edit`);
};

const handleAddAttraction = async () => {
  try {
    const formData = new FormData();
    formData.append('name', newAttraction.value.name);
    formData.append('description', newAttraction.value.description);
    formData.append('location', newAttraction.value.location);
    formData.append('rating', newAttraction.value.rating);
    if (newAttraction.value.image) {
      formData.append('image', newAttraction.value.image);
    }

    await store.dispatch('attraction/createAttraction', formData);
    showAddModal.value = false;
    newAttraction.value = {
      name: '',
      description: '',
      location: '',
      rating: null,
      image: null
    };
    await fetchAttractions();
  } catch (error) {
    console.error('Error creating attraction:', error);
  }
};

const resetFilters = () => {
  searchQuery.value = '';
  sortBy.value = 'rating';
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>