export interface Project {
    id: string,
    title: string,
    content: string,
    markdown: string,
    url: string,
    image: Images
    timestamp: Timestamp
}

export interface Timestamp {
    timestamp: number,
    month: string,
    weekday: string,
    year: number,
    date: number,
    time: Time
}

export interface Time {
    hours: number,
    minutes: number,
    seconds: number,
    Milliseconds: number
}

export interface Images {
    small: Imagen,
    big: Imagen
}

export interface Imagen {
    base64: string,
    name: string,
    size: number,
    type: string,
    url: string
}

export interface Upload {
    progress: number,
    url: string
}
