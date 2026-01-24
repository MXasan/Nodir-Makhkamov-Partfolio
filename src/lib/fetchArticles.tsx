import { useState, useEffect } from 'react'

const FetchArticles = () => {
    // conts [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("/data.json")
        .then(response => response.json())
        .then(res => console.log(res))
    })

}

export default FetchArticles