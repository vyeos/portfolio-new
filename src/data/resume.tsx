import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rudra Patel",
  initials: "RP",
  url: "https://www.rudarp.vercel.app",
  location: "Ahmedabad, Gujarat",
  locationLink: "",
  description:
    "Just a guy trying to make awesome and performant software. (I user neovim btw)",
  summary:
    "Full-stack developer with a strong focus on performance, user and developer experience, and clean system design. I enjoy turning ideas into scalable products using modern web technologies.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tanstack",
    "TailwindCSS",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rudranpatel0980@gmail.com",
    tel: "+91 9725385222",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/rudra-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/rudra-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/rudra-x",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      Email: {
        name: "Send Email",
        url: "mailto:rudranpatel0980@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
  ],
  education: [
    {
      school: "Adani University",
      href: "https://www.adaniuni.ac.in/",
      degree:
        "Bachelor's Degree in Computer Science with a specialization in AI/ML",
      logoUrl: "/adaniuni.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Zendra PDF",
      href: "https://zendrapdf.vercel.app",
      dates: "Sept 2025 - Nov 2025",
      active: true,
      description:
        "Built a full-stack platform that transforms the traditionally tedious PDF-generation workflow into a one-click automated process. Integrates authentication, storage, and AI-powered document generation to provide a seamless user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "Better Auth",
        "PostgreSQL",
        "Supabase",
        "Drizzle",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "Pinecone",
        "Langchain",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://zendrapdf.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/zendra.mp4",
    },
    {
      title: "ASPDC Website",
      href: "https://aspdc.vercel.app",
      dates: "Aug 2025 - Sept 2025",
      active: true,
      description:
        "Designed and developed a modern, visually appealing website for our university’s programming club — ASPDC. Focused on performance, clean transitions, and a content-driven experience powered by Zenblog.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Shadcn",
        "Zenblog",
      ],
      links: [
        {
          type: "Website",
          href: "https://aspdc.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aspdc/aspdc-revamped",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "aspdc.mp4",
    },
    {
      title: "Askify",
      href: "https://askify-mocha.vercel.app",
      dates: "May 2025",
      active: true,
      description:
        "Created a fun conversational AI app offering three unique chatbot personalities: Indian Mom, Toxic Friend, and a neutral assistant. Built with a lightweight interface and powered by the Gemini API.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Gemini API"],
      links: [
        {
          type: "Website",
          href: "https://askify-mocha.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vyeos/askify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/askify.png",
      video: "",
    },
    {
      title: "Vibe-Zone",
      href: "https://vibe-zone-tan.vercel.app",
      dates: "Feb 2025 - March 2025",
      active: true,
      description:
        "Developed a real-time chat application using WebSockets. Designed for simplicity and responsiveness, enabling instant messaging with live updates across clients.",
      technologies: ["HTML/CSS", "Node.js", "Web Sockets"],
      links: [
        {
          type: "Website",
          href: "https://vibe-zone-tan.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vyeos/Vibe-Zone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/vibe-zone.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hackspire",
      dates: "April 25th - 26st, 2025",
      location: "ADANI University, Gandhinagar",
      description:
        "Built a unified travel-booking platform that allows users to book hotels and flights from a single interface, simplifying the search and comparison experience.",
      image: "/hackspire.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/aspdc/hack4hope-HackSpire2025",
        },
      ],
    },

    {
      title: "Ingenious 6.0 2025",
      dates: "March 23rd - 24th, 2025",
      location: "Ahmedabad University, Ahmedabad",
      description:
        "Developed a platform connecting farmers directly with consumers, removing intermediaries to provide better pricing, transparency, and access.",
      image: "",
      links: [],
    },
  ],
} as const;
