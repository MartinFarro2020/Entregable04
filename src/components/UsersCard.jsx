const UsersCard = ({user, deleteUser, handleClickUpdateUser}) => {
  return (
    <article className="grid border-2 rounded-md mt-14 w-[300px]">
      <ul className="m-4">
        <li className="text-xl font-medium font-roboto mb-2">{user.first_name} {user.last_name}</li>
        <li className="mr-3 h-[2px] w-[270px] bg-[#E5E5E5]"></li>
        <li className="font-roboto text-[#D3D3D3] mt-2">Correo</li>
        <li className="">{user.email}</li>
        <li className="font-roboto text-[#D3D3D3]">CONTRASEÑA</li>
        <li>{user.password}</li>
        <li className="font-roboto text-[#D3D3D3]">CUMPLEAÑOS</li>
        <li className="mb-2"><i class="bx bx-gift text-2xl" ></i>{user.birthday}</li>
        <li className="mr-3 h-[2px] w-[270px] bg-[#E5E5E5]"></li>
      </ul>
      
      <div className="flex justify-end pb-4 pr-4">
         <button onClick={() => deleteUser(user.id)} className="bg-[#D85D5D] border-[#D93F3F] w-[48px] h-[48px] border-2 p-2 text-white rounded-md flex items-center"><i className="bx bx-trash text-[30px]"></i></button>
         <button onClick={() => handleClickUpdateUser(user)} className="bg-[#eae8e8] border-[#D3D3D3] border-2 p-2 text-[#D3D3D3] text-2xl rounded-md ml-2 w-[48px] h-[48px] flex items-center"><i className="bx bx-pencil text-[30px]"></i></button>
      </div>

    </article>
  )
}
export default UsersCard