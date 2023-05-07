export interface Trail { 
    _id: string;
    authorId: string;
    experiences?: Experience[] | null;
    title: string;
    upVotes: number;
    downVotes: number;
    imagesLinks?: string[] | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface Experience { 
    _id: string;
    authorId: string;
    location: Location;
    title: string;
    description: string;
    timeDuration: number;
    timeDurationUnit: string;
    imagesLinks?: string[] | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  export interface Location { 
    _id: string;
    authorId: string;
    name: string;
    description: string;
    imagesLinks?: string[] | null;
    latitude: string;
    longitude: string;
    zipCode: string;
    number: string;
    mapsLink: string;
    accessibility?: string[] | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  