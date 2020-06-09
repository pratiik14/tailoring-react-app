import React from 'react'

function ProjectDetails(props) {
    const id=props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
    <span className="card-title">Title-{id}</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe atque recusandae velit exercitationem incidunt provident possimus, obcaecati eligendi maiores, quos tempora voluptatum inventore. Atque pariatur, minima commodi ipsa quae optio.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Shivam</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
