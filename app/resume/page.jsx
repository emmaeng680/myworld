'use client'

import { FaJava,FaGitAlt,FaJs,FaReact,FaNodeJs,FaPython } from "react-icons/fa";
import { TbBrandCpp, TbBrandFirebase } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";

import {  SiMongodb, SiNextdotjs, SiFastapi } from "react-icons/si";
import { DiRedis } from "react-icons/di";

//about data

const about = {
    title:"About me",
    description: "kkkkkkkkkkkkkkkkkkkk(update this)",
    info: 
    [{
        fieldName: "Name",
        fieldValue: "Emmanuel Oppong",
    },
    {
        fieldName: "Phone",
        fieldValue: "(+1)3182454129",
    },
    {
        fieldName: "Experience",
        fieldValue: "3+ Years",
    },
    {
        fieldName: "Skype",
        /* Change this skype for later*/
        fieldValue: "Emmanuel Oppong",
    },
    {
        fieldName: "Nationality",
        fieldValue: "Ghanaian",
    },
    {
        fieldName: "Email",
        fieldValue: "eoppong@gsumail.gram.edu",
    },
    {
        fieldName: "Freelance",
        fieldValue: "Available",
    },
    {
        fieldName: "Languages",
        fieldValue: "English, Spanish",
    },
]
}

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'hhhhhhhhhhhhhhhhhhhhhhhh(update this)',
    items: [
        {
            company:"Tech Solutions Inc.",
            position:"Fullstack Developer",
            duration:"2022-Present"
        },
        {
            company:"Web Studio Design.",
            position:"Frontend Developer Intern",
            duration:"Summer 2021"
        },
        {
            company:"E-commerce Startup",
            position:"Freelance Web Developer",
            duration:"2020-2021"
        },
        {
            company:"Tech Academy",
            position:"Teaching Assistant",
            duration:"2019-2020"
        },
        {
            company:"Digital Agency",
            position:"UI/UX",
            duration:"2018-2019"
        },
        {
            company:"Software Development Firm",
            position:"Junior Developer",
            duration:"2017-2018"
        },
    ]
}


// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'hhhhhhhhhhhhhhhhhhhhhhhh(update this)',
    items: [
        {
            institution:"Grambling State University",
            degree:"Bachelors in Computer Science",
            duration:"2024-2028"
        },
        {
            institution:"ALX Software Engineering",
            degree:"Frontend Developer",
            duration:"2022-2024"
        },
        {
            institution:"NYU Abu Dhabi",
            degree:"Computer Science and Mathematics (Audit)",
            duration:"2020-2023"
        },
        {
            institution:"Yaf Ghana",
            degree:"SAT Prep",
            duration:"2019-2020"
        },
        {
            institution:"Prempeh College",
            degree:"General Science",
            duration:"2014-2017"
        },
       
    ]
}

const skills = {
    title: "My skills",
    description: "kkkkasjsksksk(update this)",
    skillList: [
        {
            icon: <TbBrandFirebase />,
            name: "firebase",
        },

        {
            icon: <DiNodejs />,
            name: "node.js",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaReact/>,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js",
        },
        {
            icon: <FaGitAlt />,
            name: "git",
        },
        {
            icon: <SiFastapi/>,
            name: "fastapi",
        },

        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <FaPython/>,
            name: "python",
        },
        {
            icon: <TbBrandCpp/>,
            name: "c++",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb",
        },
        {
            icon: <DiRedis />,
            name: "redis",
        },
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";



const Resume = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }}}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 '
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='skills' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px] '>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>{experience.items.map((item,index) => {
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent '>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/*dot*/}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent '>
                                                        
                                                    </span>
                                                    <p className='text-white/60 '>{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}</ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px] '>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>{education.items.map((item,index) => {
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent '>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/*dot*/}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent '>

                                                    </span>
                                                    <p className='text-white/60 '>{item.institution}</p>
                                                </div>
                                            </li>
                                        )
                                    })}</ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/* skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill,index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-600 hover:rotate-45'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold '>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '>
                                    {about.info.map((item,index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60 '>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;