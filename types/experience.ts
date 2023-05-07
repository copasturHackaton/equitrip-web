import { Location } from "./trail";

export interface ExperienceData { 
    location: Location;
    title: string;
    description: string;
    timeDuration: number;
    timeDurationUnit: string;
    imagesLinks?: string[] | null;
}

export interface ExperiencesData {
    count: number;
    experiences: ExperienceData[]
}   