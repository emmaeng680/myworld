'use client'

import CountUp from "react-countup";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";



const stats = [
    {
        num: 3,
        text: "Years of experience",
        href: ''
    },
    {
        num: 15,
        text: "Projects completed",
        href: ''

    },
    {
        num: 8,
        text: "Technologies mastered",
        href: 'https://myworld-git-main-emmanuel-oppongs-projects.vercel.app/resume'
    },
    {
        num: 650,
        text: "Code commits",
        href: 'https://github.com/emmaeng680'
    },
]

const Stats = () => {
    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className="container mx-auto">
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((item, index) => {
                        return (
                            <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index} >
                                <Link href={item.href} target='_blank'>< CountUp
                                    start={0}
                                    separator="."
                                    decimal="."
                                    suffix="+"
                                    end={item.num} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold' />
                                </Link>


                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;

// {
//     icon: <FaGithub/>,
//         path: 'https://github.com/emmaeng680'
// },