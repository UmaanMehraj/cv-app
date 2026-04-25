import { useState } from 'react'

function GeneralInfo() {
  const [name, setName] = useState('John Doe')

  function updateName() {
    const input = document.querySelector('#name')
    setName(input.value)
  }

  return (
    <section>
      <div className='form'>
        <form>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' />
        </form>
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
        <form>
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
