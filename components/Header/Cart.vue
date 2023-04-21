<template>
  <div class="panel__cart">
    <span class="btn__header" role="button">{{ $t('cart') }}</span>
    <!-- <div class="cart__badge" @click="openCart"><span>{{ cartItems.length }}</span></div> -->
    <div class="cart__items" v-if="isOpenCart">
      <CartItem v-for="(item, index) in cartItems" :key="index" :item="item" @subtractQuantity="changeQuantity" />
    </div>
    <div class="cart__footer" v-if="isOpenCart">
      <span>{{ $t('total') }}:</span>
      <span>100</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CartItem from "@/components/Header/Cart_Item.vue";
import { ICartItem } from '@/types/cart.interface';
// const useI18 = ref(useI18n({ useScope: 'global' }));
// const { t, locale } = useI18.value
const cartItems: ICartItem[] = ref([
  {
    id: 1,
    product: {
      id: 1,
      name: "wdad",
      description: "wdad",
      price: 130,
      rating: 0,
      images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'],
    },
    quantity: 3,
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "wda13d",
      description: "wda4d",
      price: 1130,
      rating: 0,
      images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'],
    },
    quantity: 1,
  },
]);
const isOpenCart = ref(false);
const openCart = async () => {
  isOpenCart.value = !isOpenCart.value
  const res = await fetchAuth('');
  console.log(res)
};
const changeQuantity = (value: object) => {
  const { item, quantity } = value;
  item.quantity = quantity
}
</script>

<style lang="scss">
.panel__cart {
  .cart__badge {
    @apply rounded-[50%] w-5 h-4 bg-red flex items-center justify-center text-xs p-1;
  }
}
</style>