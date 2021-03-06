import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function NotFound() {
    return (
      <>
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <Link href="/">
                <a className="inline-flex">
                  <span className="sr-only">Cendenta</span>
                  <div className="h-12 w-12 relative">
                    <Image
                      src="/static/cendenta.svg"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-6">
                    <Link href="/">
                        <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                          <span aria-hidden="true">&larr;&nbsp;</span>Go back home
                        </a>
                    </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    )
  }
  
  NotFound.getLayout = (page: ReactNode) => page;