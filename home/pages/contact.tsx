import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';
import ContactForm from "../components/ContactForm";

export default function Contact() { 
  return (
    <>
      <NextSeo
        title="Contact &ndash; Cendenta"
        description="Contact Cendenta to discuss your project needs."
      />
       <div className="relative dark:bg-light-gray">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Contact Form</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Have a startup idea you&apos;d like to get off the ground? 
              </p>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                A database that needs some modelling work, optimization, or ETL pipeline development?
              </p>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Send a message to begin the discussion about what we can achieve together.
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
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 dark:bg-light-gray">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}