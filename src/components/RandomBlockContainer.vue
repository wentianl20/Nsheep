<template>
  <div class="mt-2">
    <div
        v-for="(randomBlock, index) in randomBlocksVal"
        :key="index"
        class="mt-2"
    >
      <block v-if="randomBlock.length > 0"
             :heightUnit="heightUnit" :widthUnit="widthUnit"
             :block="randomBlock[0]" :doClickBlock="() => doClickBlock(randomBlock[0], index)">
      </block>
      <!-- 隐藏 -->
      <div
          v-for="num in Math.max(randomBlock.length - 1, 0)"
          :key="num"
          class="block disabled"
      >
          <span v-if="canSeeRandom">
            <img :src="getImgUrl(randomBlock[num].type)" alt="">
          </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import block from './Block.vue'

  const props = defineProps({
    randomBlocksVal: {
      type: Array,
      default: []
    },
    heightUnit: {
      type: Number,
      default: 0
    },
    widthUnit: {
      type: Number,
      default: 0
    },
    doClickBlock: {
      type: Function,
      default: ()=> {}
    },
    canSeeRandom: {
      type: Boolean,
      default: false
    }
  })

  const getImgUrl = (id) => new URL(`../assets/${id}.png`, import.meta.url).href

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

.disabled {
  background: grey;
  cursor: not-allowed;
}

</style>
