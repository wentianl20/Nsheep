<template>
  <div
      v-if="block.status === 0"
      class="block level-block"
      :class="{
              disabled: block.lowerThanBlocks.length > 0,
            }"
      :data-id="block.id"
      :style="{
              zIndex: 100 + block.level,
              left: block.x * widthUnit + 'px',
              top: block.y * heightUnit + 'px',
            }"
      @click="doClickBlock"
  >
    <img :src="getImgUrl(block.type)"  alt="">
  </div>
</template>

<script setup>
  // vite引入动态图片必须这么写
  const getImgUrl = (id) => new URL(`../assets/${id}.png`, import.meta.url).href

  const props = defineProps({
    block: {
      type: Object,
      required: true
    },
    widthUnit: {
      type: Number,
      required: true
    },
    heightUnit: {
      type: Number,
      required: true
    },
    doClickBlock: {
      type: Function,
      default: () => {}
    }
  })

</script>

<style scoped>
  .block {
    font-size: 28px;
    width: 42px;
    height: 42px;
    line-height: 42px;
    border: 1px solid #eee;
    background: white;
    text-align: center;
    vertical-align: top;
    display: inline-block;
  }

</style>
