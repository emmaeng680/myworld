'use client'

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'I specialize in building scalable and interactive web applications, utilizing modern technologies like React, Next.js, Flask, and Drizzle ORM. My projects include responsive designs, secure databases, and optimized backends to deliver seamless user experiences.',
        href: 'https://www.google.com/'
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'I design user-friendly and visually appealing interfaces that prioritize functionality and engagement. My approach combines responsive layouts with interactive elements, ensuring that users enjoy intuitive and accessible designs.',
        href: 'https://www.google.com/'
    },
    {
        num: '03',
        title: 'Logo Design',
        description: 'I create impactful logos that align with a brand\'s identity and vision. My designs are simple yet memorable, combining aesthetics with functionality to ensure versatility across digital and print media.',
        href: 'https://www.google.com/'
    },
    {
        num: '04',
        title: 'SEO',
        description: 'I enhance online visibility and engagement through targeted SEO strategies. By optimizing site structure, content, and keywords, I help improve search engine rankings and drive organic traffic growth.',
        href: 'https://www.google.com/'
    },

]

import {motion} from "motion/react";


const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
           <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn' }}}
                className='grid grid-cols-1 md:grid-cols-2 gap-[60px] '
                >
                    {
                        services.map((service, index) => {
                            return (
                                <div key={index} className='flex-1 flex-col justify-center gap-6 group'>
                                    {/* top */}
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 '>{service.num}</div>
                                        <Link href={service.href} target="_blank" className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>{service.name}
                                            <BsArrowDownRight className='text-primary text-3xl'/>
                                        </Link>
                                    </div>
                                    {/* title */}
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                        {service.title}
                                    </h2>
                                    {/* description */}
                                    <p className='text-white/60 ' >{service.description}</p>
                                    {/* border */}
                                    <div className='border-b border-white/20 w-full'>

                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
           </div>
        </section>
    )
}

export default Services;