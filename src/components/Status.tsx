type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export default function Status(props: StatusProps) {

  let message: string = "";

  if (props.status === 'error') {
    message = 'There was a problem while loading the page'
  } else if (props.status === 'loading') {
    message = 'Loading the page....'
  } else if (props.status === 'success') {
    message = 'Page loaded successfully'
  } else {
    message = 'Something went wrong'
  }

  return (
    <h1>
      {message}
    </h1>
  )
}