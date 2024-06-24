<script setup>
import TocLinks from "~/components/toc-links.vue";

const route = useRoute()

const activeId = ref(null)

onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  const elements = document.querySelectorAll('h2, h3')
  for (const element of elements) {
    observer.observe(element)
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})

console.log(route.params.slug)
</script>

<template>
  <article
      class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <ContentDoc>
      <!-- {{ doc.body.toc.links }} -->
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc}">
            <ContentRenderer :value="doc"/>
          </div>
          <div v-if="doc.toc" class="hidden md:col-span-2 md:block not-prose">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">
                <span>Table of Contents</span>
              </div>
              <nav>
                <TocLinks :active-id="activeId" :links="doc.body.toc.links"/>
              </nav>
            </aside>
          </div>
        </div>
      </template>

      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found.</p>
      </template>
    </ContentDoc>
  </article>
</template>

