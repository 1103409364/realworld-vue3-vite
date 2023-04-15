import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "src/assets/style/global.css";
import { router } from "./router";

import registerGlobalComponents from "./plugins/global-components";
import setAuthorizationToken from "./plugins/set-authorization-token";

const app = createApp(App);
app.use(router);
app.use(createPinia());

setAuthorizationToken();
registerGlobalComponents(app);

app.mount("#app");
