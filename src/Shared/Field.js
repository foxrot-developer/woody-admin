import React from 'react';
import { ErrorMessage, useField } from 'formik';

import '../Assets/CSS/field.css';

const Field = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            {label && <label htmlFor={field.name} className="form-label labels">{label}</label>}
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
            <ErrorMessage component='small' name={field.name} className='text-danger' />
        </div>
    )
}

export default Field;
