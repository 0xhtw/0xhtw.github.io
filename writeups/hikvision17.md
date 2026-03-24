# Analysis: Hikvision CCTV CVE-2017-7921 - Ghosts in the wires, one of the most widely known brands, with a ghostly yet dangerous vulnerability

![ifYouSeeThisMyGIFHasHadADayOff](https://i.pinimg.com/originals/62/9b/2e/629b2e5d7c692607e4224b31c03a5e45.gif)



### This writeup will be diving into an exploit actively used in the wild, (even 9 years later). This is an exploit which seems pretty harmless but can be quite the opposite.



### Track of the session [Youngsta: Boiler Room set LDN (2016)](https://www.youtube.com/watch?v=gi8Nfxis6ic)


### Badman set, dropped some if you know you know tracks/blends, [Loefah - Mud](https://www.youtube.com/watch?v=AYoPaVV-qk8) into [Skream - Chest Boxing](https://www.youtube.com/watch?v=oSKK9JzvX38) being one of them. Serious set, shoutout DMZ crew. Anyways, lets get into it. 



# Camera models & firmware builds subject to exploitation by undesirables

```
- Hikvision DS-2CD2xx2F-I Series – V5.2.0 build 140721 to V5.4.0 build 160530

- Hikvision DS-2CD2xx0F-I Series – V5.2.0 build 140721 to V5.4.0 Build 160401

- Hikvision DS-2CD2xx2FWD Series – V5.3.1 build 150410 to V5.4.4 Build 161125

- Hikvision DS-2CD4x2xFWD Series – V5.2.0 build 140721 to V5.4.0 Build 160414

- Hikvision DS-2CD4xx5 Series – V5.2.0 build 140721 to V5.4.0 Build 160421

- Hikvision DS-2DFx Series – V5.2.0 build 140805 to V5.4.5 Build 160928

- Hikvision DS-2CD63xx Series – V5.0.9 build 140305 to V5.3.5 Build 160106
```


Yes, this is quite an extensive list of vulnerable instances. 


Whilst most of these cameras are getting old and are being replaced, this doesn't change the amount of cameras that can be discovered using ```shodan.io```. 
