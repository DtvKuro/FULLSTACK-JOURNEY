Version Control.

Making a savepoint or a version.
So that if something happens, and your code is bugged.
You can load the previous version.

You can return to any version as long you know what version you want.

git init
git add file
git commit -m "message"

git status
git log

You can initialize a git repo by doing git init in the root folder, where you want everything to be track

and now in Work directory, you can git add . the file to add the files into the Staging area which will then Commit the file into Git repository.

now that our file is inside the local repository.
and that version is given a name through commit message.

So even if we mess up the file, we can still use the last version under version control using the command:

git checkout <file> to revert back to the last position in the repository

git diff <file> this is used to check the difference on both versions, so you can compare.

GIT REMOTE REPOSITORY

Create and push to a remote repository using Github.

gh repo create - to create a repo.
git remote add origin <LINK> - We are gonna make a connection from our local repository to our git repository,
(remote name)
git push -u origin main - push the files from our local repository into the git repository
(remote) (branch)
