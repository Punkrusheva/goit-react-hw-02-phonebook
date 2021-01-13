import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhonebookForm.module.css';

function PhonebookForm({ onAddContact }) { 
    return (
        <div className={styles.box}>
                <h3 className={styles.name}>Name</h3>
                <input type='text' className={styles.input} placeholder='Enter contact name'/>
            <button type='button' onClick={onAddContact} className={styles.button}>
                Add contact
            </button>
        </div>
    ) 
}

PhonebookForm.defaultProps = {
  name: '',
  id: ''
};

PhonebookForm.propTypes = {
  name: PropTypes.string,
  id : PropTypes.string
};

export default PhonebookForm;