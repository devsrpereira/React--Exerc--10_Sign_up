import React from 'react'

export default function Sign_Up(){
    const[formData, setFormData] = React.useState(
        {
            email:'',
            password:'',
            c_password:'',
            checked:'',
        }
    )

    function handleChange(event){
        const{name, value, type, checked, text} = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData, 
                [name]: type === 'checkbox' ? checked : type === 'textarea' ? text : value
            }
        })
    }
    
    function hendleSubmit(event){
        // event.preventDefault()
        if (formData.password !== formData.c_password){
            window.alert('Passwords to not match')
            console.log('Passwords to not match')
            return 
        } else {
            formData.checked && window.alert('Thanks for signig up for our newsletter!')
            window.alert('Sucessfully signed up') 
        }
        
        console.log(formData)

    }


    return(
        <section className='sign_page'>
            <form className = 'sign_form' onSubmit={hendleSubmit}>
                <input
                    className='sign_inp' 
                    type='email'
                    name='email'
                    placeholder='email'
                    onChange={handleChange}
                    value={formData.email}
                    required={true}
                /><br/>
                <input
                    className='sign_inp' 
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={formData.password}
                    required={true}
                /><br/>
                <input
                    className='sign_inp' 
                    type='password'
                    name='c_password'
                    placeholder='Confirm password'
                    onChange={handleChange}
                    value={formData.c_password}
                    required={true}
                    /><br/>
                <div className='sign_flex'>
                    <input
                        className='sign_ckd' 
                        type='checkbox'
                        name='checked'
                        id='checked'
                        onChange={handleChange}
                        checked={formData.checked}
                        required = {false}
                    />
                    <label className='sign_label' htmlFor='checked'>I want to join the newsletter</label>
                </div>
                <button className='sign_btn'>Sign Up</button>
            </form>
        </section>
    )
}