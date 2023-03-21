import React from 'react'

const ButtonBlue = ({ label, ...rest }) => {
  return (
    <button className="text-white bg-navy hover:bg-navy-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" {...rest}>{label}</button>
  )
}

export default ButtonBlue