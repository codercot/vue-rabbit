
<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import { onMounted } from 'vue'
import useCategory from '@/stores/moudle/category'
const categoryStore = useCategory()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<style scoped>

</style>