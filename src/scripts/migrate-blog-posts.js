/**
 * Migration Script for Blog Posts
 * 
 * This script helps convert blog posts from the BlogPosts.tsx component
 * to individual Markdown files in the content/writing directory.
 * 
 * Usage:
 * 1. Copy this file to src/scripts/
 * 2. Run with Node.js: node src/scripts/migrate-blog-posts.js
 * 3. Check the generated files in src/content/writing/
 */

const fs = require('fs');
const path = require('path');

// Function to convert a blog post to Markdown
function convertToMarkdown(post) {
  // Create frontmatter
  const frontmatter = [
    '---',
    `title: "${post.title}"`,
    post.date ? `publishDate: ${post.date}` : `publishDate: ${new Date().toISOString().split('T')[0]}`,
    `description: "${post.subtitle}"`,
    `tags: []`, // Add tags manually later
    `type: "article"`,
    post.author ? `author: "${post.author}"` : '',
    post.category ? `category: "${post.category}"` : '',
    'draft: false',
  ];

  // Add embeds if they exist
  if (post.embeds && post.embeds.length > 0) {
    frontmatter.push('embeds: [');
    post.embeds.forEach(embed => {
      frontmatter.push('  {');
      frontmatter.push(`    type: "${embed.type}",`);
      frontmatter.push(`    url: "${embed.url}",`);
      if (embed.alt) frontmatter.push(`    alt: "${embed.alt}",`);
      if (embed.caption) frontmatter.push(`    caption: "${embed.caption}"`);
      frontmatter.push('  },');
    });
    frontmatter.push(']');
  }

  frontmatter.push('---');
  frontmatter.push('');

  // Add content
  const content = post.content;

  // Combine frontmatter and content
  return frontmatter.join('\n') + '\n' + content;
}

// Function to create a slug from a title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim();
}

// Function to save a Markdown file
function saveMarkdownFile(post) {
  const slug = post.id || createSlug(post.title);
  const filePath = path.join(__dirname, '..', 'content', 'writing', `${slug}.md`);
  
  const markdown = convertToMarkdown(post);
  
  fs.writeFileSync(filePath, markdown);
  console.log(`Created ${filePath}`);
}

// Main function to process all blog posts
function migrateBlogPosts() {
  // You'll need to manually copy your blog posts array here
  // from the BlogPosts.tsx file
  const blogPosts = [
    // Example:
    // {
    //   id: 'behind-the-design',
    //   title: "Behind the Design: Automate the Suck Out of Life",
    //   subtitle: "A deep dive into the branding, design, and development process...",
    //   date: "2025-03-10",
    //   category: "UX Design",
    //   author: "Kaitlin Isaac",
    //   content: `## The Beginning\nI have spent my whole twenties...`
    // },
    // Add more posts here...
  ];

  // Create the directory if it doesn't exist
  const dirPath = path.join(__dirname, '..', 'content', 'writing');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Process each blog post
  blogPosts.forEach(post => {
    saveMarkdownFile(post);
  });

  console.log('Migration complete!');
}

// Run the migration
migrateBlogPosts(); 