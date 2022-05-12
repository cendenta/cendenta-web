import { faGithub, faKeybase, faLinkedin, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StandardIconLink from "./StandardIconLink";
import StandardLink from "./StandardLink";

const navigation = {
    company: [
      { name: 'About', href: '/about' },
    //   { name: 'Blog', href: '/blog' },
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
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <p className="text-gray-500 text-base">
                Conscientiously-developed bespoke software.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-dark-blue-gray tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                        <li key={item.name}>
                          <StandardLink href={item.href} title={item.name} />
                        </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-dark-blue-gray tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <StandardLink href={item.href} title={item.name} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (<StandardIconLink key={item.name} item={item} />))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
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