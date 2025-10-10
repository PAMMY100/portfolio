import { android, appium, apple, code, concept, cypress, design, github, idea, javascript, mongodb, nextjs, postgresql, postman, python, react, playwright, test, testjs, typescript } from "@/public/Icon";

import gather from "@/public/images/gather.jpg";
import skill2ruraladmin from "@/public/images/skill2rural-admin.png";
import skill2rural from "@/public/images/skill2rural.png"
import ticketGenerator from "@/public/images/ticketGenerator.jpg"
import harambee from "@/public/images/harambee.jpg"

export const words = [
    { text: "Idea", icon: idea},
    {text: "Design", icon: design},
    {text: "Concept", icon: concept},
    {text: "Code", icon: code},
    {text: "Test", icon: test}
]


export const languages = [
    {name: "Javascript", icon: javascript},
    {name: "Python", icon: python},
    {name: "Typescript", icon: typescript},
    {name: "React", icon: react},
    {name: "Nextjs", icon: nextjs},
    {name: "PostgreSQL", icon: postgresql},
    {name: "MongoDB", icon: mongodb},
    {name: "Cypress", icon: cypress},
    {name: "Playwright", icon: playwright},
    {name: "Appium", icon: appium},
    {name: "Android", icon: android},
    {name: "Apple", icon: apple},
    {name: "Git", icon: github},
    {name: "Jest", icon: testjs},
    {name: "Postman", icon: postman}
]


export const projectsData = [
    {
        "name": "Skill2Rural Admin Dashboard",
        "description": "Comprehensive admin dashboard with analytics, user management, and real-time data visualization.",
        "stack": "Next.js, Chart.js, TypeScript, Redux",
        "img": skill2ruraladmin,
        "url": "https://admin.skill2rural.org/"
    },
    {
        "name": "Gather Social Media App",
        "description": "A social media platform where users posts, interact and connect.",
        "stack": "Next.js, Clerk, Postgress, Prisma, Cloudinary",
        "img": gather,
        "url": "https://gather-five-kappa.vercel.app/"
    },
    {
        "name": "Ticket Generator Web App",
        "description": "A ticket generating website for an event",
        "stack": "React, Tailwind",
        "img": ticketGenerator,
        "url": "https://ticket-generator-lovat.vercel.app/"
    }
]


export const testingProject = [
    {
        "name": "Harambee",
        "description": "Harambee is a mobile and web platform connecting childcare providers with families, enabling registration, verification, availability scheduling, service bookings, communication, and learning/certification.",
        "stack": "Postman, Playwright, Android Studio, K6, Manual Testing, User Acceptance Testing (UAT), Test Design & Implementation",
        "img": harambee,
        "url": "https://myharambee.com/"
    },
    {
        "name": "Skill2Rural Platform",
        "description": "Educational platform bridging opportunities and transforming lives with comprehensive learning management system.",
        "stack": "Next.js, Cypress, Postman, Manual Testing, User Acceptance Testing (UAT)",
        "img": skill2rural,
        "url": "https://skill2rural.org/"
    },
]