import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Loader from '../Loader';
import Error from '../Error';
import Forecast from '../Forecast';
import './Page.css';
import useCustom from '../Custom/useCustom';
import {useNavigate} from 'react-router-dom';


const Page = () => {
    const navigate = useNavigate();
    const {error, forecast, isPending, submitLocation} = useCustom()
    const onSubmitPage = (location) => {
        submitLocation(location)
    }

    return (
        <Fragment>
            <Header />
            {!forecast && <div className='box'>
                {!isPending && <Form onSubmitPage={onSubmitPage} />}
                {error && <Error message={error}/>}
                {isPending && <Loader/>}
            </div>}
                
            {forecast && <Forecast forecast={forecast}/> }
            {forecast && <div className='pt-4 d-flex justify-content-center'><button className='cl-btn' onClick={()=>{navigate(0)}}>Change location</button></div>}
        </Fragment>
    );
};

export default Page;
