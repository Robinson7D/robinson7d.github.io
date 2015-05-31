
module.exports = function () {
  return {
    title: 'Open Source',
    path: '/open-source',

    projects: [
      {
        name: "UI Grid (Angular-UI)",
        link: "https://github.com/angular-ui/ng-grid/commits/master?author=robinson7d",
        commits: [
          {
            link: "https://github.com/angular-ui/ng-grid/commit/009d4b89df87b1918890f78c05fad2abe2df57b0",
            title: "Add throttle to scroll event"
          },
          {
            link: "https://github.com/angular-ui/ng-grid/commit/f68c5ee47415a48f2f6bd54781774714b03941c2",
            title: "Refactor columnWidth calculations"
          },
        ]
      },

      
      {
        name: "NVD3",
        link: "https://github.com/novus/nvd3/commits/master?author=robinson7d",
        commits: [
          {
            link: "https://github.com/novus/nvd3/commit/9d74523e752aa6161a30be30d3ace127af43066b",
            title: "Bug #529 - Pie Chart - Avoid hashing label positions for slices that have no value"
          }
        ]
      },
      
      {
        name: "Sidekiq-Status",
        link: "https://github.com/utgarda/sidekiq-status/commits/master?author=robinson7d",
        commits: [
          {
            link: "https://github.com/utgarda/sidekiq-status/commit/14fc1b6593e0eda166d00531da1ee500ab66b87a",
            title: "Add functionality for cancelling scheduled Sidekiq jobs"
          },
          {
            link: "https://github.com/utgarda/sidekiq-status/commit/83baffe803dfc3af2e05e4574138cdc58c1fc8c4",
            title: "Scan schedule in batches (for cancelling)",
            additional: "(Also: utilize Redis' native O(log(n)) ordered-set search if a scheduled time is provided)"
          },
        ]
      },

      
      {
        name: "Angular-Grid",
        link: "https://github.com/ceolter/angular-grid/commits/master?author=robinson7d",
        commits: [
          {
            link: "https://github.com/ceolter/angular-grid/commit/f1e057abd102b00dc2b75b7d0523749b3b91bb56",
            title: "Allow sorting by multiple columns (by holding shift)"
          }
        ]
      },


      {
        name: "Angular-Datatables",
        link: "https://github.com/l-lin/angular-datatables/commits?author=Robinson7D",
        commits: [
          {
            link: "https://github.com/l-lin/angular-datatables/commit/2cfd582db2a5f93eb7a48013e00f2235d406e545",
            title: "Improve Angular digest performance by allowing watching table definitions shallowly"
          }
        ]
      },



      {
        name: "Jugnoo Visualizer",
        link: "https://github.com/jugnoo/j-visualizer/commits/master?author=robinson7d",
        commits: [
          {
            link: "https://github.com/jugnoo/j-visualizer/commit/7075edf088739e8974a2ca10947e1745e2a4de6f",
            title: "Initial Commit",
            additional: "Wrote a scene-based visualization framework using Ember-Metal." +
                        " Simplifies reusing visual elements between tabs/scenes/views, while animating in, out, and between."
          },
          {
            link: "https://github.com/jugnoo/j-visualizer/commit/a298fadbeebbb8977d826aefac7e8ae485a87509",
            title: "Merge develop, Version 1.1"
          },
          {
            link: "https://github.com/jugnoo/j-visualizer/commit/3ca4e66a33032a4ecd8a8e92af27fc2fa5e87eb8",
            title: "Release 1.2"
          },
        ]
      },


    ]
  }
}
