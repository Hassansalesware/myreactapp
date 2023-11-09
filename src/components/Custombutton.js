import React from 'react'

export default function Custombutton(props) {
  return (
    <div>
      <button>
            <a href={props.link}>{props.name}</a>
      </button>
    </div>
  )
}
