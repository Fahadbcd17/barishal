<template>    
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 py-12">
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
               
        <!-- Right Side: Contact Form -->
        <div v-else class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-200 w-full max-w-lg transition-all hover:shadow-2xl">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-3">Thank You for Your Interest in Barishal!</h2>
            <p class="text-gray-600">Fill out the form below to hire a local guide or get travel assistance. We'll respond promptly.</p>
          </div>
          
          <form class="space-y-5" @submit.prevent="submitForm">
            <div class="relative">
              <input type="text" v-model="name" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 focus:border-purple-500 focus:ring-0 px-0 py-3 transition-all" required>
              <label class="absolute left-0 -top-5 text-gray-500 text-sm peer-focus:text-purple-500 peer-focus:-top-5 peer-placeholder-shown:top-2 transition-all">Name*</label>
            </div>
            
            <div class="relative">
              <input type="text" v-model="phone" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 focus:border-purple-500 focus:ring-0 px-0 py-3 transition-all">
              <label class="absolute left-0 -top-5 text-gray-500 text-sm peer-focus:text-purple-500 peer-focus:-top-5 peer-placeholder-shown:top-2 transition-all">Phone Number</label>
            </div>
            
            <div class="relative">
              <input type="email" v-model="email" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 focus:border-purple-500 focus:ring-0 px-0 py-3 transition-all" required>
              <label class="absolute left-0 -top-5 text-gray-500 text-sm peer-focus:text-purple-500 peer-focus:-top-5 peer-placeholder-shown:top-2 transition-all">Email*</label>
            </div>
            
            <div class="relative">
              <input type="text" v-model="subject" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 focus:border-purple-500 focus:ring-0 px-0 py-3 transition-all" required>
              <label class="absolute left-0 -top-5 text-gray-500 text-sm peer-focus:text-purple-500 peer-focus:-top-5 peer-placeholder-shown:top-2 transition-all">Subject*</label>
            </div>
            
            <div class="relative">
              <textarea v-model="message" placeholder=" " class="peer w-full border-0 border-b-2 border-gray-300 focus:border-purple-500 focus:ring-0 px-0 py-3 h-24 resize-none transition-all" required></textarea>
              <label class="absolute left-0 -top-5 text-gray-500 text-sm peer-focus:text-purple-500 peer-focus:-top-5 peer-placeholder-shown:top-2 transition-all">Message*</label>
            </div>
            
            <div class="pt-4 text-center">
              <button type="submit" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg font-medium">
                Submit Message
              </button>
            </div>
          </form>
          
          <!-- Notification Toasts -->
          <div v-if="error" class="fixed top-6 right-6 z-50 animate-fade-in">
            <div class="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-lg shadow-lg max-w-xs md:max-w-md flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="font-medium">{{ error }}</p>
            </div>
          </div>
          
          <div v-if="isSuccess" class="fixed top-6 right-6 z-50 animate-fade-in">
            <div class="bg-green-50 border-l-4 border-green-500 text-green-800 p-4 rounded-lg shadow-lg max-w-xs md:max-w-md flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="font-medium">{{ successMessage }}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const name = ref('');
const phone = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref(null);
const successMessage = ref('');
const accessToken = computed(()=> store.getters['auth/accessToken'])

const submitForm = async () => {
  isLoading.value = true;
  error.value = null;
  isSuccess.value = false;
  
  try {
    const response = await fetch('http://127.0.0.1:8000/api/message/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      }),
    });

    isSuccess.value = true;
    successMessage.value = "Message sent successfully";
    name.value = '';
    phone.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
    
  } catch (err) {
    error.value = err.message || 'Failed to submit form';
    console.error('Form submission error:', err);
  } finally {
    isLoading.value = false;
  }
  
  if (isSuccess.value) {
    setTimeout(() => isSuccess.value = false, 5000);
  }
  if (error.value) {
    setTimeout(() => error.value = null, 5000);
  } 
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}


</style>