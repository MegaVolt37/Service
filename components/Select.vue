<template>
  <div class="select" @mousemove="showList(true)" @mouseleave="showList(false)">
    <div class="select__title" >{{ readSelected?.title }} <span :style="readStyleArrow"></span></div>
    <ul class="select__list" v-show="isActiveList">
      <li class="select__item" v-for="lang in langs" :key="lang.key" @click="switchLanguage(lang.key)">{{ lang.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Lang {
  key: string,
  title: string
}
const useI18 = ref(useI18n({ useScope: 'global' }));
const { t, locale, setLocale } = useI18.value

const langs: Lang[] = [
  {
    key: 'en',
    title: t('language.en')
  },
  {
    key: 'ru',
    title: t('language.ru')
  },
];
let langSelect = ref(locale);
let isActiveList = ref(false);

const readSelected = computed(() => langs.find((el) => el.key == langSelect.value))
const readStyleArrow = computed(() => isActiveList.value ? 'transform: rotateZ(45deg); margin-top: 4px;' : '');

const switchLanguage = (newLocale: string) => {
  setLocale(newLocale);
  langSelect.value = newLocale
};
const showList = (value:boolean) => {
  isActiveList.value = value;
}

</script>
<style lang="scss">
.select {
  @apply pb-1 relative;
  &__title {
    @apply border border-green rounded-md pl-2 pr-2 flex items-center gap-2 cursor-pointer hover:bg-yellow;

    span {
      @apply block mt-0 w-[6px] h-[6px] rotate-[225deg] border-green border-l-[1px] border-t-[1px];
    }
  }
  ul.select__list {
    @apply border border-green rounded-md flex flex-col gap-1 overflow-hidden absolute left-0 right-0 top-7;
  }
  &__item {
    @apply cursor-pointer hover:bg-yellow pl-2 pr-2;
  }
}
</style>