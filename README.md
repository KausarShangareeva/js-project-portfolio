# 🏡 Kausar Portfolio

**Kausar Portfolio** is a modern, interactive portfolio website built during Technigo’s JavaScript Bootcamp (August 2025). The project showcases my skills, projects, blog articles, and tech stack, demonstrating responsive design, dynamic content, and interactive UI components.

The live project is available on [Netlify](https://your-netlify-link.netlify.app/).

---

## 🔗 Demo

Check it out here: [Kausar Portfolio on Netlify](https://kausarshangareeva-portfolio.netlify.app/)

---

## 📸 Screenshot

## ![Portfolio Screenshot](src/assets/Image/portfolio-screen.png)

## 🚀 Features

- 👋 **Hero Section:** Intro with images and description
- 🛠️ **Tech Section:** List of technologies and skills with interactive tags
- 🏗️ **Featured Projects Section:** Project cards with images, tags, descriptions, and action buttons
- 💻 **Skills Section:** Skills and tools displayed in responsive columns
- 📚 **Blog Section:** Articles with images, titles, dates, and buttons for reading
- 📱 Fully **responsive layout** — adapts for desktop, tablet, and mobile
- 🎨 **Interactive UI components:** Buttons, tags, cards, burger menu
- 🌟 **Data-driven content** from JSON files for projects, skills, articles, and tech

---

## 🧰 Tech Stack / What I Built With

- **React.js** for building modular and reusable components
- **Styled-Components** for styling and media queries
- **JavaScript (ES6+)** for logic, mapping, filtering, and dynamic rendering
- **JSON** files to manage structured data: aboutMe, projectsData, articlesData, skillsData, techData
- **Vite** for fast development and bundling
- **SVG Icons & Lucide** for interactive icons and buttons

---

## 🧠 How It Works

1. **Hero Section**: Displays greeting text with animated images.
2. **Tech Section**: Shows my tech stack with dynamic tags.
3. **Featured Projects Section**: Projects rendered dynamically with images, descriptions, and action buttons. Layout adapts for even/odd projects.
4. **Skills Section**: Highlights my skills with interactive tags in columns.
5. **Blog Section**: Articles displayed from JSON data, including image, title, description, and publication date.
6. **Footer Section**: Contains contact info, social icons, and avatar.
7. **Responsive Design**: Uses styled-components media queries to adjust layout, images, and typography for different screen sizes.
8. **Dynamic Content**: All sections fetch data from JSON files, making it easy to update or expand.

---

## 📂 File Structure

```
src/
│
├── 📂 data/
│   ├── aboutMe.json
│   ├── projectsData.json
│   ├── articlesData.json
│   └── skillsData.json
│   └── techData.json
│
├── 📂 Assets/
│   ├── Button/
│   │   ├── ButtonIcons/
│   │   ├── Button.jsx
│   │   └── ButtonData.js
│   │
│   ├── Tag/
│   │   ├── TagIcins/
│   │   ├── TagComponents.jsx
│   │   └── TagData.js
│   │
│   ├── Typography
│   │
│   ├── Image/
│   │   ├── ImagBlog/
│   │   ├── ImagHero/
│   │   └── ImagProject/
│   │
│   └── Icon/
│       ├── Icons/
│       └── IconData.js
|
|
├── 📂 Styles/
│   │
│   └── HeroSection/
│      ├── GlobalStyles.js
│      └── responsive.js
│
├── 📂 Sections/
│   │
│   ├── HeroSection/
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.styles.js
│   │   └── components/
│   │       ├── HeroImages.jsx
│   │       └── HeroDescription.jsx
│   │
│   ├── TechSection/
│   │   ├── TechSection.jsx
│   │   └── components/
│   │       ├── TechColumn.jsx
│   │       ├── TechTagList.jsx
│   │       └── TechTagItem.jsx
│   │
│   ├── FeaturedProjectsSection/
│   │   ├── FeaturedProjectsSection.jsx
│   │   └── components/
│   │       ├── ProjectCard.jsx
│   │       ├── ProjectImage.jsx
│   │       ├── ProjectTags.jsx
│   │       ├── ProjectTitle.jsx
│   │       ├── ProjectDescription.jsx
│   │       └── ProjectButtons.jsx
│   │
│   ├── SkillsSection/
│   │   ├── SkillsSection.jsx
│   │   └── components/
│   │       ├── SkillsColumn.jsx
│   │       ├── SkillsTagList.jsx
│   │       └── SkillsTagItem.jsx
│   │
│   ├── BlogSection/
│   │   ├── BlogSection.jsx
│   │   └── components/
│   │       ├── BlogCard.jsx
│   │       ├── BlogImage.jsx
│   │       ├── BlogDate.jsx
│   │       ├── BlogTitle.jsx
│   │       ├── BlogDescription.jsx
│   │       └── BlogButton.jsx
│   │
│   └── FooterSection/
│       ├── FooterSection.jsx
│       └── components/
│           ├── Avatar.jsx
│           ├── FooterContacts.jsx
│           └── FooterIcons.jsx
│
|── App.jsx
└── main.jsx

```

---

## 📝 What I Learned

- Structuring a React project with multiple sections and reusable components
- Creating **responsive layouts** with styled-components and media queries
- Dynamically rendering content from JSON using `.map()`
- Implementing **interactive UI elements** like buttons, tags, and cards
- Handling images and icons for different screen sizes
- Managing props and component state effectively
- Combining frontend design and programming skills to build a full portfolio website

---

## 🔜 Next Steps

- Add filtering and search for projects and blog posts
- Implement dark/light mode toggle
- Add a contact form with email submission
- Optimize images for performance and faster loading
- Expand blog section with categories and pagination

---

## 📄 License

This project is free to use for educational purposes.
