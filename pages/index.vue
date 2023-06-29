<template>
  <div class="home">
    <div class="container">
      <div></div>
      <div class="home__popular">
        <h2 class="popular__title">Лидеры продаж</h2>
        <div class="popular__items">
          <Card v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
      <div class="home__list-wrapper">
        <h2 class="popular__title">Каталог товаров</h2>
        <div class="home__list">
          <div class="list__item" v-for="item in catalog" :key="item.id">
            <h5 class="list__item-title">{{ item.name }}</h5>
            <ul class="item__list">
              <li v-for="itemList in item.items" :key="itemList.id">{{ itemList.name }}</li>
            </ul>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import { products } from '~/data/product';
import { catalog } from '~/data/catalog';
</script>

<style lang="scss">
.home {
  .home__title {
    @apply flex items-center justify-center
  }

  &__popular {}

  .popular__title {
    @apply mb-5 mt-5;
  }

  .popular__items {
    @apply flex flex-wrap gap-5
  }

  &__list {
    @apply flex gap-3 flex-wrap;
  }

  .list__item {
    @apply border-red border-[1px] p-1 flex flex-col rounded-md;
  }

  .list__item-title {
    @apply text-green cursor-pointer hover:text-black;
  }

  .item__list {

    li {
      @apply cursor-pointer hover:text-green;
    }
  }
}
</style>
