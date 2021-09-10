import React from "react"

declare interface optionProps {
  name: string
  description: string
  duration: number[]
}

export const Option = ({ name, description, duration}) => {
  return (
    <div className="option-member">
      <h2>{name}</h2>
      <p>{description} </p>
      <ul>
        {duration.map(minutes => (<li>{minutes}</li>))}
      </ul>
    </div>
  )
}
