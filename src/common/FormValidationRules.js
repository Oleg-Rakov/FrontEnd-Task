export default function validate(values) {
  let errors = {};

  let regex =
    /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.name) {
    errors.name = 'Field is empty';
  }

  if (!regex.test(values.date)) {
    errors.date = 'Please enter date in dd/mm/yyyy';
  }

  if (values.message && values.message.length < 8) {
    errors.message = 'Minimum 8 symbols';
  } else if (values.message && values.message.length > 60) {
    errors.message = 'Maximum 60 symbols';
  }

  return errors;
}
