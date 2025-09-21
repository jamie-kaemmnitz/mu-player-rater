Online webpage for a Man Utd player rater
=================================================================
Project description
-------------------
As a Manchester United football fan i decided to create a player rater web page for the Man Utd matches i watch. This is an interactive page where a user could enter their own ratings and compare to the ratings i gave.

The Webpage was created using three HTML files, one CSS file and four JavaScript files, there is also one image file.

The Webpage should open up on the index file which will have a screen with an introduction to the what the page is about then an overview of the previous match, after that is a short section on how to view my ratings and then a form at the bottom of the page where the user can enter their ratings for the game with a submit button.

The page with my ratings can be viewed by clicking the anchor link in the review section, this will bring up the my ratings html file which shows a table with player names, my match rating and my comments for the rating. At the bottom of the page will be a return to 'home' button which will take you back to the home page and a 'rate the players' button which will return you to the home pages form section.

Once the form has been filled and submitted you will moved to the your ratings file which shows a table with player name, my rating, your rating and a difference column. The difference column is colour coded so that if your rating is higher than mine the difference will be coloured green and if it is lower the difference will be coloured red. No difference will not change the colour.
There are two buttons at the bottom of the page, the 'home' button will return to the index file and the 'view my ratings' button will take you to the page to see my ratings.

There are four different JavaScript pages, the first is a data.js file which is used to fill out all the placeholders in the Html pages, all data that needs to be altered should be on this one page. The mu.js file is used to move that data from the form and the ratings from the my ratings page into the the your ratings page and also to calculate the differences and add colour coding. 
The ratings.js file is used to autofill in any data when there are players in the squad that didnt play, this allows for automatic entry for unneccesary data. The subs.js file is used to remove any subs that are not required in the your ratings section, again removes the need for unneccesary data entry.


How to Install and Run
----------------------
You can download the code by clicking the green code button and copying the link in the box, i worked on this project with VS Code, i believe this should be transferable to other software. You can also run the webpage by entering the following link into your browser - https://jamie-kaemmnitz.github.io/mu-player-rater/

Credits
-------
1. Codecademy FrontEndPlus course - my initial learning for front end development
2. Chat GPT - used for refining css and help with javascript functions

Known Bugs
----------
No currently know bugs.

Using the Code
--------------
The code is open to be taken and used if you require, if you find any issues that have not been stated please create an issue in the repository. Feel free to suggest any improvemnet or add a pull request.
