import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const socials = [
    {
        icon: <FaGithub/>,
        path: 'https://github.com/emmaeng680'
    },
    {
        icon: <FaLinkedin/>,
        path: 'https://www.linkedin.com/in/emmanuel-oppong-612bb41b6/'
    },
    {
        icon: <TbBrandLeetcode />,
        path: 'https://leetcode.com/u/emmaoppongswe/'
    },
    {
        icon: <FaTwitter/>,
        path: 'https://x.com/emma_oppong_a'
    },
    {
        icon: <FaInstagram/>,
        path: 'https://www.instagram.com/emmanuel_oppong_a/'
    },

]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} target="_blank" className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;