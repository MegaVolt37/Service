<template>
  <div class="card" @click="goToCard(product.id)">
    <span class="card__sticker" v-if="product.discount">- {{ product.discount }}%</span>
    <div class="card__left">
      <NuxtImg class="card__left-img" format="webp" loading="lazy" :src="product.images[0]" width="130" height="130"/>
      <!-- <img class="card__left-img" :src="product.images[0]" :alt="product.name" width="130" height="130"> -->
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
        <div class="card__right-price"><span class="price--old" v-if="product.discount">{{
          formatToCurrency(calcPriceDiscount(product.price, product.discount)) }}</span><span>{{
    formatToCurrency(product.price) }}</span></div>
        <div class="card__right-buttons">Go</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IProduct } from '~/types/product.interface';
import CartIcon from '../icons/CartIcon.vue';
const router = useRouter();
const { product } = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
})
const goToCard = (id: number) => router.push(`./product/${id}`)
const read = computed(() => {
  let arr = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  let obj = { id: 1, id2: 1, id3: 1, id4: 1, id5: 1, id6: 1 };
  Object.values(obj).reduce((acc, item) => item += acc, 0)
  return Object.values(obj).reduce((acc, item) => item += acc, 0)
})
</script>

<style lang="scss">
.card {
  @apply flex relative bg-white rounded-md cursor-pointer gap-x-2;
  width: calc(25% - 15px);

  &__sticker {
    @apply absolute left-3 -top-4 border-yellow border-[1px] rounded-md block p-1 pr-2 pl-2 bg-green;
  }

  &__left {
    flex: 0 0 auto;
    @apply rounded-l-md;
  }

  &__left-img {
    height: 100%;
    object-fit: cover;
    @apply rounded-l-md;
  }

  &__right {
    @apply mr-2 w-full flex flex-col justify-between;
  }

  &__right-top {}

  &__right-name {
    @apply text-black text-xs;
    @include textOverflow;
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

  &__right-bottom {
    @apply flex justify-between;
  }

  &__right-price {
    @apply text-black relative font-bold;

  }

  .price--old {
    @apply absolute -top-2.5 text-xs line-through font-normal;
  }

  &__right-buttons {
    @apply text-black;
  }
}
</style>