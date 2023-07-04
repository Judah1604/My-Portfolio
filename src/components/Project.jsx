import { motion } from "framer-motion"

const Project = ({ heading, details, tools, filename, isPortfolio, url }) => {

    return (
        <div className="project row">
            <motion.div className="project-text col-md-5" initial={{ translateX: -200 }} whileInView={{ translateX: 0 }}>
                <h2>{heading}</h2>
                <p>{details}</p>
                <ul className="tools">
                    {tools.map((tool, index) => (<li key={index}>{tool}</li>))}
                </ul>
                <a href={"https://github.com/Judah1604/" + heading.split(' ').join('-')} className="btn code-btn" target="_blank">View Code</a>
                {isPortfolio ? '' : <a href={"https://judah1604.github.io/" + heading.split(' ').join('-')} className="btn red-btn" target="_blank">Visit Site</a>}
            </motion.div>
            <motion.div className="project-img col-md-5" initial={{ translateX: 200 }} whileInView={{ translateX: 0 }} transition={{ type: 'spring', bounce: 0.4 }}>
                <img src={"Images/Projects/" + filename} alt={heading} />
            </motion.div>
        </div>
    )
}

export default Project