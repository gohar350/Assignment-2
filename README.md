# Assignment-2
 API and UI Test
 
 Meeting 1: Discusion About Creating Issue in GitHub
 learnt about using Git
 Invite collaborators 
 learnt adding issues in Git Repository


 Meeting 2: Nightwatch Setup Done
 lernt about using Nightwatch
 coded some test cases 
 
 Meeting 3:Working with Jest Api Test
Jest JS installation and setup


TASK 4
 OPEN SOURCE PROJECT
We choosed our open source project for task 4. 
                     FRAMEWORK THEY USED FOR TESTING
Framework they used for Api testing is Jestjs and SuperTest.
Framework they used for Ui testing is Nightwatch.

UI TESTING:

        NightWatch
    What is Nightwatch js used for?
Nightwatch. js is an integrated, easy to use End-to-End testing solution for web applications and websites, written in Node. js. It uses the W3C WebDriver API to drive browsers and perform commands and assertions on DOM elements.

What is the difference between Nightwatch and Selenium?
Nightwatchjs and Selenium can be primarily classified as "Browser Testing" tools. Nightwatchjs and Selenium are both open source tools. Selenium with 14.7K GitHub stars and 4.92K forks on GitHub appears to be more popular than Nightwatchjs with 9.38K GitHub stars and 917 GitHub forks.

Is Nightwatch js open-source?
For developers who use Nightwatch. js for their testing needs, Nightwatch will always remain free and open-source.



API TESTING:

        JEST.JS
    Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

        why Jest js is used:
Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.

        is jest better than other api Testers:
The test finished much faster than Jest, like because there were no variables to handle and no additions to be made. Jasmine is a powerful Javascript testing framework, especially when paired with Angular. Its testing language is a bit more intricate than Jest, which is why it's also great for backend testing

#Assignment 3
Task: 3
Exploring Static Analysis Tools

1) Linters:

Opensource Github project: Adidas
https://github.com/adidas/js-linter-configs

•	The open source software uses linter config to analyze the code quality while staying under coding guidelines.
•	Adidas configurations for the different linting tools for
   o	Javascript
   o	Typescript
   o	CSS/LESS/SASS
•	Linter configurations purpose:
   o	Define set of rules
   o	Validate coding standards
   o	Version ES5 to ES9 for Javascript or Typescript
   o	Linter tools display error if rules violated
   o	Unless explicitly specified, does not modify code
   o	Eslint resolves first level “nodemodules” dependencies 
   o	Package installed using 	“npm install CONFIGURATION_PACKAGE_NAME[@VERSION] “
   
2) SAST:

Opensource Github project: ShiftLeftSecurity
https://github.com/ShiftLeftSecurity/sast-scan

•	Security testing purpose
•	SAST-scan detects various kinds of security flaws in application in single fast scan
•	No need for remote server
•	All scanners, rules and data including the vulnerability database are downloaded locally to perform the scans
•	Automatically adds comments to PULL Requests of Github
•	Flaws detection:
   o	Credentials Scanning to detect accidental secret leaks
   o	Static Analysis Security Testing (SAST) for a range of languages and frameworks
   o	Open-source dependencies audit for known CVEs
       - Many languages and package formats supported
       -	OSS Risk Audit for npm
       -	Dependency confusion checks for npm
   o	License violation checks
   o	Container image scanning for application CVEs (New)
•	Supports multiple languages like ruby,php,nodejs,python sql etc
•	A minimal setup configuration is shown below:
       - uses: ShiftLeftSecurity/scan-action@master
         with:
           type: "credscan,java,depscan"






Assignment 3:

Unit Test is uploaded in Unit Test Folder 
Done By Gohar and Zara
