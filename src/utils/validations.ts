import * as yup from 'yup';

export const Validations = yup.object({
  name: yup.string().required('Please enter valid text'),
  email: yup
    .string()
    .required('Please enter a valid email')
    .email('Format invalid!'),
  password: yup
    .string()
    .required('Please enter a 6-digit password')
    .min(6, 'At least 6 digits'),
});

export const ValidationsForgotPassword = yup.object({
  email: yup
    .string()
    .required('Please enter a valid email')
    .email('Format invalid!'),
});

export const ValidationLogin = yup.object({
  email: yup
    .string()
    .required('Please enter a valid email')
    .email('Format invalid!'),
  password: yup
    .string()
    .required('Please enter a 6-digit password')
    .min(6, 'Please enter a valid password!'),
});
