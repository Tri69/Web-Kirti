import { useEffect, useState } from "react"

const header = () => {
    const [date, setDate] = useState('');
    const daten = () => {
        const da = new Date();
        setDate(da)

    }
    useEffect(()=> {
        daten()
    }, [])
    return(
        <>
            <marquee>{date}</marquee>
        </>
    )
}
export default header 