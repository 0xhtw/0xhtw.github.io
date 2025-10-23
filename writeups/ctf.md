# CTF/Reverse Engineering: Unlicensed hacker parties in the depths of London - Who needs a calm environment when partaking in CTFS?


### In this writeup I'll be documenting one of my recent experiences with a CTF (Capture The Flag) event. This event wasn't a professional one, this was an event ran by black hats, cybersecurity enthusiasts and other people within similar categories.


### I found out about this through one of my friends I know from forums back in the day and managed to get into the telegram group dedicated to this underground event and trust me, it was underground. This place was like DEFCON but with absolutely no rules and was hosted in a converted basement under some building I won't disclose. This place had it all, pop up shops with some sick hardware and other devices, live music and of course the CTF competitions.


### I originally wasn't going to partake in anything I just went to get a feel for the place, but it got the better of me and I decided to jump in, but I had no laptop. I want to say big ups to "swrv", some random dude way older than me who let me use his machine to partake in one of the CTFs. Without further or do, lets continue, enjoy this raw documentation of one of many underground hacker parties that take place around the world.


### Track of the session: [Kryptic Minds - Badman VIP/Six Degrees](https://www.youtube.com/watch?v=qJvcgUaBIFo)


### Two tracks??? Yeah, whoever was on the decks at this event has some serious ball knowledge when it comes to dubstep and dropped the legendary mix/fade between those two tracks Simon Shreeve from Kryptic Minds dropped on the [Kryptic Minds 40 Min Boiler Room 2012 DJ Set](https://www.youtube.com/watch?v=qJvcgUaBIFo) I've linked the set in the title too. You can find the beginning of Badman VIP at the 17:45 timestamp and the Six Degrees fade at the 19:30 timestamp. Good to see people still dropping these tracks today.


### Kryptic Minds are absolute pioneers when it comes to the UK dubstep scene, none of that skrillex stuff, this is that gritty UK sound, which really fit the event perfectly. Lets get into it.


So I explained what this event is and how I discovered it and that I wasn't going to take part in anything, but after speaking with a few people and forming a small circle of cool likeminded people, someone let me use their machine to take part in the CTF that was about to start.


I rushed to one of the pop up stores that were selling hardware and peripherals and spent my scarce £ on an external hard drive, just to document this as I was going along. Dedication in the purest form.


Lets jump into it, our friend "swrv" was running a brand new Kali Linux image on his machine so that was perfect and we had everything on the machine that we could need in hopes of winning the CTF, although I practically used none of the tools. Kali Linux is a pentesting system that comes with basically every tool you could ever need for anything.


This is good because whoever set the network up for the CTF, made it so we couldn't communicate with the outer internet, so that means no help from the web, chatGPT or any web based tools. Straight tools and scripting knowledge, time to dial in.


We had a 2 minute period to prepare before the network interfaces would go live for us to begin, we were given the address of an FTP server with creds and that's it.


120 seconds is up, lets go!


By this point, music is absolutely blaring to the point I feel my ribs vibrating and can barely hear myself speak.


I used the given creds to log into the server, which was an account that had read permissions only. The only file we could find was an image named ```pallas1.jpeg```. Lets take a look at it.


![image](pallascat.png)


Alright, this is funny but lets not spend too much time laughing at this creature. This silly meme has a ```base64``` string below it, so this is where we start in terms of finding the next step. Lets translate this.


![image](b64decode.png)


Here I write this extremely short .sh script to decode it, please forgive the lack of detailed commenting, gotta be quick in them CTFs! It should be enough for you to understand what it does. Lets use the script and see what we get when we type the base64 into the script.


![image](pallasb64.png)


Wow, okay so the silly pallas cat mocks us for thinking it would be that easy. Challenge accepted. Lets break down how data can be hidden within images.


When it comes to reverse engineering images, there are way too many possibilities and I actually saw a keyboard get sent mach 10 across the place because someone couldn't figure it out. Let me explain what other possibilities there are.


- LSB Embedding (stands for least significant bit): This hides bits in pixel LSBs


- DCT / JPEG embedding: modifying JPEG frequency (DCT) coefficients.


- Metadata fields (EXIF/XMP/IPTC): This is placing data within image metadata


- Palette/GIF frame tricks: altering palette entries or hiding data across different frames


- File concatenation: appending extra bytes or a file to the image file


- Deep steganography: This uses neural networks to hide and/or recover data inside images, I am not too clued up on this so I may be wrong.


I am sure I've missed a few, but there are so many ways to hide data within an image so I really don't blame whoever it was for lobbing the keyboard to space.


Since the original photo had base64 on it, I decided to not go straight to the deep end and create a script to check whether there was any file concatenation and any added bytes had been appended in base64.


![image](imageb64decode.png)


This basically just searches the file for base64 and extracts it then decodes it on output. Lets run it.


![image](outputdecode.png)


I was absolutely shocked when I saw this flawlessly worked. No way there was actually base64 appended into the image. I cut it off, but there was a password aswell. So we can now SSH into this server, lets see if we can find the flag on it, something tells me it isn't gonna be that easy.


![image](ssh.png)


It actually was real and we got valid credentials, we are now on the server, so lets take a look around and see what we can find.


![image](discovery.png)


So we started with ```pwd``` to see the present working directory, and then used ```ls -la``` to see all directories. I switched over to desktop and found a folder called ```1337hax``` which is just comedic nerd/hacker terms for "elite hacks".


In this folder we can find a ```.pcap``` with a funny but questionable name, lets not get political here, lol.


I decide to push this file over to swrv's machine to analyze it with the tools we have. ```netcat``` was installed on the server, so i utilized that to transfer the file over.


![image](packet1.png)


![image](packet2.png)


So here we can see that there is a singular TCP packet. I note the following down to see where we can potentially try to move.


- We got this ```.pcap``` from ```10.4.20.5```, which was the destination for the packet transmitted.


- The source came from ```10.4.20.6```. The source port was 12345, I note that down in case there's any relevance later down the line.


- And yes, whoever set this up named the ```.pcap``` ```"keirstalin.pcap"``` I have no clue why, but I note it down just in case it has any relevance lol.


I then created another script to dive into the 180 bytes of TCP data shown at the bottom of the packet as it appears to be in HEX. The script will read and then translate that. Lets have a look at it.


![image](hexscript1.png)


![image](hexscript2.png)


This reads the ```.pcap```, uses the ```scapy``` library to process and reassemble the payloads from multiple network packets if fragmented and then attempts to decode the payload in different formats. This is incase we encounter anymore network capture files that contain different types of data or more than 1 packet. It decodes ASCII hex and raw text. Lets run it against our capture file.


![image](hexoutput.png)


Nice, this was a hidden message. We get a welcome from the pallas cat and given a directory, which doesn't exist on the server we got credentials for and isn't a hidden directory either. Lets scan and do some recon on that source IP we got in the capture file!


![image](recon.png)


LOL, good one. I see the relevance with the .pcap file name. However, starting to scratch my head a little bit as this is all I have to work with... I put the ```-sV``` argument on the ```nmap``` command, but it didn't provide any banners or services being used. I highly doubt that there's an application called "bigbrother" running on port 1984, that's obviously a joke.


I decided to do ```curl -I http://10.4.20.6:1984/``` to see if anything returned, but nothing.


I then decided to do ```nc -v 10.4.20.6 1984``` to see if anything would return.


![image](shell.png)


Oh????? There's an active listener on port 1984 and we have an interactive shell, I guess that's what was meant in the ```.pcap``` when it said "IM WATCHING YOU"? Big brother is always listening I guess, makes sense. Our group is going crazy at this point, yet I can't hear them over the music playing in the back, which happened to be [Dual Core - All the Things](https://www.youtube.com/watch?v=X0WNQ3UYbJE)... classic nerdcore hacker music. We believe we're getting closer to the end already.


I refer back to the file path that was hidden in the capture file to see if it exists on this server we now have access to.


![image](flag.png)


It did indeed exist, and it appears to be the flag! Lets make sure after our connection exited.


![image](refuse.png)


Yep, connection refused. It did indeed shut off and send itself to /dev/null from what we can see.


This must've tripped some auxiliary script the host had set up as the CTF screen in the room marked the challenge as complete. This was some cool stuff, props to whoever set this all up as they made a shell script which monitored different CTFs individually and when they went offline they seemed to be marked as complete on the output. For an underground event, that's some cool stuff.


So we did it! Don't sweat the technique!


A whole bunch of high fives and fistbumps with the squad later the host came up to us and offered the winning prize for this CTF which was a brand new Arduino starer kit.


I may have done the work to complete it but I had to thank our new friend swrv for letting me use his laptop to participate, so I let him have the prize as a thank you. Hope you're enjoying it brother.


This CTF was great fun for many many reasons. Mainly because it was a very unhinged, raw event with practically no rules. So much raw talent in one building with so many interesting characters which was great to see. Despite being one of the only few young people there, I managed to network and collaborate with others on other CTFs throughout the evening and help secure some more dubs.


I saw this as a great opportunity to document non corporate cybersecurity culture and be able to document and demonstrate my skills in reverse engineering etc within an extremely high pressure environment. This place was absolutely nuts and not something many people in the cybersecurity industry will ever get to see or experience. Very interesting networking with people from all different backgrounds, ex-researchers, analysts, pentesters and self-proclaimed black hat hackers, etc. Such an amazing event. It's not what you know, it's who you know...


Big ups to all the fellow hackers, creators and artists I got to meet, much love.


I hope this was an insightful post, thank you for reading, much more similar posts to come!
