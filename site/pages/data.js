
module.exports = function () {
  return {
    path: '/',
    projectsGroups: [
      {
        location: "Hazel",
        projects: [
          {
            title: "Growth Plans (Learning)",
            images: [
              {
                src: 'hazel-gp-module-list.png',
                height: '199px'
              },
              {
                src: 'hazel-gp-module.png',
                height: '233px'
              }
            ],
            role: "Lead Front-End Developer",
            description: "A learning platform that contains manager-training courses, spanning many topics important to being an effective leader. \
                          <br/><br/>\
                          Each course is broken into modules; each module is based on one overarching lesson, and may also include articles, videos, and assignments to complete. \
                          A manager's progress is based on the number of modules and activities the manager has completed. \
                          <br/><br/>\
                          (Unlike my personal website) all aspects of Growth Plans are mobile-friendly, and tested on various iOS and Android devices - as is the case with the rest of the core Hazel product."
          },
          {
            title: "Analyze, Respond, Review",
            images: [
              {
                src: 'hazel-review-mfr.png',
                height: '235px'
              },
              {
                src: 'hazel-wci-analyze.png',
                height: '210px'
              },
            ],
            role: "Lead Front-End Developer",
            description: "Along with Growth Plans, the Hazel product includes surveys for gathering feedback from employees (one about their manager, and another about their own feelings). \
                          This feedback is then available, often anonymized, for review by their manager and admins. \
                          <br/><br/>\
                          The web-interface for gathering feedback (which lives alongside a Slack interface) is fully responsive to allow employees to quickly answer from their phone. \
                          <br/><br/>\
                          Questions asked are crafted to potentially relate to different skills; after its gathered and analyzed, managers are recommended Growth Plans related to the skills that they may wish to improve. \
                          Dashboards are also available for managers to track their own growth, and HR-admins to track trends and statistics."
          }
        ]
      },
      {
        location: "Rise (Previously Paysavvy)",
        projects: [
          {
            title: "Time Off",
            images: [
              {
                src: 'rise-time-off-policies.png',
                height: '153px'
              },
              {
                src: 'rise-time-off-request.png',
                height: '167px'
              }
            ],
            role: "Lead Front-End Developer",
            description: "A time off management tool. Allows admins to create fine-grained time off policies (e.g. for vacation, sick days, bereavement, or anything else they may wish to track), which employees are enrolled into, and issue requests against. \
                          <br/><br/>\
                          Includes a \"request calendar\" where employees go to request time (days, hours, or fractions thereof), and a \"review calendar\" where the employee's reviewers for the policy may approve or deny the requests.   \
                          <br/><br/>\
                          Various dashboards and reports are also available to analyze past time taken."
          },
          {
            title: "Hub",
            images: [
              {
                src: 'rise-employee-profile.png',
                height: '258px'
              },
              {
                src: 'rise-journey.png',
                height: '191px'
              },
            ],
            role: "Lead Front-End Developer",
            description: "An HRIS and more; integrated with several other applications both internal (such as Time Off, above) and external. \
                          <br/><br/>\
                          Includes many tools for managing each employees properties and associations. \
                          On each employee's profile, their \"Journey\" (progress, and general changes in their attributes & associations over time) \
                          can be viewed by fellow employees (different employees can see different things based on their relationship).\
                          <br/><br/>\
                          Other features included an organization profile, core values, document upload (per organization, and per employee), note-taking, onboarding templates, and reports based on the HRIS data."
          }
        ]
      },
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
