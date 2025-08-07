import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, path }) => {
    const navigate = useNavigate();

    const isExternal = path.startsWith('http://') || path.startsWith('https://');

    const handleClick = () => {
        if (isExternal) {
            window.open(path, '_blank'); // opens in new tab
        } else {
            navigate(path); // internal navigation
        }
    };

    return (
        <button onClick={handleClick} className='mt-8 bg-[#fe9900] hover:bg-black cursor-pointer text-white font-bold py-3 px-8 rounded-full transition duration-300'>
            {text}
        </button>
    );
};

export default Button;
