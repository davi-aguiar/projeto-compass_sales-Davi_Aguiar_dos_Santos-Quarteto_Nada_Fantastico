import * as yup from 'yup';

export const Validations = yup.object({
  name: yup.string().required('Please enter valid text'),
  email: yup
    .string()
    .required('Please enter a valid email')
    .email('Format invalid!'),
  password: yup.string().required('Please').min(4, 'Format invalid!'),
});

export const ValidationsForgotPassword = yup.object({
  email: yup
    .string()
    .required('Please enter a valid email')
    .email('Format invalid!'),
});
