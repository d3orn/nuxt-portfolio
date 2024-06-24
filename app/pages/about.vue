<!--<script setup>-->
<!--const enableCustomLayout = () => {-->
<!--  setPageLayout('another');-->
<!--}-->

<!--definePageMeta({-->
<!--  layout: 'another'-->
<!--})-->
<!--</script>-->

<script lang="ts" setup>
useHead({
  title: 'About',
})
</script>

<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentDoc path="/about"/>
    <!--    <button @click="enableCustomLayout">Update layout</button>-->
  </article>
</template>