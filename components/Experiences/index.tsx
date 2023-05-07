import { GlobalContext } from '@/context/queryContext'
import ExperienceCard from './Card'
import { useContext, useEffect } from 'react'
import { ExperiencesData } from '@/types/experience'

const ExperiencesTab = () => {
    const {experiencesData, experiencesListHandler} = useContext(GlobalContext)

    const {experiences} = experiencesData as ExperiencesData

    useEffect(() => {
        experiencesListHandler()
    },[])

     useEffect(() => {
         console.log({experiencesData})
    },[experiencesData])

    return (
        <>
            <div>
                {/* filtro vai aqui */}
            </div>
            <div>
                {experiences?.map((experience, i) => <ExperienceCard data={experience} key={i}/>)}
            </div>
        </>
    )
}

export default ExperiencesTab