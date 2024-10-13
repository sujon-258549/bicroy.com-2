import React from 'react'

interface headingProps{
    headingText : string;
}

const Heading :React.FC<headingProps> = ({headingText}) => {
  return (
    <h1 className="border-b-2 text-2xl md:text-4xl lg:text-5xl text-center font-bold py-5 md:py-6 mb-4 text-[#149777] border-[#149777]">{headingText}</h1>
  )
}

export default Heading