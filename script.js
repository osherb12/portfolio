document.addEventListener("DOMContentLoaded", function () {
    const projectButtons = document.querySelectorAll(".project-download-btn");
    const projectFrame = document.getElementById("project-frame");
    const backButton = document.getElementById("back-button");
    const projectsContainer = document.querySelector(".projects-container");
    const projectsTitle = document.querySelector(".projects-title"); // "עבודות נבחרות"
    const heroTitle = document.querySelector(".hero-title"); // Hero title
    const profileSection = document.getElementById("profile"); // Profile section
    const downloadLink = document.getElementById("download-project"); // The <a> element around the button
    const originalHeroTitle = heroTitle.textContent; // Store original title
    const defaultDownloadHref = "index.html"; // Default download file

    // Set default download href
    downloadLink.setAttribute("href", defaultDownloadHref);
    downloadLink.setAttribute("download", "index.html");

    projectButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectUrl = this.getAttribute("data-project");
            const projectName = this.closest(".project").querySelector(".project-title").textContent; // Get project name

            projectFrame.src = projectUrl;
            projectFrame.style.display = "block"; // Show iframe
            backButton.style.display = "block"; // Show back button
            projectsContainer.style.display = "none"; // Hide project list
            projectsTitle.style.display = "none"; // Hide "עבודות נבחרות"
            profileSection.style.display = "none"; // Hide profile section
            heroTitle.textContent = projectName; // Change hero title to project name

            // Change download button href to match the selected project
            downloadLink.setAttribute("href", projectUrl);
            downloadLink.setAttribute("download", projectUrl.split('/').pop());

            // Scroll so the project section is at the top
            document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    backButton.addEventListener("click", function () {
        projectFrame.style.display = "none"; // Hide iframe
        backButton.style.display = "none"; // Hide back button
        projectsContainer.style.display = "grid"; // Restore project list
        projectsTitle.style.display = "block"; // Show "עבודות נבחרות"
        profileSection.style.display = "block"; // Show profile section
        heroTitle.textContent = originalHeroTitle; // Restore original hero title
        projectFrame.src = ""; // Reset iframe source

        // Reset download button to index.html
        downloadLink.setAttribute("href", defaultDownloadHref);
        downloadLink.setAttribute("download", "index.html");

        // Scroll back to the projects section smoothly
        document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
