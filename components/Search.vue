<template>
  <div class="search">
    <input class="" type="text" :placeholder="$t('placeholders.search')" v-model="readSearchText">
    <button class="" :name="$t('placeholders.search')">
      <GlassIcon :fill="'#008D64'" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import GlassIcon from './icons/GlassIcon.vue';
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
  @apply flex gap-2 h-full relative;

  input {
    @apply text-black pl-2 pr-10 rounded-md h-full;
  }

  button {
    @apply flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>