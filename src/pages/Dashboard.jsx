import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:8080/api/users/my-info`, {withCredentials: true}).then(res => {
            setUser(res.data)
        }).catch(err => {
            console.error(err)
            navigate("/")
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <>
            <h2>Dashboard</h2>
            {loading ? 
                <p>Loading...</p> : 
                <>
                    {user ? 
                        <>
                            
                            <p><strong>Name: </strong>{user?.name}</p>
                            <p><strong>Email: </strong>{user?.email}</p>
                            {user?.picture ? <img src={user.picture} alt="" width={100} height={100} /> : null}
                            {user?.avatar_url ? <img src={user.avatar_url} alt="" width={100} height={100} /> : null}
                        </> : 
                        <p>Error: Can not get user info.</p>
                    }
                </>
            }
        </>
    )
}

export default Dashboard