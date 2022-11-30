# Cozy-Earth-Coding-Challenge
A landing page with animations

## Table of Contents
  * [Overview](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#overview)
    - [Screenshots](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#screenshots)
    - [Links](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#links)
  * [Development](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#development)
    - [Tech Stack](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#tech-stack)
    - [What I learned](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#what-i-learned)
  * [Author](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge/edit/main/README.md#author)
  
  
  
  
## Overview
  
### Screenshots

![App Screenshot](/images/site-screenshot.webp)

### Links
  * [Live Site](https://dynamic-travesseiro-58dba1.netlify.app/)
  * [Github Reop](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge)

## Development
### Tech Stack
  For this project I used...
    - HTML5
    - CSS3
    - Javascript
    - Bootstrap

### What I learned
  This project was a great introduction to GSAP's Scrolltrigger library and the overall markup of GSAP.
  ```javascript
  gsap.to(boxes, {
  x: () => {
    return -(container.scrollWidth - document.body.offsetWidth) + 'px';
  },
  ease: 'sine',
  scrollTrigger: {
    trigger: boxes,
    start: () => 'end end',
    end: () => {
      return '+=' + container.scrollWidth;
    },
    scrub: true,
    pin: document.querySelector('.container-fluid'),
    anticipatePin: 1,
  },
});
```
I also learned about formatting images for minimizing load time by properly sizing images
and converting them to webp format.

## Author

- [Linkedin](https://www.linkedin.com/in/will-shaner-315500245/)
- [Github](https://github.com/WillShaner?tab=repositories/)
- [Portfolio](https://genuine-sunflower-520c38.netlify.app/)



