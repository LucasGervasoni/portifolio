'use client';
import { useSearchParams } from 'next/navigation';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projeto() {
  const searchParams = useSearchParams();
  const filterType = searchParams.get('type');

  const filteredProjects = filterType
    ? projects.filter((project) => project.type === filterType)
    : projects;
    
  return (
    <>
    <ProjectCard projects={filteredProjects}/>
    </>
  );
}