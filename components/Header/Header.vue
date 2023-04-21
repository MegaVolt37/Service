
<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <NuxtLink to="/" class="">
            <img src="" alt="Logo" width="50" height="50">
            Pay
          </NuxtLink>
        </div>
        <div class="header__search">
          <Search />
        </div>
        <div class="header__panel">
          <Cart />
        </div>
        <div class="header__login"><span class="btn__header">logout/login</span></div>
        <div class="header__lang">
          <Select />
        </div>
      </div>
      <div class="header__bottom">
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-link" v-for="(link, index) in links" :key="index">
              <NuxtLink :to="link.href">{{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Cart from "@/components/Header/Cart.vue";
import Search from "@/components/Search.vue";
import { ILinkItem } from "./Header.interface";
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
</script>

<style lang="scss">
.header {
  @apply grid gap-x-[20px] py-4 sticky top-0;
  background-color: rgb(29, 25, 24);

  .header__top {
    @apply flex gap-7 items-center;
    // grid-template-columns: repeat(auto-fit,minmax(50px, 1fr));

  }
  .header__bottom {
    @apply mt-3;
  }
  &__logo {
    @apply max-w-[150px] w-full;

    a {
      @apply flex items-center
    }
  }

  &__search {
    @apply w-full h-[50px];

    grid-column: 2;

  }

  &__panel {
    grid-column: 3;
  }

  &__lang {
    @apply self-start;
    grid-column: 4;
  }

  &__nav {}
  .header__nav-list {
    @apply flex gap-5;
  }
  &__nav-link a:hover {
    @apply text-yellow;
  }

  .header__nav-link .router-link-active {
    @apply text-yellow
  }

  // &__nav,
  // &__login {
  //   grid-column: 1/3;
  // }
}
</style>