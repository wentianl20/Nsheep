<template>
  <div id="gamePage">
    <div class="flex justify-around	mb-2">
      <button @click="goBack"> 返回</button>
      <button>块数：{{ clearBlockNum }} / {{ totalBlockNum }}</button>
    </div>
    <!-- 胜利 -->
    <div class="flex justify-center">
      <div v-if="gameStatus === 3" style="text-align: center">
        <h2>恭喜，你赢啦！🎉</h2>
      </div>
    </div>
    <!-- 分层选块 -->
    <div class="flex justify-center">
      <div v-show="gameStatus > 0" class="level-board">
        <div v-for="(block, idx) in levelBlocksVal" :key="idx">
          <block :block="block" :heightUnit="heightUnit" :widthUnit="widthUnit" :doClickBlock="() => doClickBlock(block)">
          </block>
        </div>
      </div>
    </div>
    <!-- 随机选块 -->
    <random-block-container
        :randomBlocksVal="randomBlocksVal"
        :heightUnit="heightUnit" :widthUnit="widthUnit"
        :canSeeRandom="canSeeRandom"
        :doClickBlock="doClickBlock">
    </random-block-container>
    <!-- 槽位 -->
    <slot-container :slotAreaVal="slotAreaVal"></slot-container>
    <!-- 技能 -->
    <div class="skill-board">
      <div>
        <button size="small" @click="doRevert">撤回</button>
        <button size="small" @click="doSeeRandom">透视</button>
        <button size="small" @click="reload">重新来过</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useGame from "./home";
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  import block from './Block.vue'
  import SlotContainer from './SlotContainer.vue'
  import RandomBlockContainer from './RandomBlockContainer.vue'

  const getImgUrl = (id) => new URL(`../assets/${id}.png`, import.meta.url).href

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

  const reload = () => {
    location.reload()
  }

  onMounted(() => {
    doStart();
  });
</script>

<style scoped>
  .level-board {
    position: relative;
  }

  .level-block {
    position: absolute;
  }

  .skill-board {
    text-align: center;
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

  .disabled {
    background: grey;
    cursor: not-allowed;
  }
</style>
