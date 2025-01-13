'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

function ProjetoContent() {
  const searchParams = useSearchParams();
  const filterType = searchParams.get('type');

  const filteredProjects = filterType
    ? projects.filter((project) => project.type === filterType)
    : projects;

  return <ProjectCard projects={filteredProjects} />;
}

export default function Projeto() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjetoContent />
    </Suspense>
  );
}
