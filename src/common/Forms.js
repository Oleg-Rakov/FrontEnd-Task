import React from 'react';
import validate from './FormValidationRules';
import useForm from './useForm';

import styles from './Form.module.css';

const Forms = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    login,
    validate
  );

  function login() {
    console.log('No errors, submit  callback called');
  }

  return (
    <div className={styles.form}>
      <input
        className={
          errors.name ? `${styles.input} ${styles.error}` : styles.input
        }
        type="text"
        placeholder="Name*"
        onChange={handleChange}
        value={values.name || ''}
        name="name"
        required
      />
      {errors.name && <p>{errors.name}</p>}
      <input
        className={
          errors.email ? `${styles.input} ${styles.error}` : styles.input
        }
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email || ''}
        placeholder="Email*"
        required
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        className={
          errors.date ? `${styles.input} ${styles.error}` : styles.input
        }
        name="date"
        onChange={handleChange}
        value={values.date || ''}
        type="text"
        placeholder="Date of Birth*"
        required
      />
      {errors.date && <p>{errors.date}</p>}
      <input
        className={
          errors.message ? `${styles.input} ${styles.error}` : styles.input
        }
        name="message"
        type="text"
        onChange={handleChange}
        value={values.message || ''}
        placeholder="Message*"
        required
      />
      {errors.message && <p>{errors.message}</p>}
      <button onClick={handleSubmit} className={styles.button}>
        Request Info
      </button>
    </div>
  );
};

export default Forms;
