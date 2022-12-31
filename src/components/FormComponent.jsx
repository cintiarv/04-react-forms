import React, { useState } from 'react'

export const FormComponent = () => {
  const [user, setUser] = useState({}) // obj vacío ya q mi user es un objeto

  const getFormData = (e) => {
    e.preventDefault()
    const data = e.target
    const user = {
      name: data.name.value,
      lastName: data.lastName.value,
      gender: data.gender.value,
      bio: data.bio.value,
      send: data.send.value
    }
    console.log(user)
    setUser(user)
  }

  const changeData = (e) => {
    const inputName = e.target.name
    const userToModify = user

    // userToModify[inputName] = e.target.value //me agarra dinamicamente la propiedad q estoy buscando

    setUser(previousState => {
      return {
        ...previousState,
        [inputName]: e.target.value // sobreescribiendo la propiedad q estamos cambiando
      }
    }) // capturando el estado previo q tiene i usuario
  }

  return (
    <div>
      <h1>Forms on react</h1>

      {user.name && user.name.length > 0 && (
        <div>
          {user.name + user.lastName} is a {user.gender} and her/his bio is:
          <p>{user.bio}</p>
        </div>
      )}
      <form onSubmit={getFormData}>
        <label className='form-label mt-3'>Nombre</label>
        <input
          className='form-control'
          name='name'
          type='text'
          placeholder='Nombre'
          onChange={changeData}
        />
        <label className='form-label mt-5'>Apellido</label>
        <input
          className='form-control'
          name='lastName'
          type='text'
          placeholder='Apellido'
          onChange={changeData}

        />
        <select className='form-select mt-5' name='gender' id=''>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          onChange={changeData}

        </select>
        <textarea
          className='mt-5'
          name='bio'
          id=''
          cols='40'
          rows='10'
          placeholder='Biography'
          onChange={changeData}
        />
        <div className='mt-3'>
          <input className='btn btn-primary p-2' type='submit' value='Send' name='send' />
        </div>
      </form>
    </div>
  )
}
