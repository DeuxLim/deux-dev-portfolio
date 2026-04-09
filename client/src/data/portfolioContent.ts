export type PortfolioProject = {
    name: string;
    description: string;
    url?: string;
};

export type TimelineItem = {
    year: string;
    position: string;
    company: string;
    honor?: string;
};

export type ExperienceItem = {
    role: string;
    fnName: string;
    company: string;
    period: string;
    highlights: string[];
};

export type TechStackItem = {
    name: string;
    iconKey:
        | "javascript"
        | "typescript"
        | "react"
        | "jquery"
        | "tailwindcss"
        | "html"
        | "css"
        | "php"
        | "nodejs"
        | "laravel"
        | "express"
        | "mysql"
        | "mongodb"
        | "git"
        | "vscode"
        | "github"
        | "gitlab"
        | "docker"
        | "claude"
        | "openai"
        | "postman";
    iconClassName: string;
};

export type TechStackSection = {
    name: string;
    items: TechStackItem[];
};

export const portfolioContent = {
    header: {
        fullName: "Deux Daniel Lim",
        role: "Full Stack Developer ( Laravel & React )",
        location: "Metro Manila",
        workSummary: "3 years work experience | BS-IT Graduate | Cum Laude",
        resumePath: "/resume.pdf",
        phone: "+63 945-428-6156",
        email: "limdeux27@gmail.com",
    },
    about: {
        title: "About",
        paragraphs: [
            "I'm a full-stack web developer with 3 years of experience building, maintaining, and improving production systems using PHP and Javascript ecosystem. I focus on writing clean, maintainable code and delivering practical solutions—whether it's fixing bugs, improving existing systems, or building new features from the ground up.",
            "I'm comfortable working across the stack, adapting to different problems, and choosing the right approach based on what the system actually needs.",
            "Outside of work, I actively build projects to sharpen my skills and stay current with modern technologies. I enjoy solving problems and creating things that have real impact, and I'm continuously learning to improve how I design, build, and scale applications.",
            "I'm looking for opportunities where I can contribute, grow with experienced developers, and take on more complex challenges over time.",
        ],
    },
    timeline: {
        title: "Timeline",
        items: [
            {
                year: "2026",
                position: "Full Stack Developer",
                company: "Orro Group",
            },
            {
                year: "2023",
                position: "Frontend Developer Intern",
                company: "Orro Group",
            },
            {
                year: "2023",
                position: "BS Information Technology",
                company: "La Consolacion University",
                honor: "Cum Laude",
            },
            {
                year: "2020",
                position: "Hello World!",
                company: "",
            },
        ] satisfies TimelineItem[],
    },
    experience: {
        title: "Experience",
        items: [
            {
                role: "Full-Stack Developer",
                fnName: "FullStackDeveloper",
                company: "Orro Group",
                period: "Mar 2023 — Present",
                highlights: [
                    "Develop and maintain a large-scale enterprise platform for monitoring, ticketing, and workflow automation using Laravel, JavaScript/jQuery, MySQL, and Bootstrap",
                    "Lead integrations with external systems (Jira, ServiceNow, Freshservice), collaborating directly with client engineers to deliver reliable, real-time data synchronization",
                    "Build AI-powered features using Azure OpenAI to enhance automation and improve internal operational efficiency",
                    "Design and implement network automation solutions (device backups, remote command execution, monitoring) using SSH and REST APIs",
                    "Create event-driven automation workflows that reduce manual intervention and significantly improve incident response times",
                    "Consistently deliver bug fixes, performance optimizations, and UX improvements, contributing to system stability and scalability",
                ],
            },
            {
                role: "Developer Intern",
                fnName: "DeveloperIntern",
                company: "Orro Group",
                period: "Mar 2023 — Jun 2023",
                highlights: [
                    "Supported development of a CRM system across frontend and backend",
                    "Fixed bugs and assisted in feature enhancements, improving system stability",
                    "Worked closely with senior developers, gaining hands-on experience in production workflows",
                ],
            },
        ] satisfies ExperienceItem[],
    },
    projects: {
        homeTitle: "Recent Projects",
        pageTitle: "All Projects",
        items: [
            {
                name: "Developer Portfolio",
                description:
                    "Resume-style developer portfolio with Google Gemini AI Chatbot Integration",
                url: "deuxlim.vercel.app",
            },
            {
                name: "Messenger Clone",
                description: "Real-time messaging platform",
                url: "messenger-meta-clone.vercel.app",
            },
            {
                name: "MILE 365 Run Club",
                description: "Run club membership system & dashboard",
                url: "mile365-runclub-landing.vercel.app",
            },
            {
                name: "Profile and Resume Platform",
                description: "Portfolio and resume builder with version control",
                url: "profile-dev365.vercel.app",
            },
            {
                name: "VaultPass",
                description: "Secure password manager",
            },
        ] satisfies PortfolioProject[],
    },
    techStack: {
        title: "Tech Stack",
        sections: [
            {
                name: "Frontend",
                items: [
                    {
                        name: "JavaScript",
                        iconKey: "javascript",
                        iconClassName: "text-lg sm:text-xl text-yellow-300",
                    },
                    {
                        name: "TypeScript",
                        iconKey: "typescript",
                        iconClassName: "text-lg sm:text-xl text-blue-500",
                    },
                    {
                        name: "React",
                        iconKey: "react",
                        iconClassName: "text-lg sm:text-xl text-cyan-400",
                    },
                    {
                        name: "JQuery",
                        iconKey: "jquery",
                        iconClassName: "text-lg sm:text-xl text-blue-600",
                    },
                    {
                        name: "TailwindCSS",
                        iconKey: "tailwindcss",
                        iconClassName: "text-lg sm:text-xl text-blue-400",
                    },
                    {
                        name: "HTML",
                        iconKey: "html",
                        iconClassName: "text-lg sm:text-xl text-orange-400",
                    },
                    {
                        name: "CSS",
                        iconKey: "css",
                        iconClassName: "text-lg sm:text-xl text-blue-600",
                    },
                ],
            },
            {
                name: "Backend",
                items: [
                    {
                        name: "PHP",
                        iconKey: "php",
                        iconClassName: "text-xl sm:text-2xl text-blue-600",
                    },
                    {
                        name: "Node",
                        iconKey: "nodejs",
                        iconClassName: "text-xl sm:text-2xl text-green-600",
                    },
                    {
                        name: "Laravel",
                        iconKey: "laravel",
                        iconClassName: "text-xl sm:text-2xl text-red-500",
                    },
                    {
                        name: "Express",
                        iconKey: "express",
                        iconClassName: "text-xl sm:text-2xl",
                    },
                    {
                        name: "MySQL",
                        iconKey: "mysql",
                        iconClassName: "text-xl sm:text-2xl text-cyan-600",
                    },
                    {
                        name: "MongoDB",
                        iconKey: "mongodb",
                        iconClassName: "text-xl sm:text-2xl text-green-600",
                    },
                ],
            },
            {
                name: "Others",
                items: [
                    {
                        name: "Git",
                        iconKey: "git",
                        iconClassName: "text-lg sm:text-xl text-red-500",
                    },
                    {
                        name: "VS Code",
                        iconKey: "vscode",
                        iconClassName: "text-lg sm:text-xl text-blue-500",
                    },
                    {
                        name: "Github",
                        iconKey: "github",
                        iconClassName: "text-lg sm:text-xl",
                    },
                    {
                        name: "Gitlab",
                        iconKey: "gitlab",
                        iconClassName: "text-lg sm:text-xl text-orange-600",
                    },
                    {
                        name: "Docker",
                        iconKey: "docker",
                        iconClassName: "text-lg sm:text-xl text-blue-400",
                    },
                    {
                        name: "Claude code",
                        iconKey: "claude",
                        iconClassName: "text-lg sm:text-xl text-orange-400",
                    },
                    {
                        name: "OpenAI Codex",
                        iconKey: "openai",
                        iconClassName: "text-lg sm:text-xl",
                    },
                    {
                        name: "Postman",
                        iconKey: "postman",
                        iconClassName: "text-lg sm:text-xl text-orange-400",
                    },
                ],
            },
        ] satisfies TechStackSection[],
    },
    heatmap: {
        title: "Daily Coding Heat Map",
        username: "deuxlim",
        monthsToShow: 6,
    },
    footer: {
        text: "© 2026 Deux Lim. All rights reserved.",
    },
    chat: {
        botName: "Deux Lim",
        floatingPreview: "Hi, Let's chat!",
        introGreeting: "Hi 👋 I’m Deux",
        introLine:
            "I build web apps using Laravel and React.",
        introDescription:
            "Feel free to ask me anything about my work, how I build things, or what I’ve been working on lately.",
        introPrompt: "Try asking:",
        introQuestions: [
            "What projects have you built?",
            "What’s your tech stack?",
            "How do you debug issues?",
        ],
        introClose: "Or just say hi 🙂",
        inputPlaceholder: "Aa",
        thinkingWords: [
            "Thinking",
            "Discombobulating",
            "Pondering",
            "Calculating",
            "Brewing",
            "Conjuring",
            "Vibing",
            "Contemplating",
            "Caffeinating",
            "Synthesizing",
            "Let me cook",
        ],
    },
} as const;
