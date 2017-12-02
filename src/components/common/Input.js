import React, {PropTypes} from 'react';

const Input = ({name, onChange, value, id}) => {
  let wrapperClass = 'form-group';

  return (<div className={wrapperClass}>
    <div className="field">
      <input className="form-control" type="text" name={name} onChange={(e) => onChange(e, id)} value={value}/>
    </div>
  </div>);
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
