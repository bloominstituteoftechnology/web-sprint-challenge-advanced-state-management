import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Please enter a name.')
    .min(3, 'Name must be 3 characters long.'),
  nickname: yup
    .string()
    .required('Please enter a nickname.'),
  position: yup
    .string()
    .required('Please enter a position.'),
});
