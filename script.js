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
        projectsTitle.style.display = "block"; // Show "עבודות נבחרות"
        profileSection.style.display = "block"; // Show profile section
        heroTitle.textContent = originalHeroTitle; // Restore original hero title
        projectFrame.src = ""; // Reset iframe source

        // Reset download button to index.html
        downloadLink.setAttribute("href", defaultDownloadHref);
        downloadLink.setAttribute("download", "index.html");

        // Restore the correct display style based on screen width
        if (window.innerWidth > 768) {
            projectsContainer.style.display = "grid"; // Large screens use grid
        } else {
            projectsContainer.style.display = "flex"; // Small screens use flex-wrap
            projectsContainer.style.flexWrap = "wrap";
            projectsContainer.style.alignItems = "center";
            projectsContainer.style.justifyContent = "center"; // Ensure items are centered
        }

        // Scroll back to the projects section smoothly
        document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Ensure the project container is correctly displayed when resizing the window
    window.addEventListener("resize", function () {
        if (projectFrame.style.display === "none") {
            if (window.innerWidth > 768) {
                projectsContainer.style.display = "grid";
            } else {
                projectsContainer.style.display = "flex";
                projectsContainer.style.flexWrap = "wrap";
                projectsContainer.style.alignItems = "center";
                projectsContainer.style.justifyContent = "center";
            }
        }
    });
});

// פונקציונליות חלון המודל – טקסט בעברית
document.addEventListener('DOMContentLoaded', function() {
    // אובייקט פרטי המשחקים בעברית
    const gameDetails = {
        'hangman': {
            title: 'איש תלוי',
            description: 'משחק ניחוש מילים קלאסי שבו עליכם לנחש את המילה הנעלמת לפני שההנגמן מושלם. בדקו את אוצר המילים וכישורי ההסקה שלכם!',
            image: 'assets/games/hangman.png',
            github: 'https://github.com/osherb12/hangman',
            download: 'games/hangman.html',
            play: 'games/hangman.html'
        },
        'minesweeper': {
            title: 'שולה המוקשים',
            description: 'משחק פאזל אסטרטגי שבו עליכם לנקות לוח המכיל מוקשים מוסתרים מבלי לגרום לפיצוץ, בהתבסס על רמזים לגבי מספר המוקשים השכנים.',
            image: 'assets/games/minesweeper.png',
            github: 'https://github.com/osherb12/minesweeper',
            download: 'games/minesweeper.html',
            play: 'games/minesweeper.html'
        },
        'snake': {
            title: 'סנייק',
            description: 'שלוטו בנחש שאוכל מזון וגדל, אך היזהרו לא לפגוע בקירות או בזנב שלכם! ארקייד קלאסי המאתגר את הרפלקסים.',
            image: 'assets/games/snake.png',
            github: 'https://github.com/osherb12/snake',
            download: 'games/snake.html',
            play: 'games/snake.html'
        },
        'sudoku': {
            title: 'סודוקו',
            description: 'מלאו לוח 9×9 במספרים כך שכל שורה, כל עמודה, וכל תת-רשת 3×3 יכילו את כל הספרות 1–9.',
            image: 'assets/games/sodoku.png',
            github: 'https://github.com/osherb12/sudoku',
            download: 'games/sodoku.html',
            play: 'games/sodoku.html'
        },
        'tic-tac-toe': {
            title: 'איקס-עיגול',
            description: 'משחק איקס-עיגול קלאסי שבו עליכם ליישר שלוש מהסימנים שלכם בשורה (אופקית, אנכית או אלכסונית) כדי לנצח.',
            image: 'assets/games/tic-tac-toe.png',
            github: 'https://github.com/osherb12/tic-tac-toe',
            download: 'games/tic-tac-toe.html',
            play: 'games/tic-tac-toe.html'
        },
        'trivia': {
            title: 'טריוויה',
            description: 'בדקו את הידע שלכם עם שאלות ממגוון קטגוריות. כמה שאלות תענו נכון?',
            image: 'assets/games/trivia.png',
            github: 'https://github.com/osherb12/trivia',
            download: 'games/trivia.html',
            play: 'games/trivia.html'
        }
    };

    // שאר הקוד נשאר כפי שהיה
    const modalOverlay = document.getElementById('game-modal-overlay');
    const modal = document.getElementById('game-modal');
    const modalTitle = document.getElementById('modal-game-title');
    const modalImg = document.getElementById('modal-game-img');
    const modalDesc = document.getElementById('modal-game-description');
    const modalGithub = document.getElementById('modal-github-link');
    const modalDownload = document.getElementById('modal-download-link');
    const modalPlay = document.getElementById('modal-play-link');
    const closeModal = document.querySelector('.close-modal');

    document.querySelectorAll('.game-modal-btn').forEach(button => {
        button.addEventListener('click', function() {
            const game = this.getAttribute('data-game');
            const details = gameDetails[game];
            if (details) {
                modalTitle.textContent = details.title;
                modalImg.src = details.image;
                modalImg.alt = details.title;
                modalDesc.textContent = details.description;
                modalGithub.href = details.github;
                modalDownload.href = details.download;
                modalPlay.href = details.play;
                modalOverlay.style.display = 'flex';
            }
        });
    });

    closeModal.addEventListener('click', () => modalOverlay.style.display = 'none');
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) modalOverlay.style.display = 'none';
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            modalOverlay.style.display = 'none';
        }
    });
});
