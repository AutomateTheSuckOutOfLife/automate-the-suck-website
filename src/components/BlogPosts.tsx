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
    id: 'behind-the-design',
    title: "Behind the Design: Automate the Suck Out of Life",
    subtitle: "A deep dive into the branding, design, and development process behind Automate the Suck Out of Life's new website.",
    date: "2025-03-10",
    category: "UX Design",
    content: `
# Behind the Design: Automate the Suck Out of Life

## The Beginning
I have spent my whole twenties trying to figure out this whole "adulting" thing, and if I have heard one common sentiment of my fellow zillenials, it is this: It sucks.

Of course, there are amazing things that come with being an adult, but you never realize how much more of your life is taken up by "adulting" tasks until you're out of the house and doing it on your own. *(Did you know you need to clean your cleaning machines??)*

My husband, Dylan, and I have been navigating life together since our early twenties and have taken on these new "adulting" tasks together. We always found ourselves thinking, *"How do people do this?"* Or rather, *"How do people do this and still have time for all of the things they actually want to do?"*

We discovered that truly wealthy people often hire out for the tasks they don't want to put their time towards. For some, their time is a more finite resource than money, so they put their money towards hiring people to do the tasks that take up too much of their time (cleaning, financial planning, laundry, cooking, etc.).

Dylan and I wanted to experience the luxuries of not having to do "adulting" tasks and made it our personal mission to automate, or at least streamline, as many of these tedious tasks as possible. As we started making these improvements in our own lives, we wanted to share our findings and help others find their own ways of reclaiming their time.

This brought us to founding our nonprofit, **Automate the Suck Out of Life (ATSOL).**

We are so excited to share more of our story and create more resources as we continue our work. I wanted to kick off our new site with a **behind-the-scenes look at the design and development process.**

---

## Behind the Design
### What's in a Name?
The design process truly started when Dylan and I came up with the name. We are both huge fans of **Hank and John Green** (DFTBA, Nerdfighteria!) and have been incredibly inspired by their work. They founded **The Foundation to Decrease World Suck**, a charity-driven initiative to make the world a better place.

While chatting about our dreams for ATSOL, Dylan said, *"I kinda want to call it Automate the Suck Out of Life."* I loved it—straight to the point, a little edgy (kinda sounds like *automate the f*** out of life* hehe), and perfectly aligned with our mission.

---

## Logo and Wordmark
I started the visual design by experimenting in **Canva**. I played with different arrangements of "Automate the Suck Out of Life" and refined the spacing and sizing until it felt balanced.
<!-- embed-0 -->

#### **The Robot Vacuum Inspiration**
Dylan and I have introduced a lot of automation into our daily routines, and one of the first real game-changers was our **robot vacuum**. When we lived in our first apartment, vacuuming was a constant task. When we finally got a **Roomba (which we lovingly named Succ),** I realized how much mental space and time I had freed up by automating just one task.
<!-- embed-1 -->

That experience was pivotal, and I wanted to represent that feeling in our brand identity. That's why I started designing a **simple robot vacuum icon.**
<!-- embed-2 -->

#### **Incorporating the Lightning Bolt** 
As I refined the logo, I wanted to introduce an additional visual element that represented power, speed, and automation. After brainstorming different symbols—including a spiral (representing suction) and a magic wand (symbolizing effortless transformation)—I landed on the lightning bolt.

The lightning bolt felt like the perfect symbol for the energy and efficiency of automation. It also had a personal connection—Dylan and I had been re-reading Harry Potter, and the lightning bolt became a small nod to that, as well as a reference to electricity and technology powering automation. Plus, one of our favorite songs that year, Monster by Yung Lean, had lightning imagery in its lyrics, which just felt right for our branding.
Once I finalized the lightning bolt as a key design element, I explored different ways to integrate it into the wordmark and accompanying iconography. I played with different placements in Freeform on my iPad before finalizing the design in Canva and Figma.
<!-- embed-4 -->

#### **Color Palette & Typography**
I chose a **green color palette** because I wanted our brand to feel **modern, clean, and approachable.** Our goal is to empower people to use technology to improve their lives, so I wanted the branding to feel **practical and DIY-friendly.**
<!-- embed-3 -->

Typography choices:
- **Nourd (sans-serif)**: Clean and modern for the wordmark.
- **Roboto Slab**: Used for headings to add some structure.
<!-- embed-5 -->
- **Roboto (sans-serif)**: Readable, professional body text.
<!-- embed-6 -->
- **Roboto Mono**: A monospaced font for accents like buttons.

---

## Building the Website
### **Tech Stack & Implementation**
Once I finalized the designs in **Figma**, I moved to development using:
- **Astro** (Framework)
- **CSS** (Styling)
- **JavaScript & TypeScript** (Interactivity & Logic)

I leveraged **Cursor AI** to streamline my coding process. Instead of writing everything from scratch, I used Cursor to **generate boilerplate code, debug issues, and refine styling.** This significantly reduced development time and helped me focus on user experience.

### **Mobile-First Design**
Given that most users access websites on mobile first, I prioritized **mobile-first design**:
- **Readability**: Ensuring clear typography and accessible contrast.
- **Navigation**: Keeping the menu intuitive and easy to use on smaller screens.
- **Performance**: Optimizing load times with lightweight assets and efficient code.
<!-- embed-7 -->
<!-- embed-8 -->

---

## Final Thoughts
One of my favorite elements of the design is the **hero section**, where our **Roomba-inspired logo "sucks up" dirt elements** (represented by an asterisk ✱ as a nod to the Forever Notes Framework). This animation ties the branding and functionality together in an engaging way.
<!-- embed-9 -->

Building this site was an incredibly fun experience, and I love that the branding turned out to be **both creative and professional**. I'm excited to continue growing **Automate the Suck Out of Life** and sharing more projects in the future.

### **Want to Support Us?**
- Follow us on **[GitHub](#), [LinkedIn](#), [Instagram](#), and [Bluesky](#)**.
- Check out the **live site here: [insert link]**.
- Let me know your thoughts—I'd love your feedback!

`,
    embeds: [
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post1-logo-process.png',
        alt: 'Logo Design Process',
        caption: 'Exploring different logo concepts and iterations'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post2-logo-process.png',
        alt: 'Robot Vacuum Inspiration',
        caption: 'Our robot vacuum was the inspiration for our logo design'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post4-logo-process.png',
        alt: 'Robot Vacuum Icon Design',
        caption: 'Designing a simple robot vacuum icon for our brand'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post5-logo-process.png',
        alt: 'Color Palette Development',
        caption: 'Developing our green color palette for a modern, clean feel'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post7-finwordmark.png',
        alt: 'Final Wordmark Design',
        caption: 'The final wordmark design for Automate the Suck Out of Life'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post9-type.png',
        alt: 'Typography Selection',
        caption: 'Our typography choices for headings and body text'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post8-colors.png',
        alt: 'Color Palette',
        caption: 'The final color palette used throughout our branding and website'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post10-wireframes-paper.png',
        alt: 'Paper Wireframes',
        caption: 'Initial wireframes sketched on paper to plan the website layout'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/post11-wireframes-figma.png',
        alt: 'Figma Wireframes',
        caption: 'Digital wireframes created in Figma to refine the website design'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/heroatsol.gif',
        alt: 'Hero Animation',
        caption: 'The hero section animation showing our Roomba-inspired logo "sucking up" dirt elements'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/website-mockup.jpg',
        alt: 'Website mockup showing the design process',
        caption: 'Early mockups of the website design'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/color-palette.jpg',
        alt: 'Color palette and typography samples',
        caption: 'Our color palette and typography choices reflect our brand values'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/code-editor.jpg',
        alt: 'Code editor showing Astro components',
        caption: 'Building with Astro allowed for a component-based architecture'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/responsive-views.jpg',
        alt: 'Website shown on multiple devices',
        caption: 'Testing responsive layouts across different device sizes'
      },
      {
        type: 'image',
        url: '/images/blog/behind-the-design/final-homepage.jpg',
        alt: 'Final homepage design',
        caption: 'The finished homepage balances information with visual appeal'
      }
    ]
  },
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