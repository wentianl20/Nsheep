<template>
  <div class="flex justify-center">
    <div v-show="gameStatus > 0" class="level-board">
      <div v-for="(block, idx) in levelBlocksVal" :key="idx">
        <block :block="block" :heightUnit="heightUnit" :widthUnit="widthUnit" :doClickBlock="() => doClickBlock(block)">
        </block>
      </div>
    </div>
  </div>
</template>

<script setup>
  import block from './Block.vue'

  const props = defineProps({
    gameStatus: {
      type: Number,
      required: true
    },
    levelBlocksVal: {
      type: Array,
      required: true
    },
    heightUnit: {
      type: Number,
      required: true
    },
    widthUnit: {
      type: Number,
      required: true
    },
    doClickBlock: {
      type: Function,
      required: true
    }
  })
</script>

<style scoped>
  .level-board {
    position: relative;
  }
</style>
