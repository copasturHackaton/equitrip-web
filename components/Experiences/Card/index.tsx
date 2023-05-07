import type { ExperienceData } from "@/types/experience"

interface IProps {
    data: ExperienceData
}

const ExperienceCard = (props: IProps) => {
    const { data } = props

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    )
}

export default ExperienceCard