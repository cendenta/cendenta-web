import {
  config,
  library
} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { 
  faKeybase, 
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
  
  config.autoAddCss = false; 

library.add(
  faKeybase, 
  faStackOverflow
);