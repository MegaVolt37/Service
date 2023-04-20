<template>
  <div class="layout">
    <Header></Header>
    <div class="page">
      <NuxtPage />
    </div>
  </div>
</template>
<style lang="scss">
.layout {
  @apply h-screen flex overflow-hidden;
}
.page {
  @apply flex-auto overflow-x-auto p-10 min-h-screen max-h-screen;
}
</style>

