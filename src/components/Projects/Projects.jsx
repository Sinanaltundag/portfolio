import React, { useEffect } from 'react'

const Projects = () => {
  useEffect(function updateTitle() { document.title = "Projects"; });

  return (
    <div>Projects</div>
  )
}

export default Projects