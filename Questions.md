## Question ->

<br>

## What is Git?

Version control system is a tool that helps to track changes in code.
It tracks all the changes made to it - when did the change happen, who did that and everything.

## What is Github?

Website that allows developers to store and manage their code using Git.
[Github](https://github.com)

Version - git --version
<br>

Clone - git clone _paste some link here_
<br>
_Its to clone a project in local machine_

List Files - ls
To view hidden files or to see all files -> ls -a

## Status - git status

1. Untracked - New files git dosen't track yet
2. Modified - Changed
3. Staged - File is ready to be commited
4. Unmodified - Unchanged

## Add & Commit

1. - To Add - git add _file name_
     <br>
     - To add many changes -> git add .

  <br>

2. - It is the record of change -> git commit -m "some message"

## Push - Upload local repo content to remote repo -

command -> git push origin main

<br>

## Init - Used to create a new git repo

- git init
- git remote add origin _link_
- git remote -v (to verify remote)
- git branch (to check branch)
- git branch -M main (to rename branch)
- git push origin main

## To exit a directory

- cd ..

### To make a directory

- mkdir _FolderName_
  <br>
- To make a localfolder associated with git
- Go to the folder by cd then write git init.
- Then after making all the changes we check their status and add them all by-> git add .
- Then we commit them with a message -> git commit -m "some message"

## After we create a new folder/repository on out VsCode and now we want to push them-

1. We will go to github and create a folder & don't make readme file as we will have to import it t our local machine if we made one.
2. Then after making repo on github we will copy the link and write git remote add origin _paste link here_
3. (Basically now we will use Init commands here which we have written above ⬆️).Then we will check its remote status by -> git remote -v
4. Then we can use git branch command to check on which branch we are on.
5. And now we will change out default name "Master" to "main" because we have written main everywhere.
6. Now we will finally push by command -> git push -u origin main By doing this we are telling that we will use same branch for lots of time and to not write full command we can write git push only and not full command.

## Branch Commands

1. git branch (to check branch)
2. git checkout -b _BranchName_(to create a branch)
3. git branch -M main (to rename branch)
4. git checkout _BranchName_ (to navigate)
5. git checkout -d _BranchName_

# Question -> What is API?

<br>

API stands for application programming interface .
API acts as a messenger that lets one app talk to another.
It allows app to share data with each other.
or <br>
It is set of rules that lets different software applications communicate and share data or functionality without knowing their internal details.

# Question -> What are different API Methods?

<br>

1. Get - Used to get/retrieve data from the server.
2. Post - Used to send data to the server.
3. Put - Used to update data to the server.[Replaced entire part]
4. Patch - Used to make partial updates.[Updates only specific part]
5. Delete - Used to delete data from the server.

# Question -> How to use JWT authentification?

<br>

JSON Web Token is a safe and secure way to transmit information between client and server.

Example - JWT is like the token you get when logging into a banking website. After you enter your credentials (username and password), the server gives you a token as proof that you’re logged in. This token is sent with every request you make, so you don’t have to re-enter your credentials each time.
