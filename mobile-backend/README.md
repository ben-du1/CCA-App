# CCA App Backend 🗄️
Welcome to the **backend** repository for the Canyon Crest Academy mobile application. If you know someone interested in contributing, invite them to the [Discord](https://discord.gg/DGBm7KhQuE) & Meetings!

# Overview
- Uses NodeJS
- Poorly implemented sqlite3 database
- ReactJS user interface to modify data (NodeJS serves the `/build` directory)

# Demo
- [Live Demo](http://benjamindu.com/)

# Features

## Authentication
- Test password is `bennybob123`, please change this in production
- Password must be entered into its field before any requests are handled
- Authentication system sucks

## Data
- Posts are stored in database table `posts`
- Images are stored in `resources/images`
- Bulletin & CCATV Links are stored in .txt files
- Teacher JSON data is stored in a .json file
