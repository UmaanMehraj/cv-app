import { useState } from 'react'
import '../styles/styles.css'

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
      <>
        <header>
          <h1>Personal Details</h1>
        </header>
        <div className='container'>
          <div className='general'>
            <h3>Name: {person.name}</h3>
            <h3>Email: {person.email}</h3>
            <h3>Phone: {person.phone}</h3>
          </div>
          <button>Edit</button>
        </div>
      </>
    )
  }
  return (
    <div className='form'>
      <form>
        <label htmlFor='name'>
          Name:
          <input type='text' id='name' name='name' />{' '}
        </label>
        <label htmlFor='email'>
          Email:
          <input type='email' id='email' name='email' />
        </label>
        <label htmlFor='phone'>
          Phone: <input type='tel' id='phone' name='phone' />{' '}
        </label>
      </form>
      <button type='submit' onClick={updateDetails}>
        Submit
      </button>
    </div>
  )
}

function EducationalXp() {
  const [education, setEducation] = useState({
    schoolName: 'Harvard',
    title: 'BS Computer Science',
    date: '12-12-2024',
  })
  const [isSubmitted, changeSubmission] = useState(false)

  function updateEducation() {
    const schoolNameInput = document.querySelector('#school')
    const titleOfStudy = document.querySelector('#title')
    const dateOfStudy = document.querySelector('#date')

    setEducation({
      ...education,
      schoolName: schoolNameInput.value,
      title: titleOfStudy.value,
      date: dateOfStudy.value,
    })

    changeSubmission(true)
  }
  if (isSubmitted) {
    return (
      <>
        <header>
          <h1>Educational Details</h1>
        </header>
        <div className='container'>
          <div className='education'>
            <h3>School: {education.schoolName}</h3>
            <h3>Title of Study: {education.title}</h3>
            <h3>Date of Passing: {education.date}</h3>
          </div>
          <button>Eidt</button>
        </div>
      </>
    )
  }

  return (
    <section>
      <div className='form'>
        <form>
          <label htmlFor='schoolName'>
            School: <input type='text' name='schoolName' id='school' />
          </label>
          <label htmlFor='title'>
            Title of Study:
            <input type='text' name='title' id='title' />{' '}
          </label>
          <label htmlFor='date'>
            Date: <input type='date' name='date' id='date' />
          </label>
        </form>
        <button typeof='submit' onClick={updateEducation}>
          Submit
        </button>
      </div>
    </section>
  )
}

function PracticalExp() {
  const [practice, setPractice] = useState({
    companyName: 'LockHeed',
    position: 'SDE',
    dateFrom: '12-12-23',
    dateEnd: '12-12-25',
  })
  const [isSubmitted, changeSubmission] = useState(false)

  function updatePractice() {
    const company = document.querySelector('#companyName')
    const positonName = document.querySelector('#position')
    const dateStart = document.querySelector('#dateFrom')
    const dateEnd = document.querySelector('#dateEnd')

    setPractice({
      companyName: company.value,
      position: positonName.value,
      dateFrom: dateStart.value,
      dateEnd: dateEnd.value,
    })

    changeSubmission(true)
  }

  if (isSubmitted) {
    return (
      <>
        <header>
          <h1>Experience</h1>
        </header>
        <div className='container'>
          <div className='practice'>
            <h3>Company Name: {practice.companyName}</h3>
            <h3>Position: {practice.position}</h3>
            <h3>Date Start: {practice.dateFrom}</h3>
            <h3>Date End: {practice.dateEnd}</h3>
          </div>
          <button>Edit</button>
        </div>
      </>
    )
  }

  return (
    <div className='form'>
      <form>
        <label htmlFor='comapnyName'>
          Company Name:{' '}
          <input type='text' id='companyName' name='companyName' />
        </label>
        <label htmlFor='position'>
          Position Ttitle: <input type='text' id='position' name='position' />
        </label>
        <label htmlFor='dateFrom'>
          Date Joined: <input type='date' name='dateFrom' id='dateFrom' />
        </label>

        <label htmlFor='dateEnd'>
          Date End: <input type='date' name='dateEnd' id='dateEnd' />
        </label>
      </form>
      <button type='submit' onClick={updatePractice}>
        Submit
      </button>
    </div>
  )
}

export default function Form() {
  return (
    <>
      <GeneralInfo />
      <EducationalXp />
      <PracticalExp />
    </>
  )
}
