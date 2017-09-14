# TODO

* Council boxes
* NUS boxes
* Add turnout to Council and NUS
* Show/hide the tables
* Add pym.js
* Style everything

Test structure for components:

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
