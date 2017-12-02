import { Project } from './../services/project/project.service'
import { Skills } from './../services/skills/skills.service'

const skillplaceh: Skills = { title: null, level: null }
const projectplaceh: Project = {
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

export const projectplaceholder = [
    projectplaceh,
    projectplaceh,
    projectplaceh,
    projectplaceh,
]

export const skillsPlaceholder = [
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh,
    skillplaceh
]