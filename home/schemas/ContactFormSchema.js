import * as yup from 'yup';

const ContactFormSchema = yup.object().shape({
  emailAddress: yup.string()
    .email('Email address must be valid')    
    .required('Email address is required'),    
  fullName: yup.string()
    .required('Full name is required'),    
  message: yup.string()
    .required('Message is required'),
  phone: yup.string()
  .matches(// eslint-disable-next-line
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    'Phone number must be valid',
  )
  .required("Phone number is required"),
});

 export default ContactFormSchema;