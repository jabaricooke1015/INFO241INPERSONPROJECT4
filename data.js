// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Jabari Cooke",        // TODO: Add your name
        title: "Mixed Method UX Researcher",      // TODO: Add your professional title
        email: "jabari.cooke@berkeley.edu", // TODO: Add your email
        location: "Bekrley, Californi",  // TODO: Add your location
        bio: " Hey ya'll. My name is Jabari Cooke. I'm Oringally from Chicago Illinois(South Side). I'm a tennis player in my free time and I will be working as a UX Reseacher in once graduating grad school." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Conducting User Interviews",   // TODO: Replace with your actual skills
        "Conducting Usabiltiy Test",  // TODO: Add more skills
        "Cross communcaiton with stake holders",
        "UX Design",
        "Presenting complex findings in a easy way to understand"   // TODO: Students should have at least 5 skills
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Youtube Shorts Usbaility Test",
            description: "The goal here was to conduct a usability test on the Youtube Shorts platform to identify pain points and areas for improvement. I conducted user interviews and usability tests with a diverse group of participants, analyzing their feedback to provide actionable recommendations for enhancing the user experience. Speically on the short form content creation process.",
            technologies: ["Youtube Shorts ", "Zoom"], // Array of technologies used
            completionDate: "2024-08-15",   // When you completed it
            featured: true,                   // Is this a featured project?
            category: "design"
        },
        {
            title: "Learning Management System Exploration Project", 
            description: "This is a internationl explroatory project that I conducted to understand the usability and effectiveness of various learning management systems (LMS) used in educational institutions. I evaluated multiple LMS platforms, gathering feedback from students and educators to identify strengths, weaknesses, and opportunities for improvement. The findings from this project will inform future recommendations for selecting and optimizing LMS solutions.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: false,
            category: "webapp"
        },
        {
            title: "UXR encryption project", 
            description: "This is a project that I conducted to explore the user sentiment on the security and encryption methods used in digital communication. ",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: false,
            category: "design"
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

const showOnly = "all";

// Let's explore our data structure in the console



console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

