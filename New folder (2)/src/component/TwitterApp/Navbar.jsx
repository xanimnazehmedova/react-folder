import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import apiInstance from './Instance'

const Navbar = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const getOwn =  async () =>{
        setLoading(true)

        try {
            const data = await apiInstance.get('/profile/own', {
                headers: {
                         Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })

            setUser(data?.data?.data?.user || [])

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }


    useEffect(()=>{
        getOwn()
    }, [])

    
    const getUserShortName = ()=>{
        const name = user?.name
        const arr = name?.split(' ')
        return `${arr?.[0]?.[0] || ' '} ${arr?.[1]?.[0] || ' '}`

    }

    const searchByUserName = async (value)=>{
          setSearch(value)

          if(value.trim === ""){
            setUsers([])
            return
          }

          try {
            const data = await apiInstance.get('/profile/search', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }, 
                params: {keyword: value}
            })

            setUsers(data?.data?.data?.users || [])

          } catch (error) {
            console.log(error);
          }

    }


  return (
  
        <nav className='navbar navbar-light bg-light w-100 px-4'>
        <div className='d-flex justify-content-between align-items-center w-100'>
            <a href="/" className='navbar-brand'> Twitter</a>
            
            <div style={{ position: 'relative', width: '300px'}}>
                <input 
                   onChange={(e)=>searchByUserName(e.target.value)} 
                   name='search'  
                   placeholder='search...'
                   className='form-control'
                   value={search} 
                   type="search"/>
             {search.trim() && users.length > 0 && (
                 <ul className='list-group w-100 position-absolute mt-1 shadow'>
                     {users.map(item=>(
                         <li 
                         className='list-group-item list-group-item-section'
                         key={item.id}
                         style={{cursor: 'pointer'}}
                         onClick={()=>{
                             setUsers([] )
                             setSearch('')
                             navigate(user?.id === item?.id ? '/profile' : `user/${item.id}`)
                         }}
                         >
                             {item.name}
                         </li>
                     ))}
                 </ul>
              )}
            
            
            </div>
            
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid', textAlign: 'center', lineHeight: '49px'
                
              }}> 
                  {loading ? <Spinner /> : getUserShortName()}
              </div>
      
        </div>
        </nav>
 
  )
}

export default Navbar