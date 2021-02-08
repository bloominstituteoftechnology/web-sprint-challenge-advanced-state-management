# Advanced State Management Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced state management**. During this sprint, you studied **the reducer pattern, and redux**. 

In your challenge this week, you will demonstrate your mastery of these skills by creating the **Smurf Village Database**!

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge, you are to build a Smurfs village database utilizing Redux as your state management system. Build this challenge from the ground up using what you have learned about state management.

## Instructions

### Task 1: Project Setup

* [ ] Fork and clone this repository.
* [ ] Create a new working branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.
* [ ] **RUN** `npm install` to install your dependencies.
* [ ] **RUN** `npm start` to start your application.

### Task 2: CodeGrade Setup

* [ ] Open the assignment in Canvas and following along with the attached document [here.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374).
* [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>`.
* [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`
* [ ] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements

 Your finished project must include all of the following requirements.

#### [Requirement Category: Authentication]
Your finished project must include all of the following requirements:

- [ ] Plan and implement how you are going to manage your state for your application.

- [ ] You _must_ use Redux as your state management system

- [ ] Complete the tasks listed within:
        * `./reducers/index.js`
        * `./actions/index.js`
        * `./index.js`
        * `./App.js`
        * `./components/AddForm.js`
        * `./components/Smurf.js`
        * `./components/SmurfDisplay.js`

- [ ] You completed application should do the following:
        * Fetch and display data from the included server code on mounting.

        * Provide the user a form for adding in the Name, Position, Nickname and Description of a new Smurf.

        * Allow new smurfs to be added to the list when the submit smurf button is pressed.

        * Displays an error alert when name, position or nickname is not included in the submission.

        * Include the word "Error" and "name/position/nickname" in the rendered error alert as approprate.

        * Does NOT display an error alert when description is left blank.

        * Include the word "Error" and the returned server error message in the rendered error alert as approprate.

        * DO NOT REMOVE ANY data-testid FIELDS FROM THE CODE. These fields are used for internal grading of your sprints. While we don't recommend using testid in most cases, it is necessary our grading systems currently.

  **Notes:**

* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not alter your `package.json` file except to install extra libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 4: Stretch Goals

 **IMPORTANT:** Only work on stretch goals after completing your MVP!

 When completing these goals, make sure to use a **new branch** to ensure your MVP code is not overwritten. You can branch off `main` by executing `git checkout -b stretch`. When you are fully sure your stretch code is ready for feedback, merge your stretch code with main using `git checkout main` and `git merge stretch.`

  After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

* [ ] Build a smurf profile page with using react-router and dynamic url params  
* [ ] Using React Testing Library, test one or more of your components (not any component that fetches data though)

### Reference Materials

#### Resource: API documentation 

##### GET '/smurfs'

- [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `http:/localhost:3333/smurfs`.
- [ ] Double check that your response from the server is an array of smurfs.

```js
[
  {
    id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    name:'Poppa Smurf',
    position:'Village Leader',
    nickname: 'Pops',
    description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
  }
];
```

##### POST '/smurfs'

- [ ] Design the functionality to add a smurf to the Smurf DB you'll need all five fields. `name`, `position`, and `nickname`, `description`.

Example of the shape of data to be sent to the `POST` endpoint. Note that id does not need to be sent and will be generated on the server:

```js
{
  name:'Poppa Smurf',
  position:'Village Leader',
  nickname: 'Pops',
  description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
}
```

- [ ] Double check to make sure that a smurf is created correctly once your functionality is built out. Initially Poppa and Smurfette will be in the array.

**HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

Example of object created in Smurf DB:

```js
[
  {
    name:'Poppa Smurf',
    position:'Village Leader',
    nickname: 'Pops',
    description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
  },
  {
    id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
    name:'Smurfette',
    position:'Beautician',
    nickname: 'Smurfette',
    description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
  }
];
```

#### [Reference type: Hex Color Examples]

**Note** [Any information needed for processing reference]

* [Information and / or link 1]

## Submission format

* [ ] Submit via Codegrade by commiting and pushing any new changes.
* [ ] Submit a pull-request to merge <firstName-lastName> branch into main. **Please don't merge your own pull request and make sure you are on your own repo**
* [ ] Check codegrade for automated feedback.
* [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback.
* [ ] Any changes pushed to your <firstName-lastName> branch will resubmited to codegrade if pushed before the sprint challenge deadline. Changes after the deadline will not be reviewed.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
4. What is your favorite state management system you've learned and this sprint? Please explain why!