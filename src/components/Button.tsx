import React from 'react';

type ButtonProps = {
  handelClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.handelClick}>Clike me</button>
  )
}