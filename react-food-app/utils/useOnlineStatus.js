
import { useEffect, useState } from "react";

//check input and what should you output
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
    }, [])

    //boolean
    return onlineStatus

}

export default useOnlineStatus