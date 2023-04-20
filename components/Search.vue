<template>
  <div class="search">
    <input class="" type="text" :placeholder="$t('placeholders.search')"
      v-model="readSearchText">
    <button
      class="">{{
        $t('placeholders.search')
      }}</button>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const searchText = ref<string>("");

const readSearchText = computed({
  get() {
    return searchText.value
  },
  set(val) {
    searchText.value = val
    if (val) {
      router.push({ query: { ...route.query, search: val } })
    } else {
      const { search, ...query } = route.query;
      router.replace({ query });
    }
  }
})
onMounted(() => {
  if (route.query.search) {
    searchText.value = route.query.search as string
  }
});
</script>

<style lang="scss">
.search {
  @apply flex gap-2;

  input {
    @apply text-black pl-2 pr-2 rounded-md h-10;
  }

  button {
    @apply h-10 border border-white rounded-md flex items-center justify-center pl-1 pr-1 hover:bg-light hover:text-black hover:border-light;
  }
}
</style>