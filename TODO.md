# TODO

* Optional features
  * Scroll to top of the blog
  * Flash the header on new data
  * Add count of elected seats to the council and nus? Is it clear enough that the grey is unelected
* Test the embedding on the honi site
* Style everything
  * Layout mechanics
  * Common type
  * Common table style (will override for president bars)
  * Common button (used for toggles/load more posts)
  * Common styles for the full results expander
  * Header
  * Footer
  * Element by element
  * Fix all the colors for consistent lightness
  * Replace elected "1" with a tick in the results tables
* Testing:
  * Do we need a resize on a manual window resize?
  * No data at all
  * Check embedded links work properly (potentially use PYM's direct parent)
  * Check on peoples' phones
  * Do we need to for the animations to complete before sending the height?
* Add analytics
* Remove logging statements throughout


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
