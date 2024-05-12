import React from 'react'
import Input from './Input'

const Form =({ valueAuthor, changeAuthor, valueTitle, changeTitle, valueUrl, changeUrl, submitForm})=>{
    return <form onSubmit={submitForm} className='Form'>
        <Input 
            nameInput='Name Author' 
            valueInput={valueAuthor} 
            onChangeInput={changeAuthor}
        /><br/>
        <Input 
            nameInput='Title of Blog' 
            valueInput={valueTitle} 
            onChangeInput={changeTitle}
        /><br/>
        <Input 
            nameInput='URL of the Blog' 
            valueInput={valueUrl} 
            onChangeInput={changeUrl}
        /><br/>
        
        <button className='btnForm' type='submit'>Add Blog</button>
    </form>
}

export default Form