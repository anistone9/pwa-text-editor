# pwa-text-editor
Text Editor Using PWA Criteria    

# Table of Contents   
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Description](#description)   
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)  
- [License](#license) 

## User Story  
AS A developer    
I WANT to create notes or code snippets with or without an internet connection     
SO THAT I can reliably retrieve them for later use      
  
## Acceptance Criteria    
GIVEN a text editor web application    
WHEN I open my application in my editor    
THEN I should see a client server folder structure    
WHEN I run `npm run start` from the root directory   
THEN I find that my application should start up the backend and serve the client    
WHEN I run the text editor application from my terminal   
THEN I find that my JavaScript files have been bundled using webpack   
WHEN I run my webpack plugins   
THEN I find that I have a generated HTML file, service worker, and a manifest file   
WHEN I use next-gen JavaScript in my application   
THEN I find that the text editor still functions in the browser without errors   
WHEN I open the text editor   
THEN I find that IndexedDB has immediately created a database storage   
WHEN I enter content and subsequently click off of the DOM window   
THEN I find that the content in the text editor has been saved with IndexedDB   
WHEN I reopen the text editor after closing it   
THEN I find that the content in the text editor has been retrieved from our IndexedDB   
WHEN I click on the Install button   
THEN I download my web application as an icon on my desktop   
WHEN I load my web application   
THEN I should have a registered service worker using workbox   
WHEN I register a service worker   
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets     
WHEN I deploy to Heroku    
THEN I should have proper build scripts for a webpack application    

## Description     
Text editor running in the browser, with the ability to run offline. This single-page application uses webpack, service workers, and IndexedDB, and incorporates Progressive Web Application (PWA) functionality.      
Data is stored in an IndexedDB database, using the `idb` lightweight wrapper around the IndexedDB API.            

## Installation   
Clone the repository in GitHub.   
Run `npm install`, and `npm run start`.    
Open `index.html` in the browser, and click `install`.                   

# Usage    
This single-page application can be used to track notes and ideas while coding.               

## Demo   
Need to add

## Credits   
University of Arizona Coding Bootcamp resources (class activities and examples).    

## License  

MIT License

Copyright (c) 2023 anistone9

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.   
