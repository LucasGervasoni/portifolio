import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projeto() {
  return (
    <>
    <ProjectCard projects={projects}/>
    </>
  );
}