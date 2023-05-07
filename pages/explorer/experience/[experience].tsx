import { useRouter } from "next/router"

export default function Trail() {
    const router = useRouter()
    
    const experienceId = router.query.experience

    return (<>Acessando experienceId: {experienceId}</>)
}