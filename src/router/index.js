/**
 * Create by pirlo
 * Date: 2022/10/25 6:22 PM
 * Update: 2022/10/25 6:22 PM
 */

import HomePage from "../components/Home.vue";
import ConfigPage from "../components/Config.vue";

export default [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/config",
        component: ConfigPage,
    },
]
