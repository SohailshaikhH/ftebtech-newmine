// Optimized Font Awesome Configuration
import { library } from '@fortawesome/fontawesome-svg-core';

// Import only the icons you actually use
import {
  faHome,
  faLayerGroup,
  faEnvelope,
  faBars,
  faTimes,
  faCloud,
  faServer,
  faShieldAlt,
  faCode,
  faDatabase,
  faNetworkWired,
  faChartLine,
  faCog,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faPlus,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faPaperPlane,
  faDesktop,
  faGoogleDrive
} from '@fortawesome/free-solid-svg-icons';

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
  // Navigation Icons
  faHome,
  faLayerGroup,
  faEnvelope,
  faBars,
  faTimes,

  // Service Icons
  faCloud,
  faServer,
  faShieldAlt,
  faCode,
  faDatabase,
  faNetworkWired,
  faChartLine,
  faCog,

  // Contact Icons
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,

  // Action Icons
  faArrowRight,
  faArrowLeft,
  faCheck,
  faPlus,

  // Status Icons
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,

  // Social Icons
  faLinkedinIn,

  // Additional Icons
  faPaperPlane,
  faDesktop,
  faGoogleDrive
);

// Configure Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above