<template>
  <div class="text-center">
    <div class="mt-5 sm:mt-8 flex justify-center">
      <div class="rounded-md shadow" @click="doRevert">
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-base font-sm text-indigo-700 hover:bg-indigo-200 md:py-2 md:px-4 md:text-lg">撤销</a>
      </div>
      <div class="ml-3" @click="doSeeRandom">
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-base font-sm text-indigo-700 hover:bg-indigo-200 md:py-2 md:px-4 md:text-lg">透视</a>
      </div>
      <div class="ml-3" @click="reload">
        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-base font-sm text-indigo-700 hover:bg-indigo-200 md:py-2 md:px-4 md:text-lg">重新来过</a>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    doRevert: {
      type: Function,
      default: ()=>{}
    },
    doSeeRandom: {
      type: Function,
      default: () => {}
    }
  })

  const reload = () => {
    location.reload()
  }
</script>

<style scoped>

</style>
