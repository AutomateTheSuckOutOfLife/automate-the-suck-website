import React from 'react';

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Blog Post Title Here',
    subtitle: 'subtitle here',
    content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Non vulputate primis dictum; libero lorem vivamus sit volutpat. Arcu fringilla nisl parturient; dis penatibus adipiscing primis. Eu dignissim aliquam lobortis, ex turpis vulputate ornare ullamcorper fringilla. Natoque primis interdum augue hendrerit libero sociosqu tristique venenatis. Facilisis nibh cubilia venenatis congue facilisis; aenean vel penatibus. Dis sollicitudin nascetur nisl non eras curabitur fermentum.',
  },
  {
    id: '2',
    title: 'Blog Post Title Here',
    subtitle: 'subtitle here',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    title: 'Blog Post Title Here',
    subtitle: 'subtitle here',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '4',
    title: 'Blog Post Title Here',
    subtitle: 'subtitle here',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export { blogPosts };
export type { BlogPost };

export default function BlogPosts() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-serif font-bold text-primary dark:text-dark-accent">blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-primary/20 pb-6 last:border-b-0"
          >
            <a
              href={`/writing/${post.id}`}
              className="block group"
            >
              <h2 className="text-xl font-bold text-primary dark:text-dark-accent group-hover:text-secondary dark:group-hover:text-dark-accent/80 transition-colors">
                {post.title}
              </h2>
              <p className="text-accent/80 dark:text-dark-accent/80 italic">{post.subtitle}</p>
              <p className="mt-2 text-accent dark:text-dark-accent line-clamp-2">{post.content}</p>
              <span className="inline-block mt-2 text-primary dark:text-dark-accent group-hover:text-secondary dark:group-hover:text-dark-accent/80 transition-colors">
                Read more →
              </span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}