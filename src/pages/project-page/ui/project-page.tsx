import React from "react";
import { ProjectCardDetailed } from "@/entities/project-card-detailed";

export const Project = ({id} : {id : string}) => {
    return (
        <div>
          <ProjectCardDetailed id={id}/>
        </div>
    )

    
}