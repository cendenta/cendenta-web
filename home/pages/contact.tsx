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
       <div className="relative mx-6">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 bg-gray-200 dark:bg-gray-700 rounded-[24px]">
          <div className="p-8 sm:px-6 lg:col-span-2 lg:px-8 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="font-brand mb-6 text-2xl font-bold sm:text-3xl">Contact Form</h2>
              <p className="mt-3 text-lg leading-6">
                Send a message to begin a discussion about how Cendenta can help you achieve your project goals.
              </p>
              <dl className="mt-8 text-base">
                <div className="mt-6">
                  <dt className="sr-only">Phone Number</dt>
                  <dd className="flex">
                    <a href="tel:+14252163611" className="underline decoration-dotted text-base hover:text-dark-orange hover:text-dark-orange">
                      <PhoneIcon className="inline flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      <span className="ml-3">+1 (425) 216-3611</span>
                    </a>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <a href="mailto:contact@cendenta.com" className="underline decoration-dotted text-base dark:hover:text-dark-orange hover:text-dark-orange">
                      <MailIcon className="inline flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      <span className="ml-3">contact@cendenta.com</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="p-8 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}