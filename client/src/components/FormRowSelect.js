function FormRowSelect({ labelText,value, name, handleChange, list }) {
  return (
    <div className='form-row'>
      <label htmlFor={labelText} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default FormRowSelect;
