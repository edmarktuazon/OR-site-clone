/** @format */

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/public/base.css";

// import { faHatWizard } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(faHatWizard);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

createApp(App).use(router).mount("#app");
