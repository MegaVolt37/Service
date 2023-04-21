<template>
  <div class="cart__item">
    <button>X</button>
    <img class="" :src="item?.product.images[0]" :alt="item?.product.name" width="100" height="100">
    <div>{{ item?.product.name }}</div>
    <div class="choiser">
      <span @click="subtract">-</span>
      <input type="tel" :value="item?.quantity" @input="changeQuantity(+$event.target.value)"
        @blur="changeQuantity(+$event.target.value)">
      <span @click="addValue">+</span>
    </div>
    <div>{{ new Intl.NumberFormat(undefined, { style: 'currency', currency: 'RUB' }).format(item?.product.price) }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ICartItem } from '~/types/cart.interface';
const emit = defineEmits(['subtractQuantity', 'submit']);
// const useI18 = ref(useI18n({ useScope: 'global' }));
// const { t, locale } = useI18.value

let { item } = defineProps({
  item: { required: true, type: Object as PropType<ICartItem> },
})
const subtract = () => {
  if (item?.quantity > 1) {
    let quantity = item.quantity;
    quantity--;
    emit('subtractQuantity', { item, quantity })
  }
}
const addValue = () => {
  let quantity = item.quantity;
  quantity++;
  emit('subtractQuantity', { item, quantity })
}
const changeQuantity = (value: number) => {
  if (!value) {
    emit('subtractQuantity', { item, quantity: 1 })
  } else {
    emit('subtractQuantity', { item, quantity: value })
  }
}
</script>

<style lang="scss">
.cart__item {
  img {
    @apply rounded-[50%]
  }
}

.choiser {
  input {
    @apply text-black;
  }
}
</style>