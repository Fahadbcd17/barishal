<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <!-- Hero Section -->
      <section class="relative bg-indigo-700 text-white py-20 px-4 overflow-hidden">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
        </div>
        <div class="relative max-w-7xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Barishal Story</h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            Unveiling the rich history, vibrant culture, and hidden gems that make our city unique
          </p>
        </div>
      </section>
  
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <!-- Our Story Section -->
        <section class="mb-16">
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/2">
              <!-- <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Story</h2> -->
              <div class="prose prose-lg text-gray-600">
                <p>
                    Nestled along the winding rivers of southern Bangladesh, Barishal Explorer was born in 2023 from a deep love for this watery wonderland. What started as a humble Facebook page sharing snapshots of floating markets and colonial-era mansions has blossomed into a vibrant community celebrating the soul of Barishal.
                </p>
                <p class="mt-4">
                    We're a team of river children, rickshaw poets, and history enthusiasts united by one mission: to reveal the hidden magic of Barishal—from the whispering Amiyakhali Canal to the bustling Nathullabad fish markets, from century-old Guthia Mosque to the fiery shutki (dried fish) stalls that perfume the air at dusk.
                </p>
                <p class="mt-4">
                    Every story we share is a love letter to this land of boatmen’s songs, monsoon rains, and the golden chandmama (moonlight) dancing on the Kirtankhola River. Come explore with us—not as tourists, but as fellow wanderers in Bangladesh’s Venice of the East.
                </p>
                <p class="mt-4">
                    "Where rivers tell stories and every lane leads to adventure."
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="City skyline"
                  class="w-full h-auto object-cover"
                >
              </div>
            </div>
          </div>
        </section>
  
        <!-- Mission Section -->
        <section class="mb-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Our Mission</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Connect People</h3>
              <p class="text-gray-600">
                Bridge the gap between visitors and locals through authentic experiences and shared stories.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Showcase Culture</h3>
              <p class="text-gray-600">
                Highlight the diverse cultural tapestry that makes our city vibrant and unique.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Preserve Heritage</h3>
              <p class="text-gray-600">
                Document and celebrate the historical legacy that shapes our city's identity.
              </p>
            </div>
          </div>
        </section>
  
        <!-- Team Section -->
        <!-- <section class="mb-16">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="member in team" :key="member.name" class="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-64 object-cover"
              >
              <div class="p-6">
                <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                <p class="text-indigo-600 mb-2">{{ member.role }}</p>
                <p class="text-gray-600">{{ member.bio }}</p>
                <div class="flex space-x-3 mt-4">
                  <a v-if="member.twitter" :href="member.twitter" class="text-gray-400 hover:text-indigo-600">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a v-if="member.linkedin" :href="member.linkedin" class="text-gray-400 hover:text-indigo-600">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> -->
  
        <!-- Stats Section -->
        <section class="bg-indigo-700 text-white rounded-2xl p-8 mb-16">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.label" class="p-4">
              <p class="text-4xl font-bold mb-2">{{ stat.value }}</p>
              <p class="text-indigo-200">{{ stat.label }}</p>
            </div>
          </div>
        </section>
  
        <!-- CTA Section -->
        <section class="text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Ready to Explore?</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of others discovering the best our city has to offer
          </p>
          <!-- <router-link 
            to="/register" 
            class="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </router-link> -->
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
//   const team = [
//     {
//       name: 'Alex Johnson',
//       role: 'Founder & CEO',
//       bio: 'Local historian with a passion for urban storytelling',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
//       twitter: '#',
//       linkedin: '#'
//     },
//     {
//       name: 'Maria Garcia',
//       role: 'Content Director',
//       bio: 'Food and culture enthusiast documenting city life',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
//       twitter: '#',
//       linkedin: '#'
//     },
//     {
//       name: 'James Wilson',
//       role: 'Community Manager',
//       bio: 'Connecting locals and visitors through shared experiences',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
//       twitter: '#',
//       linkedin: '#'
//     },
//     {
//       name: 'Sarah Chen',
//       role: 'Photographer',
//       bio: 'Capturing the city\'s essence through her lens',
//       image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
//       twitter: '#',
//       linkedin: '#'
//     }
//   ];
  
  const stats = [
    { value: '500+', label: 'Local Guides' },
    { value: '10K+', label: 'Monthly Visitors' },
    { value: '2K+', label: 'City Locations' },
    { value: '95%', label: 'User Satisfaction' }
  ];
  </script>