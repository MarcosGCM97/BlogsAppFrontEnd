import React from "react"

const Input =({nameInput, valueInput, onChangeInput})=>{
    return <label className="labelInput">
        {nameInput}<input 
                    className="Input"
                    value={valueInput} 
                    onChange={onChangeInput}
                    />
    </label>
}


// eslint-disable-next-line import/no-anonymous-default-export
export default Input