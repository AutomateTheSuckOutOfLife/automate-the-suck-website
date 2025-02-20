import React, { useState } from 'react';

type ProjectType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  images?: string[];
};

type FilterOption = {
  id: string;
  label: string;
  icon: string;
};

const filterOptions: FilterOption[] = [
  { id: 'dev', label: 'Development', icon: '💻' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'creative', label: 'Creative', icon: '✨' },
  { id: 'music', label: 'Music', icon: '🎵' },
  { id: 'education', label: 'Education', icon: '📚' },
];

const projects: ProjectType[] = [
  {
    id: '1',
    title: 'Project Title',
    subtitle: 'project subtitle',
    description: 'Brief description of project. This is where the start of a blog post would start.',
    tags: ['dev', 'design'],
  },
  {
    id: '2',
    title: 'Project Title',
    subtitle: 'project subtitle',
    description: 'Brief description of project. This is where the start of a blog post would start. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['creative', 'education'],
  },
  // Add more projects as needed
];

export default function ProjectFilter() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredProjects = selectedFilters.length === 0
    ? projects
    : projects.filter(project =>
        project.tags.some(tag => selectedFilters.includes(tag))
      );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-serif font-bold text-primary">what i've made</h1>
      
      <div className="flex gap-4 pb-6 border-b border-primary/20">
        {filterOptions.map(filter => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-colors ${
              selectedFilters.includes(filter.id)
                ? 'bg-primary text-white'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            title={filter.label}
          >
            {filter.icon}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white/50 rounded-lg p-6 space-y-4 hover:bg-white/60 transition-colors"
          >
            <h2 className="text-xl font-bold text-primary">{project.title}</h2>
            <p className="text-accent/80 italic">{project.subtitle}</p>
            {project.tags.map(tag => (
              <span
                key={tag}
                className="inline-block mr-2 text-sm text-accent/60"
              >
                #{filterOptions.find(f => f.id === tag)?.label.toLowerCase()}
              </span>
            ))}
            <p className="text-accent">{project.description}</p>
            {project.images && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-md"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}