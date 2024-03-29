import { faGithub, faKeybase, faLinkedin, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StandardIconLink from "./StandardIconLink";

const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
    social: [
        {
            name: 'GitHub',
            href: 'https://github.com/cendenta',
            icon: () => (<FontAwesomeIcon style={{fontSize:"24px"}} icon={faGithub}></FontAwesomeIcon>),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/cendentallc/',
            icon: () => (<FontAwesomeIcon style={{fontSize:"24px"}} icon={faLinkedin}></FontAwesomeIcon>),
        },
        {
            name: 'Keybase',
            href: 'https://keybase.io/cendenta',
            icon: () => (<FontAwesomeIcon style={{fontSize:"24px"}} icon={faKeybase}></FontAwesomeIcon>),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/cendenta',
            icon: () => (<FontAwesomeIcon style={{fontSize:"24px"}} icon={faTwitter}></FontAwesomeIcon>),
        },
        {
            name: 'StackOverflow',
            href: 'https://stackoverflow.com/users/42297/',
            icon: () => (<FontAwesomeIcon style={{fontSize:"24px"}} icon={faStackOverflow}></FontAwesomeIcon>),
        },
    ],
  }
  
  export default function Footer() {
    return (
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:py-2 lg:px-8">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (<StandardIconLink key={item.name} item={item} />))}
            </div>
            <p className="mt-6 text-base text-dark-blue-gray dark:text-white md:mt-0 md:order-1">
              &copy; 2022 Cendenta LLC. All rights reserved.
            </p>
          </div>
          {/* <div className="mt-12 border-t border-dark-blue-gray pt-8">
            <p className="text-base text-dark-blue-gray xl:text-center">&copy; 2022 Cendenta LLC </p>
            Made in 🏴󠁵󠁳󠁷󠁡󠁿 and 🇮🇪.
          </div> */}
        </div>
      </footer>
    )
  }  