import { useState } from 'react'

function GeneralInfo() {
  const [person, setDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@anything.com',
    phone: 1234567890,
  })
  const [isSubmitted, changeSubmission] = useState(false)

  function updateDetails() {
    const nameInp = document.querySelector('#name')
    const emailInp = document.querySelector('#email')
    const phoneInp = document.querySelector('#phone')

    setDetails({
      name: nameInp.value,
      email: emailInp.value,
      phone: phoneInp.value,
    })
    changeSubmission(true)
  }

  if (isSubmitted) {
    return (
      <div className='container'>
        <div className='general'>
          <h3>Name: {person.name}</h3>
          <h3>Email: {person.email}</h3>
          <h3>Phone: {person.phone}</h3>
        </div>
          <button>Edit</button>
      </div>
    )
  }
  return (
    <section>
      <div className='form'>
        <form>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />
          <label htmlFor='phone'>Phone: </label>
          <input type='tel' id='phone' name='phone' />
        </form>
        <button type='submit' onClick={updateDetails}>
          Submit
        </button>
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
      <EducationalXp />
    </>
  )
}
