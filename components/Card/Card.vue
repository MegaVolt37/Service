<template>
  <div class="card">
    <div class="card__left">
      <img class="card__left-img" :src="product.images[0]" :alt="product.name" width="130" height="130">
    </div>
    <div class="card__right">
      <div class="card__right-top">
        <div class="card__right-name">{{ product.name }}</div>
      </div>
      <div class="card__right-middle">
        <div class="card__right-hashtags"><span v-for="hash in product.hashtags" :key="hash">{{ hash }}</span></div>
        <!-- <div class="card__right-hashtags"></div> -->
        <div class="card__right-count">
          <CartIcon />{{ product.count_sales }}
        </div>
      </div>
      <div class="card__right-bottom">
        <div class="card__right-price"><span class="price--old" v-if="product.discount">{{ new
          Intl.NumberFormat(undefined, { style: 'currency', currency: 'RUB' }).format(+readPriceDiscount)
        }}</span><span>{{ new Intl.NumberFormat(undefined, {
  style: 'currency', currency: 'RUB'
}).format(product.price) }}</span></div>
        <div class="card__right-buttons"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IProduct } from '~/types/product.interface';
import CartIcon from '../icons/CartIcon.vue';
const { product } = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
})
const readPriceDiscount = computed(() => (product.price / 100 * product.discount).toFixed(2));
</script>

<style lang="scss">
.card {
  @apply flex bg-white rounded-md overflow-hidden cursor-pointer gap-x-2;
  width: calc(25% - 15px);

  &__left {
    flex: 0 0 auto;
  }

  &__left-img {
    height: 100%;
    object-fit: cover;
  }

  &__right {
    @apply mr-2 w-full flex flex-col justify-between;
  }

  &__right-top {}

  &__right-name {
    @apply text-black text-xs;
    overflow-wrap: anywhere;
  }

  &__right-middle {
    @apply flex justify-between border-b border-b-black pb-1 mt-3 mb-3;
  }

  &__right-hashtags {
    @apply flex flex-col gap-y-1;

    span {
      @apply text-black mr-1 rounded-md border border-green text-xs p-1 w-fit pt-[1px];
    }
  }

  &__right-count {
    @apply text-black flex items-center gap-2 self-end;

    svg {
      width: 15px;
      height: 15px;
    }
  }

  &__right-bottom {}

  &__right-price {
    @apply text-black relative font-bold;

  }

  .price--old {
    @apply absolute -top-2.5 text-xs line-through font-normal;
  }

  &__right-buttons {}
}
</style>