import { motion } from "framer-motion"

const Skills = () => {

    let iconNames = [
        'html',
        'css',
        'js',
        'bootstrap',
        'sass',
        'react',
        'redux',
        'git',
        'next'
    ]

    return (
        <div className="skills">
            <h1 className="header">Skills</h1>
            <motion.div className="languages" initial={{ translateY: 70 }} viewport={{once: true}}
                whileInView={{ translateY: 0 }}>
                {iconNames.map((iconName) => (
                    <img src={"/Images/Icons/" + iconName + ".svg"} alt={iconName} />
                ))}
            </motion.div>
        </div>
    )
}

export default Skills