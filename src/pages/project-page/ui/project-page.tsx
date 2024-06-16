'use client';
import React from "react";
import { ProjectCardDetailed } from "@/entities/project-card-detailed";
import { useGetProjectsIdQuery } from "@/services/ProjectService";

export const Project = ({id} : {id: number}) => {  
    const { data: project } = useGetProjectsIdQuery({ id });
	//const { description, name, directions } = project;
	console.log('projectDetail', project);
 
    return (
        <div>
           <ProjectCardDetailed 
           name={project?.name} 
           description={project?.description}
           directions={project?.directions}
           busyness={project?.busyness}
           phone_number={project?.phone_number}
           link={project?.link}
           owner={project?.owner}
           started={project?.started}
           ended={project?.ended}
           status={project?.status}
           />
        </div>
    )

    
}