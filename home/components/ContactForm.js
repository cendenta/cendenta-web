import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageId, setMessageId] = useState('');

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    fullName: '',
                    message: '',
                    phone: '',
                }}
                validateOnMount={true}
                validationSchema={yup.object().shape({
                    email: yup.string()
                        .email('Email address must be valid')
                        .required('Email address is required'),    
                    fullName: yup.string().required('Full name is required'),    
                    message: yup.string().required('Message is required'),
                    phone: yup.string()
                        .matches(// eslint-disable-next-line
                            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                            'Phone number must be valid',
                        )
                })}
                onSubmit={async (values, actions) => {
                    setIsSubmitting(true);
                    setMessageId('');
                    console.log('onsubmit', values, actions);
                    fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(values),
                    }).then(async (response) => {
                        let data = await response.json();
                        let msg = data?.response?.MessageId;
                        if (response.status === 200 && msg){
                            actions.resetForm();
                            setMessageId(msg);
                        } else {
                            throw new Error('Error sending message, please try again.');
                        }           
                        setIsSubmitting(false);
                    }).catch((err) => {
                        toast.error(err.message); 
                        setIsSubmitting(false);
                    });
                }}
                >
                {props => (
                    <Form className="grid grid-cols-1 gap-y-6 ">
                        <div>
                            <Field name="fullName">
                                {({ field, form }) => (
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            aria-label="Full Name"
                                            className="hidden"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            {...field}
                                            className="w-full p-4 dark:bg-light-gray dark:text-black font-semibold placeholder-med-gray border rounded-lg outline-none lg:px-6 focus:ring-dark-orange focus:ring-2 focus:border-none"
                                            placeholder="Full Name"
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            style={
                                            form.touched.fullName && form.errors.fullName
                                                ? { border: '2px solid red' }
                                                : null
                                            }
                                        />
                                    </div>
                                )}
                            </Field>
                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className="text-xs px-2 py-1 text-left text-red-500"
                            />
                        </div>
                        <div>
                            <Field name="email">
                                {({ field, form }) => (
                                    <div>
                                        <label
                                            htmlFor="email"
                                            aria-label="Email"
                                            className="hidden"
                                        >
                                            Email
                                        </label>
                                        <input
                                            {...field}
                                            className="w-full p-4 dark:bg-light-gray dark:text-black font-semibold placeholder-med-gray border rounded-lg outline-none lg:px-6 focus:ring-dark-orange focus:ring-2 focus:border-none"
                                            placeholder="Email"
                                            type="text"
                                            name="email"
                                            id="email"
                                            style={
                                            form.touched.email && form.errors.email
                                                ? { border: '2px solid red' }
                                                : null
                                            }
                                        />
                                    </div>
                                )}
                            </Field>
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-xs px-2 py-1 text-left text-red-500"
                            />
                        </div>
                        <div>
                            <Field name="phone">
                                {({ field, form }) => (
                                    <div>
                                        <label htmlFor="phone" aria-label="Phone" className="hidden">
                                            Phone
                                        </label>
                                        <input
                                            {...field}
                                            className="w-full p-4 dark:bg-light-gray dark:text-black font-semibold placeholder-med-gray border rounded-lg outline-none lg:px-6 focus:ring-dark-orange focus:ring-2 focus:border-none"
                                            placeholder="Phone"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            style={
                                            form.touched.phone && form.errors.phone
                                                ? { border: '2px solid red' }
                                                : null
                                            }
                                        />
                                    </div>
                                )}
                            </Field>
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-xs px-2 py-1 text-left text-red-500"
                            />
                        </div>
                        <div>
                            <Field name="message">
                                {({ field, form }) => (
                                    <div>
                                        <label
                                            htmlFor="message"
                                            aria-label="Message"
                                            className="hidden"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            {...field}
                                            className="w-full p-4 dark:bg-light-gray dark:text-black font-semibold placeholder-med-gray border rounded-lg outline-none lg:px-6 focus:ring-dark-orange focus:ring-2 focus:border-none"
                                            placeholder="Message"
                                            type="message"
                                            name="message"
                                            id="message"
                                            style={
                                                form.touched.message && form.errors.message
                                                    ? { border: '2px solid red' }
                                                    : null
                                            }
                                        />
                                    </div>
                                )}
                            </Field>
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="text-xs px-2 py-1 text-left text-red-500"
                            />
                        </div>                        
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting || Object.keys(props.errors).length > 0}
                                className="disabled:opacity-50 inline-block bg-med-blue-gray py-2 px-4 border border-transparent rounded-md font-bold text-white hover:bg-opacity-75 hover:bg-dark-orange dark:bg-med-gray dark:text-white dark:hover:bg-dark-orange"
                            >
                                {`Submit${isSubmitting ? 'ting' : ''}`}
                            </button>
                        </div>
                        <Toaster position="bottom-center"/>
                    </Form>
                )}
            </Formik>
            {messageId && 
                <div className="mt-3 text-dark-orange">
                    <p className="font-extrabold">Message sent! We&apos;ll be in touch soon.</p>
                    <p className="text-xs">{messageId}</p>
                </div>
            }
        </>        
    );
};