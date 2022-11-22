<template>
  <div id="gamePage">
    <div class="flex justify-around	mb-2">
      <button @click="goBack"> 返回</button>
      <button>块数：{{ clearBlockNum }} / {{ totalBlockNum }}</button>
    </div>
    <!-- 弹窗 -->
    <modal v-if="gameStatus === 3" ></modal>
    <!-- 主选取 -->
    <main-container
        :gameStatus="gameStatus"
        :levelBlocksVal="levelBlocksVal"
        :heightUnit="heightUnit"
        :widthUnit="widthUnit"
        :doClickBlock="doClickBlock">
    </main-container>
    <!-- 随机block区 -->
    <random-block-container
        :randomBlocksVal="randomBlocksVal"
        :heightUnit="heightUnit" :widthUnit="widthUnit"
        :canSeeRandom="canSeeRandom"
        :doClickBlock="doClickBlock">
    </random-block-container>
    <!-- 卡槽区 -->
    <slot-container :slotAreaVal="slotAreaVal"></slot-container>
    <!-- 功能区 -->
    <functional-container :doRevert="doRevert" :doSeeRandom="doSeeRandom"></functional-container>
  </div>
</template>

<script setup>
  import useGame from "./home";
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  import SlotContainer from './SlotContainer.vue'
  import RandomBlockContainer from './RandomBlockContainer.vue'
  import FunctionalContainer from './FunctionalContainer.vue'
  import MainContainer from './MainContainer.vue'
  import Modal from './Modal.vue'

  const router = useRouter();

  const {
    gameStatus,
    levelBlocksVal,
    randomBlocksVal,
    slotAreaVal,
    widthUnit,
    heightUnit,
    totalBlockNum,
    clearBlockNum,
    canSeeRandom,
    doClickBlock,
    doStart,
    doRevert,
    doSeeRandom,
  } = useGame();

  const goBack = () => {
    router.back();
  };

  onMounted(() => {
    doStart();
  });
</script>

<style scoped>
</style>
