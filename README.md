clockz
======

My old clockz app extracted from an old phonegap prototype circa 2011. I wanted to explore phonegap and thought this would be a cool project to work on. Looking back at this now (now is Dec 31, 2013), the code has so many bad practices, but it's good because I can tell how much I've learned the past few years.

THE GOOD STUFF:
- I tried to modulized the clock faces so anybody can add their own
- Used Composer for MVC, back in the day when Mootools was where it's at.
- Start to think about CSS Framework (Less)

THE BADs:
- No build/test process (there was no `grunt` yet)
- Less is compiled on the fly! (this is before `node` and `grunt` became so popular)
- No jshint or front-end optimization

This is being re-build from the ground up into an iOS app with phonegap.
