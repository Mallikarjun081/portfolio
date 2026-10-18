import profilePhoto from "../../public/images/profile-photo.jpg";

/**
 * Site-wide content. Edit this file to update profile details, links,
 * skills, education and certifications. Project content lives in
 * `projects.ts`.
 *
 * Leave a link as an empty string to hide it everywhere on the site.
 */

export const profile = {
  name: "Mallikarjun Deshmukh",
  role: "AI & ML Engineer",
  email: "mallikarjundeshmukh09@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/mallikarjun-deshmukh-71b404313/",
    // Add your GitHub profile URL here, e.g. "https://github.com/your-username"
    github: "",
  },
  resume: {
    href: "/mallikarjun-deshmukh-resume.pdf",
    fileName: "Mallikarjun-Deshmukh-Resume.pdf",
  },
  copyrightYear: 2026,
  photo: {
    src: profilePhoto,
    alt: "Mallikarjun Deshmukh in a red sweater, seated at an outdoor table beside a carved wooden pillar, looking down at a phone.",
  },
};

export const hero = {
  headline: "Building Intelligent Solutions with AI & Machine Learning",
  supporting:
    "I’m an aspiring AI/ML engineer passionate about building practical solutions using machine learning, computer vision, and full-stack development.",
};

export const about = {
  paragraphs: [
    "I studied Artificial Intelligence and Machine Learning at Global Academy of Technology, Bangalore. My projects put models inside working systems: a camera-equipped robot that detects plant disease, an API that serves student performance predictions, and a web app that recommends career paths.",
    "My hands-on work spans Python, machine learning, data processing and software development. I have a strong foundation in object-oriented programming, data structures and algorithms, SQL and REST APIs, and I’ve worked with Pandas, NumPy, Scikit-learn, Django, OpenCV and TensorFlow Lite.",
    "I’m especially interested in AI-driven automation and computational science, and I enjoy the problem-solving, teamwork and communication that building these systems involves.",
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Programming", items: ["Python", "Java", "C", "SQL"] },
  {
    title: "AI & Machine Learning",
    items: ["Pandas", "NumPy", "Scikit-learn", "OpenCV", "TensorFlow Lite"],
  },
  {
    title: "Web Development",
    items: ["Django", "REST APIs", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Power BI", "Tableau"],
  },
  {
    title: "Fundamentals",
    items: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "SDLC",
    ],
  },
];

export type EducationItem = {
  qualification: string;
  institution: string;
  period: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    qualification: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Global Academy of Technology, Bangalore",
    period: "2022–2026",
    score: "CGPA 7.2",
  },
  {
    qualification: "Pre-University Education",
    institution: "SBR PU College, Kalaburagi",
    period: "2020–2022",
    score: "83%",
  },
  {
    qualification: "Secondary School Education",
    institution: "SBR Public School, Kalaburagi",
    period: "2019–2020",
    score: "91.52%",
  },
];

export type Certification = { title: string; issuer: string };

export const certifications: Certification[] = [
  { title: "Artificial Intelligence Intern", issuer: "Edutainer" },
  { title: "Data Science", issuer: "IBM" },
  { title: "Cloud Computing", issuer: "Infosys" },
];

export const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
