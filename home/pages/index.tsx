import { NextSeo } from 'next-seo';
import Image from 'next/image';
import ButtonLink from "../components/ButtonLink";
 
 export default function Home() {
   const title = "Cendenta";
  return (
    <>
      <NextSeo
        title={title}
        description="Home page of Cendenta LLC"
      />
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="http://source.unsplash.com/-6jxbP3-N1I"
                className="h-full w-full object-cover"
                alt={`Cover Image for ${title}`}
                layout="fill"
              />
              <div className="absolute inset-0 dark:bg-med-blue-gray bg-dark-orange mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Bespoke software, done well.</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                Cendenta helps clients achieve their unique goals.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <ButtonLink 
                  href="/contact" 
                  title="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}