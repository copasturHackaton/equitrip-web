import { useRouter } from "next/router"

export default function Trail() {
    const router = useRouter()
    
    const trailId = router.query.trail

    return (<>Acessando trails id: {trailId }</>)
}