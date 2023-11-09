import { useState } from 'react'
import { motion } from 'framer-motion'

const socialsVariants = {
    initial: {
        y: 40
    },
    animate: (delay) => ({
        y: 0,
        transition: {
            delay: delay
        }
    })
}

const Contact = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    return (
        <>
            <div className="contact" id="contact">
                <h1 className="header">Contact</h1>
                <p>Feel free to contact me.</p>
                <form action="#" method="POST" name="Contact Form" netlify>
                    <input
                        type="hidden"
                        name="form-name"
                        value="Contact Form"
                    />
                    <motion.div
                        className="form-group"
                        initial={{ translateX: -200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="text"
                            id="fullname"
                            name="Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="fullname"
                            className={fullname === "" ? "" : "focus-label"}
                        >
                            Full Name
                        </label>
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ translateX: 200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="email"
                            className={email === "" ? "" : "focus-label"}
                        >
                            Email
                        </label>
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ translateX: -200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="number"
                            id="phone"
                            name="Phone Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="phone"
                            className={number === "" ? "" : "focus-label"}
                        >
                            Phone Number
                        </label>
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ translateX: 200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <textarea
                            placeholder="Message"
                            name="Message"
                        ></textarea>
                    </motion.div>
                    <button className="btn red-btn" type="submit">
                        <i className="fa-solid fa-paper-plane"></i>
                        Shoot
                    </button>
                </form>
            </div>

            <div className="socials">
                <motion.a
                    variants={socialsVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={0}
                    viewport={{ once: true }}
                    href="https://twitter.com/JudahOyedele"
                >
                    <i className="fa-brands fa-twitter"></i>
                </motion.a>
                <motion.a
                    variants={socialsVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={0.2}
                    viewport={{ once: true }}
                    href="https://codepen.io/Judah1604"
                >
                    <i className="fa-brands fa-codepen"></i>
                </motion.a>
                <motion.a
                    variants={socialsVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={0.4}
                    viewport={{ once: true }}
                    href="https://github.com/Judah1604"
                >
                    <i className="fa-brands fa-github"></i>
                </motion.a>
            </div>
        </>
    );
}

export default Contact