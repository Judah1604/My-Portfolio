import { motion, stagger } from "framer-motion"

const Skills = () => {
    let iconNames = [
        'html5',
        'css3',
        'js',
        'bootstrap',
        'sass',
        'react'
    ]

    return (
        <div className="skills">
            <h1 className="header">Skills</h1>
            <motion.div className="languages" initial={{ translateY: 70 }}
                whileInView={{ translateY: 0 }}>
                {iconNames.map((iconName) => (
                    <i className={"fa-brands fa-" + iconName}></i>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills