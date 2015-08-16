
module.exports = function () {
  return {
    path: '/',
    projectsGroups: [
      {
        location: "Eyereturn Marketing",
        projects: [
          {
            title: "Campaign Analytics",
            images: [
              {
                src: 'er_dashboard.jpg',
                height: '139px'
              }, 
              {
                src: 'er_dashboard_dark.jpg',
                height: '149px'
              }, 
              {
                src: 'er_performance.jpg',
                height: '172px'
              }
            ],
            role: "Lead Front-End Developer",
            description: "A reporting and analytics platform used to analyze various aspects of online advertising campaigns, such as general performance, conversions, viewability, and fraud. \
                          <br/><br/>\
                          Includes various report types, each with specialized visualizations and presentation methods, such as graphs, maps, and tables. As well, it includes the ability to schedule, and download xlsx copies of the reports. \
                          Reports also allow selecting from large lists of potential filters, groupings, and columns to build out the report tables; the selection of which also affects available graphs and maps. These selections can be saved as \"views\" for future use. \
                          <br/><br/>\
                          Allows internationalization (all non-data text is built with i18n), and white-labeling (themes/branding)."
          },
          {
            title: "Accounts",
            images: [],
            role: "Lead Front-End Developer",
            description: "An application for managing, editing, and creating accounts for Eyereturn applications."
          },
          {
            title: "Eyereturn UI",
            images: [],
            role: "Creator / Developer",
            description: "A general-purpose UI/UX and Javascript library to help standardize the look and feel of new applications company-wide."
          }
        ]
      },
      {
        location: "Jugnoo, Inc.",
        projects: [
          {
            title: "Jugnoo Visualizer",
            images: [
              {
                src: 'visualizer_a.png',
                height: '132px'
              }, 
              {
                src: 'visualizer_b.png',
                height: '132px'
              }
            ],
            role: "Lead Developer / Component Owner",
            description: "A novel tool for viewing related tweets (or messages from other social platforms) \
                          in ways different than your standard stream. Contains several scenes, which organize \
                          the messages and icons in unique ways. Includes fluid animations, dynamic formations, \
                          and highly is responsive to interaction and screen-sizing."
          },
          {
            title: "JPost (Messaging)",
            images: [
              {
                src: 'jpost.png',
                height: '153px'
              }
            ],
            role: "Lead Developer",
            description: "A cross-application tool for posting messages to social networks. Users write \
                          a message, select their accounts on various apps, and send the message through to all accounts. \
                          Advanced functionality includes scheduling the message, privacy settings, and attaching files."
          },
          {
            title: "Social Dashboard",
            images: [
              {
                src: 'dashboard.png',
                height: '172px'
              }
            ],
            role: "Developer",
            description: "An application for managing, viewing, and interacting with content gathered from a user's \
                         (or their organization's) social media accounts' streams (as well as RSS). \
                         Supports Facebook, Instagram, Twitter, LinkedIn, Google Plus (read only), Youtube, Weibo, and RSS."
          }

        ]
      },
      {
        location: "Home (Personal Projects)",
        projects: [
          {
            title: "Rolling Hills (3D Music Visualizer)",
            images: [
              {
                src: 'rollinghills.jpg',
                height: '140px'
              }
            ],
            role: "Sole Developer",
            description: "An interactive, 3d music visualizer, built from the ground up using C++, OpenGL, \
                          GLUT, FMod (for sound/music), and Boost Threads (for crossplatform multithreading). \
                          The user loads up an mp3, and the app renders a 3d time-by-frequency-by-amplitude visualization, \
                          during which the user can control both the camera, and a set of factors that determine how \
                          the waves look. This application runs on Windows and Mac OSX. It was developed as a school project \
                          for a course on Multimedia Systems. \
                          <a href=\"https://www.youtube.com/watch?v=GGfd213k4qQ\" target=\"_blank\">  \
                              A video demonstration is available on Youtube</a>."
          },
          {
            title: "The Correlation Corroborator",
            images: [
              {
                src: 'oldCC.png',
                height: '248px'
              }
            ],
            role: "Sole Developer",
            description: "My first taste of Ruby on Rails. This implements a simple information extractor/crawler; \
                          given a wikipedia category and list of keywords, the app fetches the category's page from Wikipedia \
                          collects the links associated with it (only the \"Pages in\" section, not unrelated pages), \
                          and accesses as many as possible within a time limit, attempting to find what percentage of \
                          the pages contain the keywords provided. Various constraints were included to prevent the app from \
                          running too frequently, or accessing Wikipedia's servers too many times (to avoid wasting Wikipedia's resources)."
          }

        ]
      }
      
    ]
  }
}
