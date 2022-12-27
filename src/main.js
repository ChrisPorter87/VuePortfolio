import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBrain, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */

library.add(faUserSecret, faBrain, fab), faHatWizard;
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
