/**
 * Project content for the homepage and the /projects/[slug] pages.
 *
 * Everything here comes from the resume. There are no metrics on purpose:
 * if you have real results (accuracy, dataset size and so on), add them to
 * `results` and they will appear on the project page. Add repository or demo
 * URLs to `links` and they will be shown automatically.
 */

export type VisualId = "sprayer-system" | "sprayer-detection" | "student-pipeline" | "career-flow";

export type Step = { title: string; body: string };

export type Project = {
  slug: string;
  title: string;
  /** One plain, sentence-case line describing the kind of project. */
  kind: string;
  summary: string;
  stack: string[];
  hardware?: string[];
  cardVisual: VisualId;
  pageVisuals: { id: VisualId; caption: string }[];
  /** A few short paragraphs: what it is, why it exists. */
  overview: string[];
  /** What Mallikarjun did, in his words. */
  built: string[];
  /** How the system works, in order. */
  steps: Step[];
  outcome: string;
  /** Real, verifiable results only. Leave empty if none. */
  results: { label: string; value: string }[];
  links: { github?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "pomegranate-smart-sprayer",
    title: "Pomegranate Smart Sprayer",
    kind: "Computer vision and robotics for smart agriculture",
    summary:
      "An agricultural robot designed to detect plant diseases using computer vision and automate spraying.",
    stack: ["Python", "OpenCV", "TensorFlow Lite"],
    hardware: ["Raspberry Pi 4", "Arduino Uno", "Raspberry Pi Camera Module"],
    cardVisual: "sprayer-system",
    pageVisuals: [
      {
        id: "sprayer-system",
        caption: "How the camera, Raspberry Pi 4 and Arduino Uno split the work. A diagram, not a photo of the robot.",
      },
      {
        id: "sprayer-detection",
        caption: "A sketch of the detection step: the camera frame is checked for diseased areas before spraying. Not real model output.",
      },
    ],
    overview: [
      "A robot that moves along pomegranate plants, photographs them with a Raspberry Pi camera and checks each image for signs of disease. When it finds disease, it sprays.",
      "The Raspberry Pi 4 runs the image processing and the TensorFlow Lite model. An Arduino Uno takes care of the parts that need real-time control: the motors, obstacle detection and the sprayer.",
      "Checking crops by eye is slow, and it makes it hard to treat one plant without spraying a whole area. Doing the detection on the robot means it can act on the plant in front of it.",
    ],
    built: [
      "Developed the robot to detect plant diseases and spray automatically.",
      "Connected a Raspberry Pi 4 and an Arduino Uno to control movement, obstacle detection and spraying.",
      "Captured real-time crop images with the Raspberry Pi Camera Module for on-device detection.",
      "Processed and classified the images with Python, OpenCV and TensorFlow Lite.",
    ],
    steps: [
      { title: "Capture", body: "The Pi Camera Module takes images of the crop as the robot moves." },
      { title: "Process", body: "Python and OpenCV prepare each frame for the model." },
      { title: "Classify", body: "A TensorFlow Lite model running on the Raspberry Pi 4 checks the image for disease." },
      { title: "Act", body: "The Arduino Uno drives the motors, watches for obstacles and triggers the sprayer." },
    ],
    outcome:
      "A robot that detects plant disease and sprays automatically, with the whole loop from camera to sprayer running on board.",
    results: [],
    links: {},
  },
  {
    slug: "student-performance-prediction",
    title: "Student Performance Prediction System",
    kind: "Machine learning and backend development",
    summary:
      "A Python-based application that predicts student academic performance using historical student data.",
    stack: ["Python", "Django REST Framework", "Scikit-learn", "Pandas", "SQL"],
    cardVisual: "student-pipeline",
    pageVisuals: [
      {
        id: "student-pipeline",
        caption: "From stored student records to a prediction returned by the API. A diagram, not a screenshot.",
      },
    ],
    overview: [
      "A Python application that predicts how a student is likely to perform academically, based on historical student data.",
      "The model is built with Pandas and Scikit-learn and served through Django REST Framework. Student records, and the predictions made for them, are stored in a SQL database.",
      "Students who are struggling are often only noticed once results come out. An earlier prediction leaves more time to help them.",
    ],
    built: [
      "Preprocessed the data and selected features with Pandas.",
      "Trained and evaluated machine learning models with Scikit-learn.",
      "Built REST APIs with Django REST Framework that take student information and return a prediction.",
      "Connected a SQL database to store and retrieve student records and prediction results.",
    ],
    steps: [
      { title: "Prepare the data", body: "Historical student data is cleaned and preprocessed with Pandas." },
      { title: "Select features", body: "Feature selection narrows the data down to the inputs the model learns from." },
      { title: "Train and evaluate", body: "Models are trained and evaluated with Scikit-learn." },
      { title: "Serve predictions", body: "Django REST Framework endpoints accept student information and return a prediction." },
      { title: "Store the results", body: "Records and predictions are saved to, and read from, a SQL database." },
    ],
    outcome:
      "An end-to-end application: historical records go in, and predictions come back over a REST API and are saved to SQL.",
    results: [],
    links: {},
  },
  {
    slug: "career-guidance-system",
    title: "Career Guidance System",
    kind: "Full-stack web development",
    summary:
      "A web application that helps users explore suitable career paths through a personalised assessment of their interests and skills.",
    stack: ["HTML", "CSS", "JavaScript", "Django"],
    cardVisual: "career-flow",
    pageVisuals: [
      {
        id: "career-flow",
        caption: "The flow from quiz to recommendations. A wireframe sketch, not a screenshot of the app.",
      },
    ],
    overview: [
      "A web app that helps people work out which careers might suit them. Users answer a quiz about their interests and skills, and the app suggests career paths.",
      "The front end is built with HTML, CSS and JavaScript. Django handles the answers, the data and the recommendations.",
    ],
    built: [
      "Built the full application with Django, HTML, CSS and JavaScript.",
      "Designed the career assessment quiz to be easy to follow.",
      "Wrote the backend that processes each user's answers and recommends career paths.",
      "Took care of the database and the interface design along the way.",
    ],
    steps: [
      { title: "Take the quiz", body: "The user answers questions about their interests and skills." },
      { title: "Process the answers", body: "Django receives the answers and processes the user's data." },
      { title: "Recommend paths", body: "The app returns career paths matched to that user." },
    ],
    outcome: "A complete web app, from the assessment through to personalised career recommendations.",
    results: [],
    links: {},
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
