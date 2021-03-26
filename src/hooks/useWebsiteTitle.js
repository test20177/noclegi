import { useEffect } from "react"

export default function useWebsiteTilte(title) {
    
    useEffect( () => {
        document.title = title
    }, [title])
    
}