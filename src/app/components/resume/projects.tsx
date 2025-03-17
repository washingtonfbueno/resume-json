import { DefaultProjects } from "@/app/templates/default/default-projects";
import { IProject, IResumeSection } from "@/app/types/resume.types";
import { FunctionComponent } from "react";

interface ProjectsProps {
	projects: IResumeSection<IProject>;
}

export const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
	return <DefaultProjects projects={projects} />;
};
