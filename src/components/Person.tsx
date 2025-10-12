type PersonProps = {
  names: {
    first: string
    last: string
  }[]
}

export default function Person(props: PersonProps) {
  return (
    <div>
      {props.names.map((name, index) => (
        <div key={index}>
          <p>First name: {name.first}</p>
          <p>Last name: {name.last}</p>
        </div>
      ))}

    </div>
  )
}