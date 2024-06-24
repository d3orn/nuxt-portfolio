<script setup>
const colorMode = useColorMode()

const modes = [
  'system',
  'light',
  'dark',
]

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const showNextModeLabel = ref(false)

const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference)

  return modes[(currentIndex + 1) % modes.length]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => {
  colorMode.preference = nextMode.value
}
</script>

<template>
  <div class="flex space-x-2 items-center">
    <div v-if="showNextModeLabel" class="text-gray-500 text:2xl md:text-xs">Change to {{ nextMode }}</div>
    <button class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
            @click="toggleMode"
            @mouseenter="showNextModeLabel = true"
            @mouseleave="showNextModeLabel = false"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>