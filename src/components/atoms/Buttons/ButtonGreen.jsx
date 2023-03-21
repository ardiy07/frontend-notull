import React from 'react'

const ButtonGreen = ({label, ...rest}) => {
  return (
    <button className="text-white bg-green-button hover:bg-green-button-ligth focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-button dark:focus:ring-green-800" {...rest}>{label}</button>
  )
}

export default ButtonGreen