import React from 'react';

interface inputProps {
    label: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isRequired?: boolean,
    value:string,
    name:string
}

const InputBox = ({ label, type, onChange, isRequired = false, value,name }: inputProps) => {
    return (
        <div className='flex flex-col'>
            <label>{label}{isRequired && ' *'}</label>
            <input
                required={isRequired}
                name={name}
                className=' border rounded p-2 '
                type={type}
                onChange={onChange}
            />

        </div>
    );
};

export default InputBox;