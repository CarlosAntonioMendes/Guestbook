<script setup lang="ts">
import { ref, onMounted } from 'vue';

type User = {
  username: string;
  post: string;
  createdAt: string;
};

const res = ref<User[]>([]);
const user = ref({
  username: '',
  createdAt: '',
  post: '',
});

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3333/user');
    const jsons = await response.json();
    res.value = jsons;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

async function send() {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user.value),
    };

    const response = await fetch('http://localhost:3333/user', options);

    const responseData = await response.json();
    console.log('Response data:', responseData);
    
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
</script>

<template>
  <div class="w-full min-h-screen bg-gray-500 flex justify-center px-4">
    <main class="my-10 w-full md:max-w-2xl">
      <h1 class="text-center font-medium text-white flex">Guestbook</h1>
      <form class="flex flex-col my-6">
        <input v-model="user.username" type="text" placeholder="Username" class="rounded" />
        <label><br /></label>
        <input v-model="user.post" type="text" placeholder="Post" class="rounded" />
        <label><br /></label>
        <button @click="send" class="background-color: bg-green-300 ">Send</button>
      </form>
      <section class="flex flex-col">
        <article v-for="(entry, index) in res.slice().reverse()" :key="index" class="bg-white rounded p-2 border">
          <p><span class="font-medium"></span> {{ entry.username }}</p>
          <p><span class="font-medium"></span> em {{ formatDate(entry.createdAt) }}</p>
          <p><span class="font-medium"></span> {{ entry.post }} </p>
        </article>
      </section>      
    </main>
  </div>
</template>