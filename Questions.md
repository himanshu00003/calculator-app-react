## What is Git?
Version control system is a tool that helps to track changes in code.
It tracks all the changes made to it - when did the change happen, who did that and everything.

## What is Github?
Website that allows developers to store and manage their code using Git.
[Github](https://github.com)

Version - git --version
<br>

Clone - git clone *paste some link here*
<br>
_Its to clone a project in local machine_

List Files - ls
To view hidden files or to see all files ->  ls -a

## Status - git status

1. Untracked - New files git dosen't track yet
2. Modified - Changed
3. Staged - File is ready to be commited
4. Unmodified - Unchanged

## Add & Commit
1. - To Add - git add *file name*
<br>
   - To add many changes ->  git add .
  
  <br>

2. - It is the record of change -> git commit -m "some message"

## Push - Upload local repo content to remote repo -

command -> git push origin main

<br>

## Init - Used to create a new git repo

- git init
- git remote add origin *link*
- git remote -v (to verify remote)
- git branch (to check branch)
- git branch -M main (to rename branch)
- git push origin main
  
## To exit a directory
- cd ..
  
### To make a directory
- mkdir *FolderName* 
<br>
- To make a localfolder associated with git
  
- Go to the folder by cd then write git init.
- Then after making all the changes we check their status and add them all by-> git add .
- Then we commit them with a message ->  git commit -m "some message"

## After we create a new folder/repository on out VsCode and now we want to push them-
1. We will go to github and create a folder & don't make readme file as we will have to import it t our local machine if we made one.
2. Then after making repo on github we will copy the link and write git remote add origin *paste link here* 
3. (Basically now we will use Init commands here which we have written above ⬆️).Then we will check its remote status by -> git remote -v 
4. Then we can use git branch command to check on which branch we are on.
5. And now we will change out default name "Master" to "main" because we have written main everywhere.
6. Now we will finally push by command -> git push -u origin main    By doing this we are telling that we will use same branch for lots of time and to not write full command we can write git push only and not full command.


## Branch Commands
1. git branch (to check branch)
2. git checkout -b *BranchName*(to create a branch)
3. git branch -M main (to rename branch)
4. git checkout *BranchName* (to navigate)
5. git checkout -d *BranchName*




