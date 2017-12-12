export interface Email {
    id: string,
    name: string,
    subject: string,
    email: string,
    message: string,
    markdown: string,
    open: boolean,
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
