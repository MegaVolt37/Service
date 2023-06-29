<template>
  <div class="breadcrumbs">
    <NuxtLink v-for="(link, index) in readLinks" :key="index" :to="link">{{ link.name }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const readLinks = computed(() => {
  let tmp = []
  if (route.matched) {
    route.matched.forEach(link => {
      tmp.push(Object.assign({ meta: { title: 'Title not found in meta' } }, link))
    })
  }
  if (tmp.length === 0) {
    tmp.push({ path: '/', meta: { title: 'Home' } })
  }
  return tmp
})
</script>

<style></style>