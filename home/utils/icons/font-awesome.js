import {
  config,
  library
} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { 
  faGithub,
  faKeybase, 
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
  
  config.autoAddCss = false; 

library.add(
  faGithub,
  faKeybase, 
  faLinkedin,
  faStackOverflow,
  faTwitter
);