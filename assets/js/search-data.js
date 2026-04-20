// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Conference and workshop papers, grouped by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "All announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A short CV. Drop a PDF in assets/pdf/ if you want a download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A selection of research projects and open-source work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-started-my-phd-at-necstlab-politecnico-di-milano-under-the-supervision-of-prof-davide-conficconi",
          title: 'Started my PhD at NECSTLab, Politecnico di Milano, under the supervision of Prof....',
          description: "",
          section: "News",},{id: "news-our-paper-are-we-ready-to-enable-satellite-autonomy-through-on-board-image-registration-has-been-accepted-at-acm-sigmetrics-2026-️",
          title: 'Our paper Are We Ready to Enable Satellite Autonomy Through On-Board Image Registration?...',
          description: "",
          section: "News",},{id: "news-to-infinity-and-beyond-a-reconfigurable-architecture-for-space-vision-computing-has-been-accepted-at-the-ieee-fccm-2026-phd-forum",
          title: 'To Infinity and Beyond: A Reconfigurable Architecture for Space Vision Computing has been...',
          description: "",
          section: "News",},{id: "projects-fpga101-hls-on-fpgas",
          title: 'FPGA101 — HLS on FPGAs',
          description: "Teaching material for an HLS-to-PYNQ flow on the Ultra96.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_fpga101.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
