# faceit-task

I've used Redux RTK Query instead of pure Redux.
I've had plenty of experience using pure Redux, but never got around to try RTK Query, so I took this as an opportunity.
I hope that's ok with you. I feel that it actually resulted in a bit more complex logic than simple reducer with mocked data.
Also I've used Expo to save time.

I've also taken some shortcuts here and there to save time, i.e. using mocked data in api, slicing the response to fit the 10 posts requirement, 
  not abstracting some libraries, using simple styling that perhaps is not always consistent etc.
  
On feed list overscroll new posts are fetched but there are no new posts in mocked data so nothing changes.
 
Scroll position is perserved - it's out of the box feature from react-navigation.
Author screen is there.
