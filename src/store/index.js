/**
 * Create by pirlo
 * Date: 2022/10/26 4:30 PM
 * Update: 2022/10/26 4:30 PM
 */
import { defineStore } from "pinia";
import { defaultGameConfig } from "../util/config";

export const useStore = defineStore("global", {
    state: () => ({
        customConfig: { ...defaultGameConfig },
        gameConfig: { ...defaultGameConfig },
    }),
    getters: {},
    // 持久化
    persist: {
        key: "global",
        storage: window.localStorage,
        beforeRestore: (context) => {
            console.log("load globalStore data start");
        },
        afterRestore: (context) => {
            console.log("load globalStore data end");
        },
    },
    actions: {
        setGameConfig(gameConfig) {
            this.gameConfig = gameConfig;
        },
        setCustomConfig(customConfig) {
            this.customConfig = customConfig;
        },
        reset() {
            this.$reset();
        },
    },
});
