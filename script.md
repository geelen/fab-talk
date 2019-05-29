# BerlinJS talk

Hi everyone, let’s get started!
•
First up, my name is Glen Maddern, that’s me on Twitter, I only have 10 minutes tonight so I’m going to skip over any kinda introduction but it’s really nice to be back here, I’m from Australia but it feels like each time I come to Berlin for JSConf I always get a chance to stand up here and share stuff with you folks and I really appreciate it.
•
I’m working on a product called Linc which I might talk about a little at the end if I get time but I’ll be here all weekend and a bit of next week,  and super keen to chat about it. It’s related to all the stuff I’ll be presenting and I’ve got cool robot stickers and pins and stuff just find me and we’ll chat.
•
Ok, so my talk today is about FABs, or Frontend Application Bundles, which is a thing I’ve been developing to make the stuff in Linc possible. I’m calling it the Docker of Frontend and just a quick disclaimer, I don’t really understand docker very well. As in the internals, I’m sure there’ll be plenty in the room here who understand it a lot better than me, but that’s ok because FABs and docker aren’t actually similar in implementation, more to do with how they sit in the technology landscape, what they accomplish. But hopefully I don’t say anything too off the mark… I’ve given this talk a couple of times and nobody’s heckled me yet so… hopefully that’s a good sign?

I’ve also only got 10 minutes so I’m not going to go into too much detail about how it all works, I thought it’d be better to talk about _why_ it exists, what influenced its design, give you a bit of a tantalising glimpse into what it enables, and then you can read more or come to talk to me on your own time, ok?
•
Ok so if you’ve ever had someone try to explain Docker to you, they might have started by talking about the concept of Containerization. Yeah? 
•
Basically, the story goes that the most important invention of the 20th century was a box. This box. The intermodal shipping container.

Before this box came along, if you wanted to ship something to the other side of the world, it’d get picked up from a factory, loaded one-by-one onto a truck, driven to a port, loaded one by one onto the boat, and the same at the other end. Took ages, stuff got broken, people stole stuff.

Then, this box comes along, suddenly you fill it up at your factory, it fits on the back of a truck, fits on a train carriage, locks into other boxes on a ship so it doesn’t fall over (the corners all link up somehow), it doesn’t get opened on the journey, suddenly you’re sending 40-foot of cargo in one go. Everything’s now dozens or hundreds of times cheaper and faster, the entire modern global shipping economy of the last 60 years springs up, right? Well that’s the story.

•[docker image]

The same story goes that Docker is like containers but for running software. I mean, even their logo is a bloody container ship. Well, whale.
•
It doesn’t matter if it’s a database or a webserver or a build system or a NodeJS process serving static files, if it runs in a container, all your infrastructure can manage it, the way trucks and trains and boats all interoperate using a standard shipping container.

•[FALSE]

But that’s all crap. Well, not entirely, but it’s a half-truth.

•[PARTIALLY FALSE]

•

Because there were quite a few shipping containers before the Intermodal Container

•

And there were software containers before Docker, we just called them something different.
•
We called them virtual machines.
•
And while I don’t have time to go through anything in detail, it’s worth noticing that _yes_, Docker containers _are different_ to the containers that came before
•
They’re more restrictive
•
They’re a lot smaller
•
Docker was definitely better than what came before it, but that’s not why it’s had such an impact on the industry.

And just as an aside, if you’re mostly a frontend person, especially if you have joined the industry after, say, 2014-15, it might not be obvious to you that Docker has had much of an impact. I mean, my main experience with docker is trying it to bloody run on my own machine, but looking back 10 years ago it’s totally changed the way people, particularly larger organisations, architect these systems.
•
And actually it’s the same story with the shipping container, the _real_ story at least. It’s not just that this box was better than every other box, although it was definitely a good box no doubt about it, it’s that it was _open source_.
•
This is a tiny throwaway quote from the Wikipedia page on Containerisation. The engineer who invented many of the crucial design components of the container, who by the way has a much shorter Wikipedia entry that McLean who is traditionally credited with the invention, apparently convinced McLean that it’d better if everyone could use this without paying patent fees.
•
And that’s really what Docker did. It didn’t really do anything vastly better than virtual machines, it just packaged up a bunch of existing technologies into a good solution that was open & platform agnostic. And it’s actually that second part that’s most relevant to frontend apps and FABs.
•
Because the really interesting thing isn’t really the containers themselves, it’s what they do to the wider industry.
•
When there’s no standard, each company tries to build the platform with the most features. Before Docker that was things like AWS, Heroku, VMWare, all doing the coolest stuff imaginable with virtual machines as long as you sign up to their platform forever.
•
When there is a standard, the innovation becomes much more granular. Suddenly, if you see a problem you can solve it, since everyone’s solutions are compatible with each other. You don’t need to be a company the size of Amazon to compete, you can just fix a tiny piece of the puzzle, and everyone benefits

The analogy with shipping containers is that before standardisation, the only people who could deliver that kind of solution was a company that did everything from trucks, trains & boats, a whole door-to-door service. There’s no incentive for them to make any of their pieces better because nobody 

_This is dragging on_

•

Ok, so that’s enough history, I’m actually almost out of time and I haven’t even started talking about my own stuff! What about these FAB things?

•

Well, as you might be able to ascertain, FAB is kinda like the Docker of Frontend, but I want to talk about two aspects of what that means. The first is why we need a format like this at all.

•

Basically, if you’re working on a frontend app, which I basically define as anything from a static website to a full client-rendered React app, you have to potential “standards” to choose from, 
