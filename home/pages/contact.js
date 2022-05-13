import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact &ndash; Cendenta"
        description="Contact Cendenta to discuss your project needs."
      />
       <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Send a Message</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Have a startup idea you&apos;d like to get off the ground? 
              </p>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                A database that needs some modelling work, optimization, or ETL pipeline development?
              </p>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Let&apos;s talk about what we can achieve together.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal Address</dt>
                  <dd>
                    <p>522 W Riverside Ave. Suite N</p>
                    <p>Spokane, WA 99201</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone Number</dt>
                  <dd className="flex">
                    <a href="tel:+14252163611" className="text-base text-dark-blue-gray hover:text-dark-orange">
                      <PhoneIcon className="inline flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">+1 (425) 216-3611</span>
                    </a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <a href="mailto:contact@cendenta.com" className="text-base text-dark-blue-gray hover:text-dark-orange">
                      <MailIcon className="inline flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">contact@cendenta.com</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => alert('Not yet implemented')}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}