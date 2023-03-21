import React from 'react'

const ButtonYellow = ({label, ...rest}) => {
  return (
    <button className="text-white bg-yellow-button hover:bg-yellow-button-ligth focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-yellow-600 dark:hover:bg-yellow-button dark:focus:ring-yellow-button-ligth" {...rest}>{label}</button>
  )
}

export default ButtonYellow