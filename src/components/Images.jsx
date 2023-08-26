import { useEffect, useState } from "react"
import axios from "axios"

const Images = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
      const  URL = "https://randomuser.me/api/?results=1"
 
    axios
        .get(URL)
        .then(({data}) => setUsers(data.results))
        .catch((err) => console.log(err))
    
    }, [])
    
    
 
    return (
        <section>
            {
                users?.map((user)=> <article>
                    <div>
                        <img src={user.picture.large} alt=""/>
                    </div>
                </article>      )
            }
        </section>
  )
}



export default Images