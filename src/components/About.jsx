import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="header">About</h1>
            <div className="about-content row">
                <div className="about-img col-md-4">
                    <img src="Images/profile-pic.jpg" alt="Profile Picture" />
                    <div className="circle"></div>
                </div>
                <motion.div
                    className="about-text col-md-6"
                    initial={{ x: 70 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                >
                    Recent high school graduate with a background in web design
                    and development of dynamic, responsive and interactive
                    websites utilizing HTML, CSS, Javascript and their
                    frameworks. Over 2 years of experience working on personal
                    projects. Implemented responsive web design approach to
                    build mobile first websites. Seeking to improve my web
                    development skills by deploying my experience and skills in
                    projects that I handle and learning more as I grow.
                    <br />
                    <a
                        className="btn red-btn"
                        href="/Judah-Oyedele.pdf"
                        download="Judah Oyedele's Resume"
                    >
                        <i class="fa-solid fa-download"></i> Download Resume
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
