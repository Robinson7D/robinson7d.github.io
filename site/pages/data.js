
module.exports = function () {
  return {
    path: '/',
    projectsGroups: [
      {
        location: "Jugnoo, Inc.",
        projects: [
          {
            title: "Jugnoo Visualizer",
            images: ['visualizer_a.png', 'visualizer_b.png'],
            role: "Lead Developer / Component Owner",
            description: "A novel tool for viewing related tweets (or messages from other social platforms) \
                          in ways different than your standard stream. Contains several scenes, which organize \
                          the messages and icons in unique ways. Includes fluid animations, dynamic formations, \
                          and highly is responsive to interaction and screen-sizing."
          },
          {
            title: "JPost (Messaging)",
            images: ['jpost.png'],
            role: "Lead Developer",
            description: "A cross-application tool for posting messages to social networks. Users write \
                          a message, select their accounts on various apps, and send the message through to all accounts. \
                          Advanced functionality includes scheduling the message, privacy settings, and attaching files."
          },
          {
            title: "Social Dashboard",
            images: ['dashboard.png'],
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
            images: ['rollinghills.jpg'],
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
            images: ['oldCC.png'],
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
