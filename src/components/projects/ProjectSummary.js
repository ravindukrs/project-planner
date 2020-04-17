import React from 'react'

const ProjectSummary = (props) => {
    
    return (
        <div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{props.project.title}</span>
                    <p>{props.project.content}</p>
                    <p className="grey-text">3rd Sept, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;
