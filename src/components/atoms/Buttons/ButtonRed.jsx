import React from 'react'

const ButtonRed = ({label, ...rest}) => {
  return (
    <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" {...rest}>{label}</button>
  )
}

export default ButtonRed