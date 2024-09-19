# restaurant-page
Restaurant Page Project: The Odin Project - Javascript

Completed 18/9/2024

[Temp - the images don't seem to be attaching on the live preview, even though they have uploaded correctly to GitHub. Looking into this.]
[UPDATE - see end of text]

I found this quite an enjoyable task that was relatively easy but time-consuming.

The brief for this project was to create a page for a restaurant. I had just been to Langkawi in Malaysia and visited a lovely little local warung, a family restaurant, where I has an absolutely delicious meal called Asam Pedas Ayam, which translates to sour spicy chicken. This place was very local and was not the kind of place to have a website (or wifi, or printed menus etc., but had lovely people running it!), so I chose to create a site for there. The task sounded easy, but the 'twist' was that only a header and footer were to be included in the HTML, and everything else needed to be appended to the DOM using JavaScript, and it needed to appear to have different pages. Or at least, I assumed the last part.

Learning from my previous project, I tried not to overcomplicate things and keep it all relatively simple. I designed a homepage that doubled as about us, a menu page that would have three subpages, and a contact page. The footer contained the restaurant name and three simple buttons, and the footer contained something similar plus three social media buttons, which don't work as I am fairly confident that this place doesn't have it's own Instagram account.

The first thing you'll notice is the colour scheme. Colour schemes aren't my area of expertise, so I colllaborated a bit with ChatGPT to try to come up with a bright, vibrant scheme which incoporated some elements of the Malaysia flag (the bright red and yellow), and some colours that represented the tropical side of the location (the teal colour and the earthy brown). Trying the colours out, they came across as a bit loud and garish, but after a few tweaks to them I decided to keep this scheme, despite it being quite loud and garish. I tend to stick to bland colour schemes, usually containing blue, so I thought that trying something different might be fun, and I thought that the vibrant and almost in-your-face nature of them might reflect the place itself quite well.

The technical side of things weren't too difficult. I approached it by creating a loose model of the first two (home and menu) pages in HTML, applying the CSS, then commenting out the HTML and building and appending it in JS. While this wasn't too difficult, I found it to be very time consuming, appending the elements one by one. Perhaps there's a quicker way, but I am not aware of it. I can see why devs turn to frameworks such as Bootstrap to try to speed things up, despite the possible downsides. There were a few hiccups, such as difficulties appending elements to others defined by class rather than ID, but some research sorted this out quickly.

Overall, it was a relatively easy project that took a surprising amount of time due to it's nature. I enjoyed experimenting with some different colours and with combining both flex and grid displays. I'm looking forward to diving a bit deeper into Javascript next.

UPDATE 19/9/2024:

Ah. I thought I was finished. I figured out why my images weren't showing on GH Pages - they weren't being imported properly in JS after I missed a part of the Webpack page. To do this, I needed to move them all to the src folder (trying to fix without doing this threw lots of errors, so I actually did this last) and import them one by one to a new images.js file, to then use in the menu.js file. I then had to update the other image paths. I'm currently waiting to see if this works, although deployments seem to be a bit behind. Will try to push again, but fingers crossed this worked!