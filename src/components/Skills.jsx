import { motion } from "framer-motion";

const iconVariants = {
    initial: { translateY: 40, opacity: 0 },
    animate: (index) => ({ translateY: 0, opacity: 1, transition: { delay: 0.05 * index } }),
};
const Skills = () => {
    let iconNames = [
        "html",
        "css",
        "js",
        "bootstrap",
        "sass",
        "react",
        "redux",
        "git",
        "next",
    ];

    return (
        <div className="skills">
            <h1 className="header">Skills</h1>
            <div className="languages">
                {iconNames.map((iconName, index) => (
                    <motion.img
                        src={"/Images/Icons/" + iconName + ".svg"}
                        alt={iconName}
                        variants={iconVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
