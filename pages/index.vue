<template>
  <div class="home">
    <div class="container">
      <h1 class="home__title">Hi</h1>
      <div></div>
      <div class="products">
        <h2 class="products__title">Лидеры продаж</h2>
        <div class="products__items">
          <Card v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import Card from '~/components/Card/Card.vue';
import { products } from '~/data/product';
</script>

<style lang="scss">
.home {
  .home__title {
    @apply flex items-center justify-center
  }

  .products {}

  .products__title {}

  .products__items {
    @apply flex flex-wrap gap-5
  }
}
</style>
