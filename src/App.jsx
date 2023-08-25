import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ModalForm from './components/ModalForm'
import {EMPTY_FORM_VALUES} from './shared/constants.js'
import UsersList from './components/UsersList'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);

  const messajeConfirmation = () =>{
    Swal.fire("Successful Creation");
  }

  const messajelimination = () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successful Deletion',
      showConfirmButton: false,
      timer: 1500
    })
  }


  //!Hace un llamado a todos los usuarios
  const getAllUsers = () =>{
    axios
      .get(BASE_URL + "users/")
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err));
  };

   //!Crea el nuevo usuario
  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUsers()
        setIsShowModal(false)
        reset(EMPTY_FORM_VALUES)
        messajeConfirmation()
      })
      .catch((err) => console.log(err));
  };

  //!Eliminar un usuario
  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + `users/${idUser}/`)
      .then(() => {
        getAllUsers()
        messajelimination()
      })
      .catch((err) => console.log(err));
  };
  
  //!Actualiza el usuario
  const updateUser = (userUpdate, reset) => {
    axios
      .patch(BASE_URL + `users/${isUserToUpdate.id}/`,userUpdate)
      .then(() =>{
        getAllUsers()
        setIsShowModal(false)
        reset(EMPTY_FORM_VALUES)
        setIsUserToUpdate(null )
      })
      .catch((err) => console.log(err));
  
  }
  //!Cambia el estado del Modal de false a true
  

  //!Handle del boton actualizar
  const handleClickUpdateUser = (user) => {
    setIsShowModal(true)
    setIsUserToUpdate(user)
    mesajeConfirmation()
  }

  const handleClickOpenModal = () => {
    setIsShowModal(true)
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <section className="p-0 m-0">
      <header className="fixed w-full mb-[30px] p-0">
        <nav className="flex justify-between mx-auto max-w-[980px] h-50 p-0 bg-white gap-4 shadow-lg">
          <h2 className="flex font-bold  text-[#0F0F2D] text-4xl font-nunito-sans ml-2">Usuarios</h2> 
          <button onClick={handleClickOpenModal} className="flex w-36 h-10 items-center gap-1 bg-[#555A88] p-2 mb-3 mr-2 text-[#FFFFFF] shadow-xl"><i className="bx bx-plus text-2xl" ></i>Crear Usuario</button> 
        </nav>
      </header>

            <ModalForm isShowModal={isShowModal} createUser={createUser} isUserToUpdate={isUserToUpdate} updateUser={updateUser} setIsShowModal={setIsShowModal} setIsUserToUpdate={setIsUserToUpdate}/>
            <UsersList users={users} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser} />
        </section>
      
        
  )
}

export default App
