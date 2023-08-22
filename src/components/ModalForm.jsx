import { useEffect } from "react"
import {useForm} from "react-hook-form"
import { EMPTY_FORM_VALUES } from "../shared/constants"

const ModalForm = ({isShowModal, createUser, isUserToUpdate, updateUser, setIsShowModal, setIsUserToUpdate}) => {
  
  const {handleSubmit, register, reset} = useForm()

  //!Esta funcion sirve para enlazar el formulario con la libreria
  //?data es argumento por defecto que recoje todo lo que se ingreso register

  const submit = (data) => {
    if(isUserToUpdate){
        updateUser(data, reset)
    }else{
        createUser(data, reset)
    }
  }

  //!Esta funcion cierra el modal,limpia los imputs y vuelve a null el set que contiene los datos
  const handleClickCloseModal = () => {
    setIsShowModal(false)
    reset(EMPTY_FORM_VALUES)
    setIsUserToUpdate(null)
  }

  useEffect(() => {
    if(isUserToUpdate){
        reset(isUserToUpdate)
    }
  }, [isUserToUpdate])
  
    

    return (
    <section className ={`fixed bg-black/60 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-200 ${isShowModal ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"}`}>
        <form onSubmit={handleSubmit(submit)} className="bg-white gap-4 p-2 h-[360px] w-[280px]rounded-lg relative">
            <button type="button" onClick={handleClickCloseModal} className="text-[#212121] absolute top-0 right-2">X</button>
            <h2 className=" text-[#0F0F2D] font-roboto text-xl font-bold text-left mb-4">{isUserToUpdate ? "Editar Usuario" : "Nuevo Usuario"}</h2>
            <div className="gap-2 pb-4">
                <label htmlFor="first_name"><i class='bx bxs-user text-lg pr-2'></i></label>
                <input className ="outline-none border-[1px] border-[#C3C1C1] p-1 rounded-sm" placeholder="Juan José" id="first_name" type="text" {...register("first_name")}></input>
            </div>
            <div className="gap-2 pb-4 pl-6">
                <label htmlFor="last_name"></label>
                <input className ="outline-none border-[1px] border-[#C3C1C1] p-1 rounded-sm" placeholder="Mosqueira Gomez" id="last_name" type="text" {...register("last_name")}></input>
            </div>

            <div className="pb-4">
                <label htmlFor="email"><i class='bx bxs-envelope text-lg mr-2' ></i></label>
                <input className ="outline-none border-[1px] border-[#C3C1C1] p-1 rounded-sm" placeholder="ejemplo@correo.com"id="email" type="text" {...register("email")}></input>
            </div>
            <div className="mb-4">
                <label htmlFor="password"><i class='bx bxs-lock-alt text-lg mr-2'></i></label>
                <input className ="outline-none border-[1px] border-[#C3C1C1] p-1 rounded-sm" placeholder="********" id="password" type="text" {...register("password")}></input>
            </div>
            <div className="mb-4">
                <label htmlFor="birthday"><i class='bx bxs-cake text-lg mr-2'></i></label>
                <input className ="outline-none border-[1px] border-[#C3C1C1] p-1 rounded-sm" id="birthday" type="date" {...register("birthday")}></input>
            </div> 
            
              <button className="w-full bg-[#555A88] text-white text-center p-2 rounded-sm">{isUserToUpdate ? "Guardar Cambios" : "Crear Usuario"}</button>
            
             </form>
    </section>
  )
}
export default ModalForm