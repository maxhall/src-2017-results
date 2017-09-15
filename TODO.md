# TODO

* Add pym.js
* Style everything
* Add analytics

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
