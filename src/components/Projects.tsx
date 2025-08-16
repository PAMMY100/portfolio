'use client';
import React, { useEffect, useState } from 'react'
import { VercelProject } from '@/types/vercel';

const Projects = () => {
  const [projects, setProjects] = useState<VercelProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) return <p className='text-center text-[#615FFF]'>Loading....</p>;

  return (
    <div className='text-[#615FFF] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-14'>
      {projects.map((project) => {
        const projectUrl = project.latestDeployments?.[0]?.url 
          ? `https://${project.latestDeployments[0].url}` 
          : null;

        return (
          <div 
            key={project.id} 
            className='bg-[#020618] rounded-lg overflow-hidden shadow-lg'
          >
            {projectUrl ? (
              <iframe
                src={projectUrl}
                title={project.name}
                className="w-[300px] h-40 border-0"
                loading="lazy"
              />
            ) : (
              <div className="w-[300px] h-40 bg-gray-800 flex items-center justify-center text-gray-500">
                No Preview
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.framework}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
