import UsersCard from "./UsersCard"

const UsersList = ({users, deleteUser, handleClickUpdateUser}) => {
    
  return (
    <section className="grid  justify-center items-center gap-4 grid-cols-[repeat(auto-fill,_320px)] max-w-[1024px] mx-auto pt-4">
        {
            users.map((user) => (<UsersCard key={user.id} user={user} deleteUser={deleteUser} handleClickUpdateUser={handleClickUpdateUser} />))
        }
    </section>
  )
}
export default UsersList