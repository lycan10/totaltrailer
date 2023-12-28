import {useEffect, useState} from 'react'


const useFetch = (uri) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(uri)
                const json = await res.json()

                // console.log('API Response:', json); // Lo

                setData(json);
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData();
    }, [uri])

  return {loading, data, error}
}

export default useFetch