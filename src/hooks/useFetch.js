import {useState,useEffect} from "react"
import axios from "axios"
const baseUrl = "http://localhost:4000/api"
const baseUrlProd = "https://backend-movie-app-msou.onrender.com/api"
const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setLoading(true);
        axios.get(baseUrlProd+url).then(response=>{
            setLoading(false)
            setData(response.data)
        }).catch(err=>{
            setLoading(false)
            setError(err)
        })
      }, []);

      return {data,error,loading}
}

export default useFetch