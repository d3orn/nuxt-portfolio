<script setup>
const route = useRoute()

defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
})
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :class="{'ml-4': level, 'text-green-600 dark:text-green-400': activeId === link.id}"
                :to="{path: route.path, hash: `#${link.id}`}">
        {{ link.text }}
      </NuxtLink>
      <TocLinks :active-id="activeId" :level="level + 1" :links="link.children"/>
    </li>
  </ul>
</template>