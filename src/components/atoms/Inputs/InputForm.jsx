import React from 'react'

const InputForm = ({ label, name, ...rest }) => {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input name={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  {...rest} required />
        </div>
    )
}

export default InputForm