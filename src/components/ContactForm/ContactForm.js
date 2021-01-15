import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ onSubmit, onNameInput, onNumberInput, avalue, bvalue }) { 
    return (
        <form className={styles.box} onSubmit={onSubmit}>
        <label htmlFor="" className={styles.name}>
          Name
          <input
            type='text'
            name='name'
            value={avalue}
            onChange={onNameInput}
            className={styles.input}
            placeholder='Enter contact name' />
            </label>
        <label htmlFor="" className={styles.number}>
          Number
          <input
            type='text'
            name='number'
            value={bvalue}
            onChange={onNumberInput}
            className={styles.input}
            placeholder='Enter contact number' />
            </label>
            <button type='submit' className={styles.button}>
                Add contact
            </button>
        </form>
    ) 
}

ContactForm.defaultProps = {
  name: '',
  id: '',
  number: '',
};

ContactForm.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;


/**onClick={onAddContact}  */