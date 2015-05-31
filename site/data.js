module.exports = function () {
  return {
    title: 'DylanCodes',
    resumeJSON: getResumeJSON()
  };
};


function getResumeJSON(){
  return {
    sections: 
      [{
        "id": "skills",
        "title": "Technical Skills",
        "elements": [{
            "head": {
                "location": "Software Engineering"
            },
            "responsibilities": ["An understanding of multiple software development cycles", "Experience with various software architectures, including MVC, SOA, Event-Driven Development", "Ability to design, build, and optimize multithreaded applications", "Experience with GitHub / Gitlab, and a general understanding of distributed revision control systems"]
        }, {
            "head": {
                "location": "Programming"
            },
            "responsibilities": ["Proficient with Ruby, Javascript / Coffeescript, and C++ programming languages", "Experience with many programming languages, frameworks, protocols, and technologies, including, but not limited to, Ruby on Rails, C, VB, D3.JS, JQuery, Processing, Prolog, PHP, OAuth, XHTML, CSS, SQL, REDIS, MongoDB, and OpenGL"]
        }, {
            "head": {
                "location": "Computer Science"
            },
            "responsibilities": ["Educated in algorithms and data structures", "An understanding of computing using Turing Machines"]
        }]
    }, {
        "id": "experience",
        "title": "Work Experience",
        "elements": [{
            "head": {
                "org": "Jugnoo Inc.",
                "location": "Toronto, Ontario",
                "role": "Intermediate Web Developer, Jugnoo Labs"
            },
            "time": {
                "start": "May 2013",
                "end": "Present"
            },
            "responsibilities": ["Built and open-sourced a generic framework for managing scene-based visualizations and data, the JVisualizer", "Optimized end-points and queries responsible for quickly analyzing various metrics of millions of arbitrarily-filtered/searched social posts", "Open source work on Sidekiq-Status (a support library for the popular, open-source background processing-and-scheduling library, Sidekiq)", "Worked on all levels (architecture, data-modelling, back-end, front-end, integration, and styling) of implementing an engine for scheduling and managing messages to be posted from users' social media accounts", "Helped build and maintain several Ember.JS projects", "Implement automated testing (RSpec and QUnit) on many features, both old and new. Continuation of previous roles (see below, under Junior Web Developer):"]
        }, {
            "head": {
                "org": "Jugnoo Inc.",
                "location": "Toronto, Ontario",
                "role": "Junior Web Developer, Jugnoo Labs"
            },
            "time": {
                "start": "May 2012",
                "end": "May 2013"
            },
            "responsibilities": ["Wrote Jugnoo's Social Media \"Visualizer\" - an interactive app which displays, and allows interaction upon, collections of social media posts in various graphical representations (such as Tag Clouds, Charts, Timelines, etc) - from scratch using a mixture of Javascript, D3JS, and Ruby on Rails", "Optimized database schemas and queries", "Managed an intern while handling separate projects/components of my own", "Worked with a partner to build the Jugnoo Social Dashboard; a feature-rich, stream-based utility for managing and interacting with social media accounts (Twitter, Facebook, and LinkedIn) via OAuth, as well as support for RSS streams", "Developed a library for accessing and parsing arbitrary web pages to generate a page-preview, consisting of a title, image, and paragraph relevant to the page"]
        }]
    }, {
        "id": "personal",
        "title": "Personal Programming / Side Projects",
        "elements": [{
            "head": {
                "location": "JVis Audio",
                "role": "Creator"
            },
            "time": {
                "start": "May 2014",
                "end": "present"
            },
            "responsibilities": ["A Web Audio API module with sample views for the JVisualizer framework", "Experimentations on audio-analysis portions of the Web Audio API, including extracting and comparing musical notes"]
        }, {
            "head": {
                "location": "The Correlation Corroborator",
                "role": "Creator"
            },
            "time": {
                "start": "Jan 2012",
                "end": "Dec 2012"
            },
            "responsibilities": ["A Rails-based web application that allows the user very limited information-extraction capabilities, and visualizes the results for the public"]
        }, {
            "head": {
                "location": "Rolling Hills: a 3D Music Visualizer",
                "role": "Creator"
            },
            "time": {
                "start": "Jan 2012",
                "end": "April 2012"
            },
            "responsibilities": ["An interactive, 3D music visualize, written in C++ and OpenGL, utilizing Boost Threads, FMod (audio), and GLUT (GL toolkit); Rolling Hills renders landscapes in real-time based on input MP3 files", "Optimized and multithreaded for efficiently analyzing music and rendering", "Cross-platform: currently compiled and tested on Windows and Mac OSX"]
        }]
    }, {
        "id": "education",
        "title": "Education",
        "elements": [{
            "head": {
                "org": "Ryerson University",
                "location": "Toronto, Ontario"
            },
            "time": {
                "start": "Sept 2008",
                "end": "April 2012"
            },
            "responsibilities": ["BSc in Computer Science; graduated with a cumulative GPA of 3.11"]
        }]
    }, {
        "id": "nontech_experience",
        "title": "Non-technical Work Experience",
        "elements": [{
            "head": {
                "org": "Royal Bank of Canada",
                "location": "Toronto, Ontario",
                "role": "Account Services Agent, Indirect Lending"
            },
            "time": {
                "start": "April 2010",
                "end": "Dec 2011"
            },
            "responsibilities": ["Performed Anti-Money Laundering procedures and course work", "Modified, entered, and verified sensitive information", "Processed car loans, assessing completion of client information and dealership paperwork"]
        }]
    }] 
  }
}
