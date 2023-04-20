<template>
  <div class="cart__item">
    <img class="" :src="item?.images[0]" :alt="item?.name" width="100" height="100">
    <div>{{ item?.name }}</div>
    <div>{{ new Intl.NumberFormat(undefined, { style: 'currency', currency: 'RUB' }).format(item?.price) }}</div>
  </div>
</template>

<script lang="ts" setup>
import { IProduct } from '~/types/product.interface';
const useI18 = ref(useI18n({ useScope: 'global' }));
const { t, locale } = useI18.value

const { item } = defineProps({
  item: { type: Object as PropType<IProduct> },
})
</script>

<style lang="scss">
.cart__item {
  img {
    @apply rounded-[50%]
  }
}
</style>