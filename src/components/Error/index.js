import React from 'react';
import PropTypes from 'prop-types';

import './Error.css';

const Error = ({ message }) => (
    <div  className='error text-center alert position-absolute' role="alert">
        {message}
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
