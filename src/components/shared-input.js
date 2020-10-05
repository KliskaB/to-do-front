import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const SharedInput = ({ labelName, inputKey, errors = {}, touched = {} }) => {
    return (
        <div id='shared-input-div'>
            <div>
                <label>{labelName}</label>
            </div>
            <div>
                <Field name="shared-field" />
                    {errors[inputKey] && touched[inputKey] ?  (
                    <div>{errors[inputKey]}</div>
                    ) : null}
            </div>
        </div>
    )
}

SharedInput.propTypes = {
    labelName: PropTypes.string,
    errors: PropTypes.object,
    inputKey: PropTypes.string,
    touched: PropTypes.object
}

export default SharedInput;