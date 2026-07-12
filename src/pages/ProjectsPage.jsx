/* src/pages/ProjectsPage.jsx */
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const ProjectsPage = () => {
  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <h2>All Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage