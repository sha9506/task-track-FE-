
const Input=({label, type, placeholder, onchange})=>
{
    return(<input className="input" type={type} placeholder={placeholder} onchange={onchange} >
            {label}
    </input>)
}

export default Input;