import { Project } from './../services/project/project.service'
import { Skills } from './../services/skills/skills.service'

export const skillplaceh: Skills = { title: null, level: null }
export const projectplaceh: Project = {
    id: null,
    title: null,
    content: null,
    markdown: null,
    url: null,
    image: {
        small: {
            base64: null,
            name: null,
            size: null,
            type: null,
            url: null
        },
        big: {
            base64: null,
            name: null,
            size: null,
            type: null,
            url: null
        }
    },
    timestamp: {
        timestamp: null,
        month: null,
        weekday: null,
        year: null,
        date: null,
        time: null
    },
}
