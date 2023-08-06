# <cautious-carnival>
NoSQL: Social Network API

## Description
A human's core need is communication. I want to build an API for a social network web application. The users can share their thoughts, react to friends’ thoughts, and create a friend list. This will satisfy the need and desire to connect and communicate. This will be accessible through their fingertips with the help of my API.  
The biggest thing I learned in this challenge was how to restructure code and make it easiar to read. I still have alot of work to do, but I am proud that I was able to get all my CRUD routes working for the backside. 

## Table of Contents
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Test](#test)
- [ScreenShots](#screenshots)
- [Credit](#credit)
- [License](#license)
- [Demo Link](#demo-link)
- [GitHub Repo](#github-repo)

## Installation
* MongoDB https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb
* Insomnia  https://docs.insomnia.rest/insomnia/install
* Code editor  https://code.visualstudio.com/download
* Command Line like GitBash https://github.com/git-guides/install-git
* Git Clone my Repo at https://github.com/abisinchan/cautious-carnival

### Dependencies
* "express": "^4.17.1",
* "mongoose": "^7.0.2"
* npm install to bring in libraries of dependencies
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

Please have the required installions installed from above.  
After installations is complete, please go and clone my repo at my github link.  
Bring the code into your local computer and open it in VS Code.  

## Usage
So collectively you’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site. packages. The native JavaScript Date object was used to format timestamps.  
Once everything is set in VS code, pull up your command line.  
Run npm start  
You are now able to access the server from insomnia.

## Test
There are no test seed data so you will have to create it on your own.
Create this structure and test your CRUD routes from the routes folder with correct endpoints.


* User (Folder)
    * Get users- for all users
    * Get - for one by user id
    * Post - to create user
    * Put - to update user by user id
    * Delete - by user id

Testing Json Data Sample:
```
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}

```

* Friends (Folder)
    * Post - to add friend
    * Delete -to delete friend

Testing Json Data Sample:
```
// post
{
  "username": "carolina",
  "email": "carol@gmail.com"
}
```

* Thoughts (Folder)
    * Get - for all thoughts
    * Get - for one by thought id
    * Post - to create thought
    * Put - to update thought by thought id
    * Delete - by thought id

Testing Json Data Sample:
```
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}

```
* Reactions (Folder)
    * Post - to add reaction to a thought post by thought id
    * Delete -to delete reaction to a thought post by reaction id and thought id

Testing Json Data Sample:
```
{
  "reactionText": "I am unbothered by galaxies.",
  "username": "angelila"
}
```
## ScreenShots
![1](https://github.com/abisinchan/cautious-carnival/assets/132783183/582fb359-0173-40a6-be81-847da6771f98)
![2](https://github.com/abisinchan/cautious-carnival/assets/132783183/78d920ae-94c5-413b-868b-189336369bb6)
![3](https://github.com/abisinchan/cautious-carnival/assets/132783183/f24206f4-1c28-4608-91e7-7c7c461bff86)
![4](https://github.com/abisinchan/cautious-carnival/assets/132783183/cc76e42c-33cd-4b94-9328-2af99da1c891)
![5](https://github.com/abisinchan/cautious-carnival/assets/132783183/dc7b3e9a-db3e-4fc5-88a5-3601dbcf32ae)

## Credits
N/A

## License
MIT

## Demo Link
https://drive.google.com/file/d/1JzAwnXiZWGne3I_krJpWt1iD9vsa0Ss2/view?usp=sharing

## GitHub Repo
https://github.com/abisinchan/cautious-carnival/