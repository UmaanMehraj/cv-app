import { useState } from 'react'

function GeneralInfo() {
  const [name, setName] = useState('John Doe')
  const [isSubmitted, changeSubmitted] = useState(false)

  function updateName() {
    const input = document.querySelector('#name')
    setName(input.value)
    changeSubmitted(true)
  }

  if(isSubmitted){
    return <h1>{name}</h1>
  }
  return (
    <section>
      <div className='form'>
        <form>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' />
        </form>
        <button type='submit' onClick={updateName}>click</button>
      </div>
    </section>
  )
}

function EducationalXp() {
  const [schoolName, setSchoolName] = useState('KT middle school')

  function updatetSchoolName() {
    const input = document.querySelector('#school')
    setSchoolName(input.value)
  }

  return (
    <section>
      <div className='form'>
        <h1>{schoolName}</h1>
        <form onSubmit={updatetSchoolName}>
          <label htmlFor='schoolName'>School: </label>
          <input type='text' name='schoolName' id='school' />
        </form>
      </div>
    </section>
  )
}

export default function Form() {
  return (
    <>
      <GeneralInfo />
      <EducationalXp/>
    </>
  )
}
