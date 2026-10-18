/**
 * Project content for the homepage cards and the /projects/[slug] pages.
 *
 * Everything here is based on the resume. There are no metrics on purpose.
 * If you have real results (accuracy, dataset size, etc.), add them to
 * `results` and they will appear on the project page. Add repository or demo
 * URLs to `links` and they will be shown automatically.
 */

export type VisualId = "sprayer-system" | "sprayer-detection" | "student-pipeline" | "career-flow";

export type ApproachStep = { title: string; body: string; tools?: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  categories: string[];
  summary: string;
  stack: string[];
  hardware?: string[];
  cardVisual: VisualId;
  pageVisuals: { id: VisualId; caption: string }[];
  overview: string;
  problem: string;
  objective: string;
  contribution: string[];
  approach: ApproachStep[];
  outcome: string;
  learnings: string[];
  /** Real, verifiable results only. Leave empty if none. */
  results: { label: string; value: string }[];
  links: { github?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "pomegranate-smart-sprayer",
    index: "01",
    title: "Pomegranate Smart Sprayer",
    categories: ["Computer Vision", "Robotics", "Smart Agriculture"],
    summary:
      "An agricultural robot designed to detect plant diseases using computer vision and automate spraying.",
    stack: ["Python", "OpenCV", "TensorFlow Lite"],
    hardware: ["Raspberry Pi 4", "Arduino Uno", "Raspberry Pi Camera Module"],
    cardVisual: "sprayer-system",
    pageVisuals: [
      {
        id: "sprayer-system",
        caption:
          "System sketch: how the camera, Raspberry Pi 4 and Arduino Uno divide the work. Illustrative diagram, not a photo of the robot.",
      },
      {
        id: "sprayer-detection",
        caption:
          "Detection loop sketch: a frame from the camera is checked for diseased regions before spraying is triggered. Illustrative, not real model output.",
      },
    ],
    overview:
      "The Pomegranate Smart Sprayer is a smart agricultural robot that captures images of crops, identifies plant disease on the device, and performs spraying automatically. A Raspberry Pi 4 handles vision and decisions, and an Arduino Uno controls mobility, obstacle detection and the spraying mechanism.",
    problem:
      "Spotting disease on crops usually means someone inspecting plants by eye, row by row. That is slow, and it makes it hard to act on an individual plant rather than treating a whole area the same way.",
    objective:
      "Build a robot that can move along crops, photograph plants in real time, identify disease on the device itself, and trigger spraying automatically.",
    contribution: [
      "Developed a smart agricultural robot capable of detecting plant diseases and performing automated spraying.",
      "Integrated a Raspberry Pi 4 and an Arduino Uno to control mobility, obstacle detection and the spraying mechanisms.",
      "Captured real-time crop images with a Raspberry Pi Camera Module for on-device disease identification.",
      "Processed and classified images using Python, OpenCV and TensorFlow Lite.",
    ],
    approach: [
      {
        title: "Capture",
        body: "The Raspberry Pi Camera Module captures real-time images of the crop as the robot moves.",
        tools: "Raspberry Pi Camera Module",
      },
      {
        title: "Process",
        body: "Frames are processed in Python with OpenCV to prepare them for classification.",
        tools: "Python · OpenCV",
      },
      {
        title: "Classify",
        body: "A TensorFlow Lite model runs on the Raspberry Pi 4 to identify disease directly on the device.",
        tools: "TensorFlow Lite · Raspberry Pi 4",
      },
      {
        title: "Act",
        body: "The Arduino Uno controls the robot’s mobility, obstacle detection and spraying mechanism, so spraying happens automatically when disease is detected.",
        tools: "Arduino Uno",
      },
    ],
    outcome:
      "A robot capable of detecting plant disease and performing automated spraying, with the whole loop from camera to sprayer running on board.",
    learnings: [
      "Splitting responsibilities across two boards: vision and decisions on the Raspberry Pi, real-time control of motors, sensors and the sprayer on the Arduino.",
      "Running a model on edge hardware with TensorFlow Lite instead of relying on a server.",
      "Working with real crop images, where lighting, angle and background change from frame to frame.",
    ],
    results: [],
    links: {},
  },
  {
    slug: "student-performance-prediction",
    index: "02",
    title: "Student Performance Prediction System",
    categories: ["Machine Learning", "Data Science", "Backend Development"],
    summary:
      "A Python-based application that predicts student academic performance using historical student data.",
    stack: ["Python", "Django REST Framework", "Scikit-learn", "Pandas", "SQL"],
    cardVisual: "student-pipeline",
    pageVisuals: [
      {
        id: "student-pipeline",
        caption:
          "Pipeline sketch: from stored student records to a prediction returned by the API. Illustrative diagram, not a screenshot.",
      },
    ],
    overview:
      "A Python application that uses machine learning and historical student data to predict academic performance. A Scikit-learn model is served through Django REST Framework APIs, and student records and prediction results are stored in a SQL database.",
    problem:
      "Students who are struggling are often only identified once results are published, which leaves less time to help them.",
    objective:
      "Use historical student data to predict academic performance, and make those predictions available through an API that can store and return results.",
    contribution: [
      "Performed data preprocessing and feature selection with Pandas.",
      "Trained and evaluated machine learning models with Scikit-learn.",
      "Built REST APIs with Django REST Framework to process student information and return prediction results.",
      "Integrated a SQL database for storing and retrieving student records and prediction results.",
    ],
    approach: [
      {
        title: "Prepare the data",
        body: "Historical student data is cleaned and preprocessed with Pandas.",
        tools: "Pandas",
      },
      {
        title: "Select features",
        body: "Feature selection narrows the data down to the inputs the model is trained on.",
        tools: "Pandas · Scikit-learn",
      },
      {
        title: "Train and evaluate",
        body: "Machine learning models are trained and evaluated with Scikit-learn.",
        tools: "Scikit-learn",
      },
      {
        title: "Serve predictions",
        body: "Django REST Framework endpoints accept student information and return prediction results.",
        tools: "Django REST Framework",
      },
      {
        title: "Store results",
        body: "Student records and prediction results are stored in and retrieved from a SQL database.",
        tools: "SQL",
      },
    ],
    outcome:
      "An end-to-end application that goes from historical student records to predictions available over a REST API, with inputs and results stored in SQL.",
    learnings: [
      "How much preprocessing and feature selection shape what a model can learn.",
      "Designing an API around a model: what a request needs to contain and what a response should return.",
      "Keeping predictions alongside the records they were made from so they can be retrieved later.",
    ],
    results: [],
    links: {},
  },
  {
    slug: "career-guidance-system",
    index: "03",
    title: "Career Guidance System",
    categories: ["Full-Stack Development", "Career Recommendations"],
    summary:
      "A web application that helps users explore suitable career paths through a personalised assessment of their interests and skills.",
    stack: ["HTML", "CSS", "JavaScript", "Django"],
    cardVisual: "career-flow",
    pageVisuals: [
      {
        id: "career-flow",
        caption:
          "Flow sketch: assessment, then backend processing, then recommended career paths. Wireframe illustration, not a screenshot of the application.",
      },
    ],
    overview:
      "A full-stack web application where users take an assessment of their interests and skills, and a Django backend processes their answers to recommend personalised career paths.",
    problem:
      "Choosing a career direction is hard without a structured way to connect your interests and skills to specific paths.",
    objective:
      "Build a full-stack application that turns a career assessment into personalised career path recommendations.",
    contribution: [
      "Built a full-stack Career Guidance System using Django, HTML, CSS and JavaScript.",
      "Designed a user-friendly interface for a career assessment quiz that evaluates users’ interests and skills.",
      "Implemented a backend to process user data and recommend personalised career paths.",
      "Applied web development, database management and UI/UX design practices throughout the project.",
    ],
    approach: [
      {
        title: "Assessment interface",
        body: "A quiz built with HTML, CSS and JavaScript asks users about their interests and skills.",
        tools: "HTML · CSS · JavaScript",
      },
      {
        title: "Backend processing",
        body: "Answers are sent to a Django backend, which processes the user data.",
        tools: "Django",
      },
      {
        title: "Recommendations",
        body: "The backend returns personalised career paths based on the assessment.",
        tools: "Django",
      },
    ],
    outcome:
      "A complete web application covering the assessment interface, backend processing and personalised career recommendations.",
    learnings: [
      "Writing quiz questions and a flow that stay clear for someone who isn’t sure what they’re looking for.",
      "Connecting front-end interactions to Django views and data.",
      "Turning a set of answers into a recommendation through backend logic.",
    ],
    results: [],
    links: {},
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
