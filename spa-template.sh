#!/bin/bash
echo "Enter your directory name (only lowercase):"

read project_name

cwd_my_var=$(pwd)

mkdir $project_name

cd $project_name

git init
cp -r ../package/. $cwd_my_var/$project_name

npm install --save react @types/react react-dom @types/react-dom react-router-dom @types/react-router-dom react-device-detect react-scripts
npm install --save-dev sass typescript

rm -rf ../package/ ../spa-template.sh ../.git

npm run start