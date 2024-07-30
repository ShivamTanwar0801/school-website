import {
  classroom,
  computerLab,
  cultural,
  gym,
  library,
  science,
  sportsday,
} from "../assets";

export const navigation = [
  { id: "0", title: "About us", url: "#about-us" },
  { id: "1", title: "Academics", url: "#academics" },
  { id: "2", title: "Admissions", url: "#admissions" },
  { id: "3", title: "Faculty", url: "#faculty" },
  { id: "4", title: "Students", url: "#students" },
  { id: "5", title: "Gallery", url: "#gallery" },
  { id: "6", title: "Contact us", url: "/contact", onlyMobile: true },
];

export const school_info = {
  name: "Springdale Public School",
  introduction:
    "Welcome to Springdale Public School, where we nurture young minds for a brighter future.",
  highlights: [
    "Annual Sports Day - Celebrating Excellence in Sports",
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity",
  ],
};

export const carousel = [
  {
    id: "0",
    title: "Annual Sports Day",
    text: "Our students showcase their skills in a variety of sports, from track and field events to team games.",
    image: sportsday,
  },
  {
    id: "1",
    title: "Science Exhibition",
    text: "Experience the wonders of science and technology at our annual Science Exhibition. Our budding scientists present innovative projects and experiments.",
    image: science,
  },
  {
    id: "2",
    title: "Cultural Fest",
    text: "This vibrant event brings together students, parents, and staff to showcase a diverse array of performances, from traditional dances to contemporary art forms.",
    image: cultural,
  },
];

export const stats = [
  { id: "0", title: "35+", text: "Years of Educational Excellence" },
  { id: "1", title: "300+", text: "Smart Classrooms" },
  { id: "2", title: "50+", text: "Sports Facilities" },
  { id: "3", title: "10+", text: "Clubs and Societies" },
];

export const about = [
  {
    id: "0",
    title: "Our Mission",
    info: "Our mission at Springdale Public School is to empower students with the knowledge, skills, and values they need to thrive in a rapidly evolving world. We are committed to providing a supportive and enriching environment that fosters academic excellence, critical thinking, and ethical behavior.",
  },
  {
    id: "1",
    title: "Our Vision",
    info: "Our vision is to create a dynamic learning community where students are inspired to explore, innovate, and excel. We envision a school where every student is encouraged to reach their full potential, both academically and personally. We strive to cultivate future leaders who are compassionate & confident.",
  },
  {
    id: "2",
    title: "Principal's Message",
    info: "Welcome to Springdale Public School. As the Principal, I am deeply honored to lead a dedicated team that is committed to unlocking the full potential of every student. Our mission is to foster a dynamic learning environment where curiosity is not only encouraged but celebrated, creativity is nurtured, and academic excellence is pursued with enthusiasm and dedication. We are steadfast in our belief that education is a journey that extends beyond the classroom; it is about equipping our students with the essential skills, knowledge, and confidence they need to excel in all aspects of life.                                     Together with our passionate faculty, supportive parents, and engaged students, we are focused on creating a school culture that inspires a love of learning and a commitment to personal growth. We strive to provide opportunities that challenge our students and empower them to become thoughtful, innovative leaders who can contribute positively to society.",
  },
];

export const infrastructure = [
  {
    id: "0",
    title: "State-of-the-art science and computer labs",
    image: computerLab,
  },
  {
    id: "1",
    title: "Spacious and well-equipped classrooms",
    image: classroom,
  },
  {
    id: "2",
    title: "Library with a vast collection of books and digital resources",
    image: library,
  },
  {
    id: "3",
    title:
      "Sports facilities including a playground, gymnasium, and swimming pool",
    image: gym,
  },
];

export const curriculum = [
  {
    id: "0",
    grade: "Primary (Grades 1-5)",
    subjects:
      "English, Mathematics, Science, Social Studies, Art, Physical Education",
  },
  {
    id: "1",
    grade: "Secondary (Grades 6-10)",
    subjects:
      "English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art",
  },
  {
    id: "2",
    grade: "Senior Secondary (Grades 11-12)",
    stream: "Science Stream",
    subjects:
      "Physics, Chemistry, Biology, Mathematics, Computer Science, English",
  },
  {
    id: "3",
    grade: "Senior Secondary (Grades 11-12)",
    stream: "Commerce Stream",
    subjects: "Accountancy, Business Studies, Economics, Mathematics, English",
  },
];

export const important_dates = [
  { id: "0", title: "Admission Form Availability", date: "March 1st" },
  { id: "1", title: "Last Date for Submission", date: "March 31st" },
  { id: "2", title: "Entrance Test", date: "April 15th" },
  { id: "3", title: "Announcement of Results", date: " April 30th" },
];

export const profiles = [
  {
    id: "0",
    name: "John Doe",
    position: "Principal",
    education: "M.Ed",
    experience: "20 years of experience in educational administration.",
  },
  {
    id: "1",
    name: "Jane Smith",
    position: "Vice Principal",
    education: "M.Sc. in Physics",
    experience: "15 years of teaching experience.",
  },
  {
    id: "2",
    name: "Emily Johnson",
    position: "English Teacher",
    education: "M.A. in English",
    experience: "10 years of teaching experience.",
  },
  {
    id: "3",
    name: "Michael Brown",
    position: "Mathematics Teacher",
    education: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience.",
  },
  {
    id: "4",
    name: "Sophia Davis",
    position: "Science Teacher",
    education: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience.",
  },
  {
    id: "5",
    name: "David Wilson",
    position: "Computer Science Teacher",
    education: "B.Tech in Computer Science",
    experience: "5 years of teaching experience.",
  },
];
