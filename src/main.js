import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import VueScrollTo from "vue-scrollto";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faLock,
  faMapMarked,
  faUser,
  faSignOutAlt,
  faMapMarkedAlt,
  faMapMarker,
  faLocationArrow,
  faInfoCircle,
  faParking,
  faTimes,
  faSearch,
  faStar,
  faHeart,
  faCamera,
  faUserCircle,
  faSignInAlt,
  faUserTie,
  faUserPlus,
  faArrowAltCircleRight,
  faBars,
  faArrowCircleLeft,
  faTimesCircle,
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
  faHome,
  faUniversity,
  faBriefcase,
  faSignature,
  faBook,
  faUsers,
  faEnvelopeOpenText,
  faCalendarAlt,
  faProjectDiagram,
  faExpand,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faPaperPlane,
  faCheckCircle,
  faSpinner,
  faCameraRetro,
  faSave,
  faExclamationTriangle,
  faCogs,
  faUserTimes,
  faUserMinus,
  faUserEdit,
  faAddressCard,
  faPhone,
  faWarehouse,
  faListAlt,
  faUserShield,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faTwitter, faWhatsapp, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEnvelope,
  faLock,
  faMapMarked,
  faUser,
  faSignOutAlt,
  faAddressCard,
  faPhone,
  faEnvelope,
  faWarehouse,
  faListAlt,
  faUserShield,
  faClock,
  faMapMarkedAlt,
  faMapMarker,
  faLocationArrow,
  faInfoCircle,
  faParking,
  faTimes,
  faTimesCircle,
  faSearch,
  faStar,
  faHeart,
  farHeart,
  faCamera,
  faUserCircle,
  faSignInAlt,
  faUserTie,
  faUserPlus,
  faUserTimes,
  faUserMinus,
  faUserEdit,
  faArrowAltCircleRight,
  faBars,
  faArrowCircleLeft,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
  faBars,
  faHome,
  faUniversity,
  faBriefcase,
  faSignature,
  faBook,
  faUsers,
  faCogs,
  faEnvelopeOpenText,
  faInfoCircle,
  faCalendarAlt,
  faProjectDiagram,
  faExpand,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faTwitter,
  faLinkedin,
  faPaperPlane,
  faTimesCircle,
  faTimesCircle,
  faCheckCircle,
  faSpinner,
  faSearch,
  faCameraRetro,
  faInstagram,
  faFacebook,
  faTwitter,
  faWhatsapp,
  faSave,
  faExclamationTriangle
);
Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false;

axios.defaults.headers.common["Access-Control-Allow-CrossOrigin"] = "*";

Vue.use(VueAxios, axios);

Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
