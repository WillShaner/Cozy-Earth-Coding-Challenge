# Cozy-Earth-Coding-Challenge
A landing page with animations to demonstrate my skills with frontend web development

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
  * [Live Site](https://willshaner.github.io/Cozy-Earth-Coding-Challenge/)
  * [Github Reop](https://github.com/WillShaner/Cozy-Earth-Coding-Challenge)

## Development
### Tech Stack
  For this project I used...
   - HTML5
   - CSS3
   - Javascript
   - Bootstrap

### What I learned
  This project was great for working on my animation skills. The design allowed for me to layout the page for smaller screens how I saw fit. To animate the popup block I translated the button while also transforming the origin the popup to make it look like the button was becoming the popup.
  
  This was also my first experience building with SASS which I had known beforehand but had never built with it and I will definitely be using it going forward.
  
  ````scss
  .pop-up {
   position: absolute;
   flex-direction: column;
   background-color: rgb(255, 255, 255);
   width: 70%;
   max-width: 580px;
   max-height: 702px;
   color: #505050;
   box-shadow: 0px 0px 11px 5px rgba(0, 0, 0, 0.59);
   z-index: 10;

   &-title {
     letter-spacing: 0.25em;
     font-size: 3em;
     color: #611818;
   }

   &-hr {
     height: 2px;
     width: 70%;
     background: linear-gradient(90deg, rgba(97, 24, 24, 1) 0%, rgb(255, 255, 255) 100%);
   }

   &-paragraph {
     font-size: 14px;
     line-height: 1.5em;
   }
  }
  ````
 


## Author

- [Linkedin](https://www.linkedin.com/in/will-shaner-315500245/)
- [Github](https://github.com/WillShaner?tab=repositories/)
- [Portfolio](https://genuine-sunflower-520c38.netlify.app/)



