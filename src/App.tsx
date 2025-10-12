import Greet from './components/Greet'
import Person from './components/Person'
import Status from './components/Status'
import Button from './components/Button'
import Auth from './components/Auth'

function App() {

  const persons = [
    {
      first: "John",
      last: "Doe"
    },
    {
      first: "Mike",
      last: "Tysen"
    },
    {
      first: "Jujutsu",
      last: "Kaisen"
    }
  ]

  return (
    <>
      {/* <p>This is react+typescript</p> */}
      <Greet name={"Ram"} />
      <Person names={persons} />
      <Status status='error' />
      <Button handelClick={() => {
        console.log('Button is clicked')
      }} />
      <Auth />
    </>
  )
}

export default App
