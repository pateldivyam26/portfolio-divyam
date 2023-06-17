import React, { useEffect } from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { useState } from "react"
import { connect } from "react-redux"

const Projects = ({ projects }) => {
  const [count] = useState(8)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(projects.slice(0, count))
  }, [count, projects])

  return (
    <Section id="projects" title="Projects">
      <div className="cards">
        {items && items.map((card, index) => <Card card={card} key={index} />)}
      </div>
      <br></br>
      <div class="wrapper">
        <button className='btn btn-primary' onClick={() => window.open("https://github.com/pateldivyam26?tab=repositories")} >
          More Projects
        </button>
      </div>
      
    </Section>
  )
}

const mapStateToProps = (store) => {
  const { projects } = store.project
  return { projects }
}

export default connect(mapStateToProps)(Projects)
