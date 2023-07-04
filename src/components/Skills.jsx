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
            <div className="languages">
                {iconNames.map((iconName) => (
                    <motion.div className="icon" initial={{ translateY: 40 }}
                        whileInView={{ translateY: 0 }} key={iconName}>

                        <i className={"fa-brands fa-" + iconName}></i>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills