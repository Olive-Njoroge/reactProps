import Student from './Students.jsx'

function App() {
  return(
    <>
    <Student name="Spongebob" age={45} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student name="Plankton" age={40} isStudent={false}/>
    <Student/>
    </>
    
  )
}

export default App
