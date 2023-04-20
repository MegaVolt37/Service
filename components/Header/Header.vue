
<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/" class="">
        <img src="" alt="Logo" width="50" height="50">
        Pay
      </NuxtLink>
    </div>
    <div class="header__panel">
      <Cart />
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
import Cart from "@/components/Header/Cart.vue";
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