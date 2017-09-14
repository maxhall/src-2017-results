# TODO

* Implement modes of the app (blog and blog+results), and the reshuffle of components at the mobile breakpoint (included tabbed browsing). Use the window handler for this.
* Add to spreadsheet/copy: displayresults
* Core results display for each election
* Redraw the SRC '17 svg
* Style everything

* Two modes: Blog-only and blog+results
* Two views: mobile and desktop

Header
If !displayResults
  BlogOnlyWrapper (Show the blog at a fixed width above the breakpoint and 100% below)
    Blog
If displayResults
  If !appWidth < breakpoint
    Results
    Blog
  If appWidth < breakpoint
    TabBar
    MobileResults
      Results
    MobileBlogWrapper
      Blog

* get rid of Results and go MobileResults LargeResults
