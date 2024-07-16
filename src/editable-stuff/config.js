// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Selamat",
  middleName: "",
  lastName: "Datang",
  message: " Portofolio Web 2024 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Zxlauncher",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mrrpl_/",
    },
    {
      image: "fa-whatsapp",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Tentang Saya",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "Nama saya Marfael Chandika Prasetyo. Saya seorang front-end developer dan web designer dengan tujuan melanjutkan karir dan terus mengembangkan keterampilan saya. Saya memiliki passion dalam menciptakan antarmuka pengguna yang intuitif serta desain web yang estetis dan fungsional. Saya masih belajar banyak tentang pengembangan web dan desain grafis, serta terlibat dalam berbagai proyek yang mengasah kemampuan teknis dan kreativitas saya.",
  resume: "https://drive.google.com/file/d/1yyzlXv839i8XpiaNyaNzR1qrACczHW2g/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "zxlauncher",
  reposLength: 0,
  specificRepos: ["CvMarfael","DapurArsyila","belajar-nuxtjs","SmkCoding"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 1 },
    { name: "SQL", value: 10 },
    { name: "Data Structures", value: 30 },
    { name: "C/C++", value: 28 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 55 },
    { name: "HTML/CSS", value: 80 },
    { name: "LARAVEL", value: 36 },
  ],
  softSkills: [
    { name: "Berorientasi Pada Tujuan", value: 50 },
    { name: "kolaborasi", value: 45 },
    { name: "Positivity", value: 60 },
    { name: "Kemampuan Beradabtasi", value: 65 },
    { name: "Penyelesain Masalah", value: 37 },
    { name: "Empathy", value: 50 },
    { name: "Organisasi", value: 45 },
    { name: "Kreativitas", value: 48 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Berhubungan",
  message:
    "Saat ini saya sedang mencari lowongan penuh waktu di bidang Rekayasa Perangkat Lunak, Jika Anda mengetahui lowongan yang tersedia, jika Anda memiliki pertanyaan, Boleh mengirim pesan melalui email ke",
  email: "marfael2007@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
