# De Blog Idee

Het idee begon eigenlijk met het idee om mijn kennis te delen over wat ik tot nu toe weet van coderen. Ik ben zelf nog een student en heb nog niet superveel ervaring met programmeren, maar ik heb ondertussen wel al bij een paar verschillende bedrijven stage gelopen. Daar heb ik aan verschillende leuke projecten gewerkt en steeds weer nieuwe dingen geleerd.

Ik dacht daarom: waarom zou ik dit allemaal niet gewoon bijhouden in een blog? Zo kan ik een beetje meer achter de schermen context geven en hoe ik mezelf steeds verder ontwikkel. Misschien is het in de toekomst ook wel handig om dit aan recruiters te kunnen laten zien.

Ik heb persoonlijk al een portfolio-website, maar ik zie deze blog vooral als een leuke extra toevoeging.

# De design
Qua design wil ik eigenlijk ongeveer dezelfde kleuren gebruiken als op mijn eigen website, of in ieder geval iets wat daar een beetje bij in de buurt komt. Ik vind het wel fijn als mijn portfolio en blog een beetje bij elkaar passen, zodat het niet voelt alsof het twee compleet verschillende websites zijn.

Momenteel begin ik met een template blog zodat ik beter en sneller kan leren weten hoe het structuur van astro in elkaar zit als je een blog wilt gaan maken.

Voor inspiratie heb ik hieronder een paar blogs gelinkt die ik zelf wel mooi vind. Ik wil ongeveer kijken naar deze stijl en vanuit daar mijn eigen draai eraan geven:

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
