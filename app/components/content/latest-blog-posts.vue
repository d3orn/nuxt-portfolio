<script setup>
defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>

<template>
  <BlogPosts v-slot="{posts}" :limit="limit">
    <div v-for="post in posts" :key="post.id">
      <NuxtLink :to="post._path">
        <div>{{ post.title }}</div>
      </NuxtLink>
    </div>
  </BlogPosts>
</template>