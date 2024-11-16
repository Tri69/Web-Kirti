import { useEffect, useState } from "react"

const header = () => {
    const [date, setDate] = useState('');
    const daten = () => {
        const da = new Date();
        setDate(da)
    }
    return(
        <>
            <marquee>{date}</marquee>
        </>
    )
}
export default header 