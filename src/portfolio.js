
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Adil Shaik",
  title: "Hi all, I'm Adil",
  subTitle: emoji("A passionate Software Developer 🚀 from India 🇮🇳 living in Sweden 🇸🇪"),
  resumeLink: "https://drive.google.com/file/d/1UWJFYzgiyKlRUteS7uORvHymXE0HPz-J/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/shaikadil95?tab=repositories",
  linkedin: "https://www.linkedin.com/in/adil-shaik-904148111/",
  gmail: "shaikadil950@gmail.com",
  facebook: "https://www.facebook.com/adil.shaik/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "SOFTWARE DEVELOPMENT AND DEVOPS WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Software applications"),
    emoji("⚡ DevOps integration"),
    emoji("⚡ Works with Cloud Technologies like AWS, AZURE, OpenStack")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Blekinge Institute of Technology",
      logo: require("./assets/images/bth.jpg"),
      subHeader: "Master of Science in Telecommunication Systems",
      duration: "January 2017 - September 2018",
      desc: "Participated in the research of Design and implementation of an AI-based Face Recognition model in Docker Container on IoT Platform and published Master Thesis paper.",
      descBullets: [
        "http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1457000&dswid=4075",
      ]
    },
    {
      schoolName: "University College of Engineering JNTU Kakinada",
      logo: require("./assets/images/jntuk.png"),
      subHeader: "Bachelor of Science in Electronics Communication Engineering",
      desc: "Ranked top 10% in the program. Took courses about Wireless Networking, Programming, Signal Processing, Operating Systems",
      descBullets: [
        "https://www.jntuk.edu.in/",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Ericsson",
      companylogo: require("./assets/images/ericsson.jpg"),
      //date: "June 2018 – Present",
      desc: "Helping to shape a world of communications with 5G",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      role: "DevOps Engineer",
      company: "Cybercom",
      companylogo: require("./assets/images/cybercom.png"),
      //date: "May 2017 – May 2018",
      desc: "Provided highly available and efficient Infrastructure as a service platform to the external customers"
    },
    {
      role: "Software Developer Intern",
      company: "Ericsson",
      companylogo: require("./assets/images/ericsson.jpg"),
      //date: "Jan 2015 – Sep 2015",
      desc: "Developed many Innovotive Proof-of-concepts projects and presented to Ericsson customer AT&T"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "shaikadil95", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/screen.png"),
      link: "https://www.kickstarter.com/projects/screentimebike/screentimebike/posts/2782812"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "Participated in Google Code Challenge",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
      ]

      
    },
    {
      title: "Kubernetes",
      subtitle: "Kubernetes Certified Application Developer",
      image: require("./assets/images/k8s.png"),
      footerLink: [
        { name: "Certification", url: "" },
      ]
    },

    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
      ]

    }
  
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "COMMING SOON!",

  blogs: [
    {
      url: "",
      title: "Black Friday is coming..",
      description: "Oh Yeah, Black Friday is coming..Check back here I have a surprise deal for you ;)"
    },
    {
      url: "",
      title: "Cyber Monday is coming..",
      description: "Oh Yeah, Cyber Monday is coming..Check back here I have a surprise deal for you ;)"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("COMMING SOON!"),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("HandPicked EDMs 🎶🎙️"),
  subtitle: "My Fav EDMs",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "just want to say hi? My Inbox is open for all.",
  number: "+91-9000074244",
  email_address: "shaikadil95@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "shaikadil95"//Replace "twitter" with your twitter username without @

};
//export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects,contactInfo};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};