# Wisey app

Wisey is an educational app, which shows last courses and lessons and allows to track progress of your learning path. 

## Installation

Firsly, install dependencies
```bash
npm install
```


Then, copy contents of .env.local.example to .env.local file
```bash
cp .env.local.example .env.local
```

## Usage

```bash
# Run on localhost
npm run start

```

If you're having trouble watching videos, installing the Allow CORS extension might help.

## Description
#### The project has 2 main pages:
1) Courses list: In the course feed, the latest 10 courses are displayed. You can click the "Show more" button to see more courses.   
 Each course has an image (you can see a video when hovering over it), title, description, rating, and lesson count. To go to the course page with lessons, you can click directly on the course card.


2) Course page: Here we can browse through the lessons, read a detailed description of the course, and learn.
 

 - On the course view page, the first video from the course is displayed, along with details about the course and a list of lessons. 
- When clicking on a lesson (if it is not locked), the current video will be openened, and you can understand which lesson you're watching by the changed background. 
- The progress of watched videos is saved, so if you go back to the previous video, you can continue watching from where you left off. 
- The finished videos are marked with a checkmark. If the lesson is locked, the corresponding image and title are shown.

- By clicking on a button with an external link, you can have a video opened in a picture-in-picture window (the video is displayed on top of the page when clicked. The video will be located in the lower right corner of the page and can be viewed while browsing other pages). 

Also, you can change the playback speed of the video using the keyboard (A - decrease, S - increase).

- Additional features include **handling errors from the API (network error, etc.), adaptive design for the mobile version, and code coverage with tests.**

## Stack

1) React.js
2) Typescript
3) Eslint, Prettier, Jest
4) Hls.js
5) Material UI

## Case
Genesis Front-end School 2.0. 
