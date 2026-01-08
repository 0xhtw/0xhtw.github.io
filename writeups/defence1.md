# Threat Intel/Scripting/Reverse Engineering: Recognizing flaws in Mother Russia’s ransomware variants - Patriotism for profit, killswitches and friendly fire

![ifYouSeeThisMyGIFHasHadADayOff](https://i.pinimg.com/originals/0e/d6/a9/0ed6a99744c3d2a828311c2257dde3b2.gif)

### In this writeup, I'll be sharing my knowledge on the modern day ransomware movement and the pioneers behind it. Grab a шашлык (basically a russian kebab from my knowledge, *pronounced Shashlik*), sit back and enjoy the writeup. 


### Track of the session: [Elusin - Silhouette ](https://www.youtube.com/watch?v=gpXAKU_yDy4)

### Not much to say here, my Russian partner put me on this so I thought I'd include it since it's on the playlist. 



# Chapter I - Background

For around a decade now, hacking has become more and more financially motivated each year. With 2017 being the catalyst and motivator for many groups I would say, following the WannaCry outbreak in May 2017.


No one really hacks for fun, knowledge or to sharpen their skills anymore, we don't have any more Gary McKinnons' (absolute mad lad btw). 


So, with ransomware being such a lucrative business model now, (yes, threat actors actually classify themselves as business operators, not criminals lol, i have seen this first hand)


You might be asking, who is the MVP, the key player in the industry? No one in particular, but a certain region dominates the industry, which is by far Russia. 


However, I do side with the Russians, their name often tarnished for "hating the west" and constantly getting the blame for random cyberattacks that happen in and around the world day to day. Whilst yeah, to a degree some of it is true, the stereotype is quite narrowminded. A lot of big cyberatttacks especially in 2025, have been committed by english speaking geeks in their UK and USA bedrooms. 


This doesn't change their heavy presence in cybercrime today, as like I said they are one of the key players in Ransomware which I'll now get into. 



# Chapter II - Patriotism for profit

In most Commonwealth of Independent States (former soviet nations), they tend to produce a large number of technically strong young people. In these regions, legitimate pathways are often limited, and as opposed to western regions like the USA & UK, the underground economy is visible, accessible and normalized. This means most cybercrime communities are easy to come by and aren't hidden. Telegram is widely used in Russia, and is also used for communication and as general forums by threat actors.


As young actors explore this world, accompanied with the general Russian stance many grow up with on the west, they find that not only do Western organizations pay up the most, but law enforcement in those regions cannot directly arrest or extradite anyone based in Russia. Also, cross-border investigations are slow and politically restrained. 


In Russian-language cybercrime spaces, forums and channels, attacking foreign entities is often framed as:

- Less serious than domestic crime

- Victimless and abstract

- Comparable to exploiting "hostile" systems


This all originates from existing Russian stance on the west, and also probably the fact that they get blamed and tarnished for alot of stuff, so I guess it's a big fuck you to the west most of the time. Fair play lads. 



# Chapter III - Friendly fire, killswitches and the rozzers. 

Alright, it's all well and good unloading attacks left, right and centre like Stevie Wonder has just got his hands on a Kalashnikov... but how do you avoid the Gulag? It's a good question to ask, as these threat actors make absolute shed loads and authorities just turn a blind eye.


In most Russian ransomware if you reverse engineer it (I will cover some reverse engineering further down), a lot of functions will display things like checks for Russian locale Windows registry key entries, keyboard layouts etc. This is so they don't pull an American Normandy and drop bombs on their own troops. 


The malware will include a small killswitch function if it detects anything Russian or any where which is apart of the Commonwealth of Independent States (now excluding Ukraine). If and once this is detected, the malware will stop dead in it's tracks, tie the rope and kick the bucket and perish as if it was never there. 


How does this protect the actors? Well, it's a form of self-policing. As previously mentioned, enforcement is only put in place by the MVD and FSB (Russian alphabet agency rozzers) when their own are hit. So, this allows them to operate comfortably without the worry of getting nicked, provided the malware actually works, otherwise it's a long day and Uncle Vlad will be having a stern word.
# WORK IN PROGRESS - PAGE PUBLISHED FOR FORMATTING TEST ^_^
