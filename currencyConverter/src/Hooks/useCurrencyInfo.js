import {useEffect, useState} from 'react';

function useCurrencyInfo (currency) {
    const [data, setdata] = useState({}) //empty obj
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json)
        .then((res) => setdata[currency]) //use [] for get excess of the obj
        console.table(data)
    }, [currency]) 
    console.log(data)
    return data
}

export default useCurrencyInfo;