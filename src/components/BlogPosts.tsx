import React from 'react';

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  date?: string;
  category?: string;
  embeds?: {
    type: 'image' | 'video';
    url: string;
    alt?: string;
    caption?: string;
  }[];
};

const blogPosts: BlogPost[] = [
  {
    id: 'shortcuts-instead-of-apps',
    title: "You Don't Need Another App: Build a Shortcut Instead",
    subtitle: "There's an app for that...but why not take back control and make your own?",
    date: "2025-01-09",
    category: "Automation",
    content: `
<h2>Have you ever found yourself thinking "I wish there was an app that could..." only to find that the perfect app doesn't exist? Or maybe it does exist, but it's either too expensive, too complicated, or just doesn't quite do what you want it to do. Well, I'm here to tell you that you might not need another app at all. Instead, you might just need a Shortcut.</h2>

<!-- embed-0 -->

I've been using Shortcuts on my iPhone for years now, but I've recently started diving deeper into what's possible with them. And let me tell you, it's a lot more than you might think. With the integration of ChatGPT and other AI tools, the possibilities have expanded even further.

Let me walk you through a recent example that might inspire you to create your own shortcuts instead of downloading yet another app.

## The Problem: Too Many Apps, Too Little Control

I found myself wanting a way to quickly log various aspects of my day - what I ate, how I felt, what I did - but I didn't want to download separate apps for food tracking, mood tracking, and activity tracking. I wanted something simple, quick, and customizable.

<!-- embed-1 -->

<h2>The Solution: A Custom Shortcut</h2>

Instead of searching for the perfect app (which probably doesn't exist), I decided to create a shortcut. Here's what I did:

1. Created a new shortcut called "Daily Log"
2. Added a menu that lets me choose what I want to log (Food, Mood, or Activity)
3. Set up text prompts to gather the relevant information
4. Used ChatGPT to help format and categorize the data
5. Saved everything to a simple text file in iCloud

<!-- embed-2 -->

The best part? It took me less than 30 minutes to set up, and now I have exactly what I wanted - a quick way to log different aspects of my day, all in one place, exactly the way I want it.

## Why This Approach Works Better

1. **Complete Customization**: Unlike apps that force you into their way of doing things, a shortcut can be modified to work exactly how you want it to.
2. **No Extra Apps**: Everything runs through the Shortcuts app, which is already on your iPhone.
3. **Integration with Other Tools**: My shortcut can talk to other apps, send data wherever I want, and even use AI to help process information.
4. **Free and Private**: No subscription fees, no ads, and my data stays on my device.

<!-- embed-3 -->

<h2>Getting Started with Your Own Shortcuts</h2>

If you're new to Shortcuts, don't worry! Here are some tips to get you started:

1. Start small - pick one simple task you want to automate
2. Use the built-in actions first to understand the basics
3. Look at other people's shortcuts for inspiration
4. Don't be afraid to experiment and modify things

Remember, the goal isn't to create the most complex shortcut possible. The goal is to solve your specific problem in a way that works for you.

<h2>The Power of AI in Shortcuts</h2>

One of the most exciting developments in Shortcuts is the ability to integrate with AI tools like ChatGPT. This opens up a whole new world of possibilities:

- Use AI to analyze and categorize your data
- Generate summaries of your logs
- Get personalized recommendations based on your entries
- Format your data in different ways for different purposes

<!-- embed-4 -->

<h2>Conclusion</h2>

The next time you find yourself thinking "I need an app for that," consider whether a custom shortcut might be a better solution. With a little creativity and the power of tools like ChatGPT, you might be surprised at what you can create.

Remember, the best tool is often the one you build yourself, because it does exactly what you need it to do, nothing more and nothing less.

Happy automating!
`,
    embeds: [
      {
        type: 'video',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        alt: 'Demo of the Daily Log shortcut in action'
      },
      {
        type: 'image',
        url: '/images/blog/shortcuts-instead-of-apps/shortcuts-blog-design.png',
        alt: 'Person using their phone in a dimly lit environment, illuminated by the warm glow of their screen',
        caption: 'Taking control of your digital life, one shortcut at a time'
      },
      {
        type: 'image',
        url: 'https://automatethesuckoutof.life/wp-content/uploads/2024/01/shortcut-setup.jpg',
        alt: 'Screenshot of the Shortcuts app showing the Daily Log setup',
        caption: 'Setting up the Daily Log shortcut is straightforward and customizable'
      },
      {
        type: 'image',
        url: 'https://automatethesuckoutof.life/wp-content/uploads/2024/01/shortcut-results.jpg',
        alt: 'Screenshot showing the formatted log entries from the shortcut',
        caption: 'The end result: clean, organized data exactly how I want it'
      },
      {
        type: 'image',
        url: 'https://automatethesuckoutof.life/wp-content/uploads/2024/01/chatgpt-integration.jpg',
        alt: 'Screenshot showing ChatGPT integration in the Shortcuts app',
        caption: 'Integrating ChatGPT adds powerful AI capabilities to your shortcuts'
      }
    ]
  }
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
              <h2 className="text-xl font-serif font-bold text-primary dark:text-dark-accent group-hover:text-secondary dark:group-hover:text-dark-accent/80 transition-colors">
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