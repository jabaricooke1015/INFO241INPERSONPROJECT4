


let headerHTML = `
    <header>
        <h1>${portfolio.owner.name}</h1>
        <p class="tagline">${portfolio.owner.title}</p>
        <p class="location">📍 ${portfolio.owner.location}</p>
    </header>
`;
document.write(headerHTML);



let aboutHTML = `
    <section id="about">
        <h2>About Me</h2>
        <p>${portfolio.owner.bio}</p>
    </section>
`;
document.write(aboutHTML);



let skillsHTML = '<section id="skills"><h2>My Skills</h2><ul class="skills-list">';
for (let i = 0; i < portfolio.skills.length; i++) {
    skillsHTML = skillsHTML + `<li>${portfolio.skills[i]}</li>`;
}



skillsHTML = skillsHTML + '</ul></section>';
document.write(skillsHTML);







let projectsHTML = `
    <section id="projects">
        <h2>My Projects</h2>

         <!-- ADD THIS: Filter Buttons -->
        <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">All Projects</button>
            <button class="filter-btn" data-filter="frontend">Frontend</button>
            <button class="filter-btn" data-filter="fullstack">Full-Stack</button>
            <button class="filter-btn" data-filter="design">Design</button>
            <button class="filter-btn" data-filter="webapp">Web App</button>
        </div>

        <div class="projects-grid">
`;
for (let i = 0; i < portfolio.projects.length; i++) {
    let project = portfolio.projects[i];
    let techList = project.technologies.join(", ");
    
    projectsHTML = projectsHTML + `
        <article class="project-card" data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="tech">Technologies: ${techList}</p>
            <p class="date">Completed: ${project.completionDate}</p>
        </article>
    `;
}
projectsHTML = projectsHTML + '</div></section>';
document.write(projectsHTML);










