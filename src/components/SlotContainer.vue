<template>
  <div v-if="slotAreaVal.length > 0" class="slot-board">
    <div v-for="(slotBlock, index) in slotAreaVal" :key="index" class="block">
      <img v-if="slotBlock" :src="getImgUrl(slotBlock?.type)" alt="">
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    slotAreaVal: {
      type: Array,
      required: true,
      default: []
    }
  })

  const getImgUrl = (id) => new URL(`../assets/${id}.png`, import.meta.url).href

</script>

<style scoped>

.slot-board {
  border: 10px solid saddlebrown;
  margin: 16px auto;
  width: fit-content;
}

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
