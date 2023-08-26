import Images from "./Images"

const UsersCard = ({user, deleteUser, handleClickUpdateUser}) => {

  return (
    <article className="grid border-2 rounded-md mt-14 w-[300px]relative">
      <ul className="m-4">
        <li className="absolute  ml-40 mt-[100px] w-[100px] h-[100px] rounded-full"><Images /></li>
        <li className="text-xl font-medium font-roboto mb-2">{user.first_name} {user.last_name}</li>
        <li className="mr-3 h-[2px] w-[270px] bg-[#E5E5E5]"></li>
        <li className="font-roboto text-[#D3D3D3] mt-2">Correo</li>
        <li>{user.email}</li>
        <li className="font-roboto text-[#D3D3D3]">CONTRASEÑA</li>
        <li>{user.password}</li>
        <li className="font-roboto text-[#D3D3D3]">CUMPLEAÑOS</li>
        <li className="mb-2"><i className="bx bx-gift text-2xl"></i>{user.birthday}</li>
        <li className="mr-3 h-[2px] w-[270px] bg-[#E5E5E5]"></li>
      </ul>
      
      <div className="flex justify-end pr-10 pb-4 w-full">
         <button onClick={() => deleteUser(user.id)} className="bg-[#D85D5D] border-[#D93F3F] w-[48px] h-[48px] border-2 p-2 text-white rounded-md"><i className="bx bx-trash text-[30px]"></i></button>
         <button onClick={() => handleClickUpdateUser(user)} className="bg-[#eae8e8] border-[#D3D3D3] border-2 p-2 text-[#D3D3D3] text-2xl rounded-md ml-2 w-[48px] h-[48px]"><i className="text-[30px] bx bx-pencil" ></i></button>
      </div>

    </article>
  )
}
export default UsersCard