import "../Edit/edit.css"
const Input = (props) => {
    const { inputType, classStyle, data, setData, label } = props
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? (
                <textarea type="text" className={classStyle} placeholder={data} onChange={e => setData(e.target.value)} />

            ) : (
                <input type="text" name="" placeholder={data} onChange={(e) => setData(e.target.value)} id="" />

            )}
        </>

    );
}

export default Input;