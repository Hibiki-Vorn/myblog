<script setup>
  import Giscus from '@giscus/vue'
  import { watch, ref } from 'vue'
  import { useData } from 'vitepress'
  let theme = ref("light")

  const { isDark } = useData()

  watch(
    isDark,
    (dark) => {
      theme.value = dark ? 'dark' : 'light'
    },
    { immediate: true }
  )
</script>
<template>
  <Giscus
    repo="Hibiki-Vorn/myblog"
    repo-id="R_kgDOQA8EkA"
    category="Comments"
    category-id="DIC_kwDOQA8EkM4C0ID8"
    mapping="pathname"
    strict="1"
    reactions-enabled="1"
    emit-metadata="1"
    input-position="bottom"
    :theme="theme"
    lang="en"
  />
</template>