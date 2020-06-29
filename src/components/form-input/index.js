import React from "react";

import "./styles.scss";

const FormInput = ({ label, onChange, ...otherProps }) => (
  <div className="form-input-group">
    <input className="form-input" onChange={onChange} {...otherProps} />
    {label && (
      <label
        className={`form-input-label${
          otherProps.value.length ? " shrink" : ""
        }`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
