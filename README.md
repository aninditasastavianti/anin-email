# Background of this project

I used this project to experiment with generating emails in React using NodeJS. I got some help from a friend to do the basic project setup as I'm new to React and had no NodeJS experience. I did have prior knowledge of HTML/CSS/Javascript which helped a lot. Then I proceeded and implemented an [email template](https://github.com/aninditasastavianti/anin-email/blob/3b767b0c44cbce8bc70913a89b411d2b23142d76/src/templates/Email1.js) based on an email that I received from Klarna in September when I paid a purchase at Afound.

Overview of most relevant files:
* [Template in React](https://github.com/aninditasastavianti/anin-email/blob/3b767b0c44cbce8bc70913a89b411d2b23142d76/src/templates/Email1.js) (using Postonents React components)
* [Component I made for the advertising part](https://github.com/aninditasastavianti/anin-email/blob/3b767b0c44cbce8bc70913a89b411d2b23142d76/src/templates/Ad.jsx) (made a couple of these components)
* [Generated email](https://github.com/aninditasastavianti/anin-email/blob/3b767b0c44cbce8bc70913a89b411d2b23142d76/generated_email.html) using that template
* [Screenshot of original email from Klarna](https://github.com/aninditasastavianti/anin-email/blob/3b767b0c44cbce8bc70913a89b411d2b23142d76/original_email.png) that I based my implementation on

The templates are made with React components and NodeJS is used as a server to run the simple React application. This application can be used to generate emails from these templates (into HTML/CSS). 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses the [Postonents library for generating emails with React](https://github.com/Saifadin/postonents). Emails are sent using [smtpjs](https://smtpjs.com/) and [Sendgrid](Sendgrid.com).
