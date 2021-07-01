
#  TeamInfoBuilder
Team Info Builder 
  
  
  Please use the following link to see published version of this repository https://xtended99.github.io/TeamInfoBuilder/  
  
  The home for this project lives at the following link at GitHub https://github.com/Xtended99/TeamInfoBuilder   
  
![TeamInfoBuilder Intro Screen](./assets/images/instructionspng.PNG)   
   
![ Run_One MP4](./assets/videos/teaminfobuilder.mp4)   
     
  This assignment is to create a tool that can auto generate a index.html file based on a set of predetermined questions.  
  There is a video link above and below for show and tell
     
![Run_Two MP4](./assets/videos/TeamInfo_Tool_Browser.mp4)   
  
### Given:
  
Your task is to build a Node.js command-line application that takes in information about employees on a software   
engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making   
code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.  
  
Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates  
its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.
  
**Note**: There is no starter code for this assignment.
     
-   The application will be invoked by using the following command:   
   
-   node index.js   
   
-   Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that   
-   demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to   
-   record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.   
   
   
### Experience the user should expect - User Story:   
   
- AS A manager I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles  
    
### Website incorporated feature sets and expectations - Acceptance Criteria:  
  
- GIVEN a command-line application that accepts user input  
- WHEN I am prompted for my team members and their information  
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input  
- WHEN I click on an email address in the HTML  
- THEN my default email program opens and populates the TO field of the email with the address  
- WHEN I click on the GitHub username  
- THEN that GitHub profile opens in a new tab  
- WHEN I start the application  
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  
- WHEN I enter the team manager’s name, employee ID, email address, and office number  
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  
- WHEN I select the engineer option  
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  
- WHEN I select the intern option  
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  
- WHEN I decide to finish building my team  
- THEN I exit the application, and the HTML is generated  
  
### Installation instruction:   
   
-   Use the following link to get to the repository   
-   The home for this project lives at the following link at GitHub  https://github.com/Xtended99/TeamInfoBuilder   
-   Once you download the repsoitory you must install node, npm and inquirer   

### Runtime Instructions:   
   
-    Once the repository and inquirer have been installed you can then run the following command   
-    You need to install inadvance the follwoing packages 
  
-    inquirer = require( "inquirer" )
-    const { promisify } = require("util");
-    fs = require( "fs" )
-    inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
  
-    node index.js and follow the directions by answering every question.   
   
### Starting TeamInfoBuilder:  

![Starting TewamInfoBuilder from the command line](./assets/images/starting.png)   
  
### Very First Prompt:  
  
![Very First Prompt Image](./assets/images/firstprompt.png)   
  
### Detailed Instructions Prompt:  
  
![Detailed Instructions Prompt](./assets/images/instructionspng.PNG)   
  
### Detailed Instructions Prompt:  
  
![Filling in manager and Employee details](./assets/images/addingmgremp.png)   


### Sample Readme.md

[Sample Readme](./sample_readme.md)
