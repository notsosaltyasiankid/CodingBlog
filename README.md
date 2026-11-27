# The Blog Idea

The idea actually started with wanting to share what I've learned about coding so far. I'm still a student myself and don't have a whole lot of programming experience yet, but I've had the opportunity to do internships at a few different companies. During those internships, I've worked on some fun projects and learned something new every time.

So I thought: why not keep track of all of this in a blog? This way, I can give a bit more context about what goes on behind the scenes and show how I'm continuously developing my skills. Maybe it will also be useful in the future to show recruiters what I've been working on and how I've grown as a developer.

I already have my own portfolio website, but I see this blog mainly as a nice addition to it.

# The Design

When it comes to the design, I'd like to use roughly the same colours as my own website, or at least something that comes close to them. I like the idea of having my portfolio and blog match each other, so they don't feel like two completely different websites.

For now, I'm starting with a blog template so I can learn more about how Astro's structure works when building a blog. This should also help me understand the framework better and make the learning process a bit faster.

For inspiration, I've linked a couple of blogs below that I personally like. I'd like to use them as a reference for the overall style and then add my own personal touch:

https://benjineer.vercel.app/blogs/intellichat

https://rogierderuijter.com/#/blog

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma Design File](https://www.figma.com/community/file/1356898632249991861)  
**Static Search** - [Pagefind](https://pagefind.app/)  
**Icons** - [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Linting** - [ESLint](https://eslint.org)  
**Dynamic OG images** - [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) + [Astro Fonts](https://docs.astro.build/en/guides/fonts/)

# Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
