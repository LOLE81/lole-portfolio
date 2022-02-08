const projects = [
    {
        id: 1,
        name: "Food App",
        description: "Development of a SPA using React/Redux for the Front End and pure CSS for styling. For the database I used postgreSQL and Sequelize. Back End was built using Express and Node.js, connecting with my own database and an external API. Functionalities: filter by diet type, sort by name or score; search by name or navigate between pages; there is also the possibility to add a new recipe to the database using a form.",
        landingImg: "./dataPics/landing.jpg",
        homeImg: "./dataPics/home.png",
        extraImg: "./dataPics/addRecipe.png",
        link: "http://137.184.102.219/"
    },
    {
        id: 2,
        name: "RockeyPlay",
        description: "Video platform develop as a final project with my Henry's teammates. Mobile first. Used techs: React, Redux, Webpack, TypeScript, JavaScript, Express, Sequelize, Node.js, Postgres, among a few other technologies. The idea behind this project is to provide companies, institutes, or other enterprises with a tool to store and share videos, organizing them according to their need. Allowing them to build a community customized just for them.",
        landingImg: "./dataPics/landingRP.png",
        homeImg: "./dataPics/landingRP.png",
        extraImg: "./dataPics/aboutUs.png",
        link: "https://rocketplay.com.ar/"
    }
]

module.exports = {
    projects,
}