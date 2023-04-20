
<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/" class="">
        <img src="" alt="Logo" width="50" height="50">
        Pay
      </NuxtLink>
    </div>
    <div class="header__panel">
      <div class="panel__cart">
        Корзина
        <div class="cart__badge" @click="openCart"><span>{{ cartItems.length }}</span></div>
        <div class="cart__items" v-if="isOpenCart">
          <HeaderCartItem v-for="(item, index) in cartItems" :key="index" :item="item.product" />
        </div>
      </div>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-link" v-for="(link, index) in links" :key="index">
          <NuxtLink :to="link.href">{{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="header__lang">
      <Select />
    </div>
    <div class="header__login">logout/login</div>
  </header>
</template>

<script lang="ts" setup>
import HeaderCartItem from "@/components/Header/Header_Cart_Item.vue";
import { ILinkItem } from "./Header.interface";
import { ICartItem } from '@/types/cart.interface'
const useI18 = ref(useI18n({ useScope: 'global' }));
const { t } = useI18.value;


const links = computed<ILinkItem[]>(() => [
  {
    name: t('home'),
    href: "/",
  },
  {
    name: t('contacts'),
    href: "/contacts",
  },
]
);

const cartItems: ICartItem[] = [
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
    quantity: 1,
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
];

const isOpenCart = ref(false);
const openCart = () => {
  isOpenCart.value = !isOpenCart.value
};
</script>

<style lang="scss">
.header {
  @apply grid gap-x-[20px] p-4;
  background-color: rgb(29, 25, 24);

  &__logo {
    a {
      @apply flex items-center
    }
  }

  &__lang {
    grid-row: 1;
    grid-column: 2;
  }

  &__panel {
    .panel__cart {
      .cart__badge {
        @apply rounded-[50%] w-5 h-4 bg-red flex items-center justify-center text-xs p-1;
      }
    }
  }

  &__nav {}

  &__nav-link a:hover {
    @apply text-yellow;
  }

  .header__nav-link .router-link-active {
    @apply text-yellow
  }

  &__search,
  &__nav,
  &__login {
    grid-column: 1/3;
  }
}
</style>