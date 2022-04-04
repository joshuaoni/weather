import React, {useState} from 'react';
import './Form.css';

const Form = ({onSubmitPage}) => {
    const [location, setLocation] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!location || location.trim() === '') return;
        onSubmitPage(location)
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className='input form-control'
                placeholder="Enter a location, eg: London"
                required
                value={location}
                onChange={(e)=>{
                    setLocation(e.target.value)
                }}
            />

            <button type="submit" className='button'>
                GET FORECAST
            </button>
        </form>
    );
};


export default Form;
