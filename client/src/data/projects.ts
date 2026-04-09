export type PortfolioProject = {
    name: string;
    description: string;
    url?: string;
};

export const portfolioProjects: PortfolioProject[] = [
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
];
