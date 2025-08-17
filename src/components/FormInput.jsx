export default function 
FormInput({ label, type = "text", name, placeholder }) 
{
  return (

    <div className="form-group">
      {label && <label htmlFor={name} className="visually-hidden">{label}</label>}
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>

  );
}
