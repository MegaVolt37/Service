<template>
  <div>
    <ul class="product__list">
      <li class="product__item" v-for="product in products" :key="product.id" :class="{ active: isHovered === product.id }"
        @mouseover="isHovered = product.id" @mouseleave="isHovered = product.id">
        <p class="product__item-title">{{ product.name }}</p>
        <div class="product__item-supplier">
          <NuxtImg loading="lazy" format="webp" :src="product.provider.image" :alt="product.name" width="30" height="30"/>
          <span>{{ product.provider.name }}</span>
          <div>{{ product.rating }}{{ product.reviews }}</div>
          <span>{{ product.provider.createdAt }}</span>
        </div>
        <span class="product__item-price">{{ calcPriceDiscount(product.price, product.discount) }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { products } from "@/data/product";
const isHovered = ref(-1);
</script>

<style lang="scss">
.product__list {
  @apply grid grid-cols-4 gap-4;
}
.product__item {
  @apply border-red border rounded-md;
  // border: 1px solid red;
}
.product__item-title {
  @include textOverflow;
}
</style>