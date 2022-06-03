import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from "./ButtonLink";
import StandardLink from "./StandardLink";
import ThemeSwitch from './ThemeSwitch';

const navigation = [
  { name: 'About', href: `${process.env.HOME_URL}/about` },
  { name: 'Blog', href: '/' },
  { name: 'Contact', href: `${process.env.HOME_URL}/contact` }
]

export default function Header() {

  return (
    <header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-med-gray-500 lg:border-none">
          <div className="flex items-center">
            <Link href={`${process.env.HOME_URL}`}>
              <a className="flex items-center space-x-3">
                <div className="h-12 w-12 relative">
                  <Image
                    src="/blog/static/cendenta.png"
                    alt="Cendenta"
                    layout="fill"
                  />
                </div>
                <span className="text-2xl font-semibold text-dark-blue-gray dark:text-white hover:text-dark-orange hover:dark:text-dark-orange">Cendenta</span>
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <StandardLink key={link.name} href={link.href} newTab={false}>
                  {link.name}
                </StandardLink>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <div className="flex items-center space-x-2">
              <ThemeSwitch />
              <ButtonLink 
                href={process.env.NEXT_PUBLIC_CLIENT_URL}
                title="Client Login"
              />
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <StandardLink key={link.name} href={link.href} newTab={false}>
              {link.name}
            </StandardLink>
          ))}
        </div>
      </nav>
    </header>
  )
}