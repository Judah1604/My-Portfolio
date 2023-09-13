import Project from "./Project"

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1 className="header">Projects</h1>
            <div className="projects-container">
                 <Project
                    heading='Expense Tracker Web App'
                    details='This is a Expense Tracker with CRUD(Create, Read, Update, Delete) capabilities, 
                        All you have to do is to write the expense in the expense input and the price and the app creates a new item and calculates the total.
                        You can also edit the items or delete them. Built this with:'
                    tools={['HTML', 'SASS', 'React']}
                    filename='expense.webp'
                />
                <Project
                    heading='My Portfolio'
                    details='This is my portfolio site done with React. Built this with:'
                    tools={['HTML', 'SASS', 'Bootstrap', 'React', 'Framer Motion']}
                    filename='portfolio.PNG'
                    isPortfolio
                />
                <Project
                    heading='Github Users Search'
                    details='This is my first project done with React. It fetches the data of a github user,
                        all you need to do is to write the username in the input box. Built this with:'
                    tools={['HTML', 'CSS', 'React']}
                    filename='ghusers.webp'
                    url='https://judah1604.github.io/Github-user-search/'
                />
                <Project
                    heading='Insure Landing Page'
                    details='This is a Frontend Mentor challenge. Built this landing page with:'
                    tools={['HTML', 'SASS', 'JavaScript']}
                    filename='insure.webp'
                />
                <Project
                    heading='Blogr Landing Page'
                    details='This is a Frontend Mentor challenge. Built this landing page with:'
                    tools={['HTML', 'SASS', 'JavaScript']}
                    filename='blogr.webp'
                />
                <Project
                    heading='Calculator'
                    details='I made this fully responsive calculator'
                    tools={['HTML', 'SASS', 'JavaScript']}
                    filename='calculator.webp'
                />
                <Project
                    heading='Real Estate Site'
                    details='This is a real estate site which I call LIVAN.
						Worked with SVG waves when building this.'
                    tools={['HTML', 'SASS', 'JavaScript']}
                    filename='livan.webp'
                />
                <Project
                    heading='Virtual Keyboard'
                    details="This responsive virtual keyboard' s functionality was made by implementing DOM Manipulation."
                    tools={['HTML', 'CSS', 'JavaScript']}
                    filename='keyboard.webp'
                />
                <Project
                    heading='Google Clone'
                    details="I made this clone of Google and added a Dark mode switch."
                    tools={['HTML', 'CSS', 'JavaScript']}
                    filename='google.webp'
                />
                <Project
                    heading='GAZU'
                    details="I made this Resturant Site which I call GAZU.
						Where I implemented CSS animations"
                    tools={['HTML', 'SASS', 'JavaScript', 'Bootstrap']}
                    filename='gazu.webp'
                />
                <Project
                    heading='Selit'
                    details="I made this E-Commerce Site added Add To Cart functionality.
						I call the site Selit"
                    tools={['HTML', 'SASS', 'JavaScript', 'Bootstrap']}
                    filename='selit.webp'
                />
            </div>
        </div>
    )
}

export default Projects