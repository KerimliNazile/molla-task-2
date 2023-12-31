import { useState } from "react"

function usetoFetch() {
    const [data, setData] = useState([])

    const fetchData = async function() {
        try {
            const response = await fetch("http://localhost:3000/show")
            const jsonData = await response.json()
            setData(jsonData)
        } catch (error) {
            console.log(error);
        }
    }
    


    return [data,setData, fetchData]
}

export default usetoFetch