# setup proj from git

1 clone repoo
2 move in directoryy
3 npm install i
4 run server




This is for mySelf 

# setup tailwind 

1 install tailwind
npm install -D tailwindcss postcss autoprefixer

2 npx tailwindcss init

3   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],"./index.html",
in config file

4 in index.css c&v 

@tailwind base;
@tailwind components;
@tailwind utilities;

5 npx tailwind init -p

and add margin etc



5 All dependency 

 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

 add plugins of daisyui at tailwind


 6 browser router wrap in main.jsx to enable react-router-dom capabilities and toaster


 7 mention route at app.jsx

 8 Redux 
 Redux folder inside folder Slices folder and store file 

 we are using toolkit so config store

 move to store for more info

 9 creating 1 slice authslice.js

 now in authslice.jsx
 only import createSlice
 const initialstate={}
 and
 const authSlice=createSLice({
    name:auth;
    initialstate
    reudcers
 })

export default authslice.reducer


now move to store and add authreducer in reducers

10 import axios using common axios instance so helper folder in which axiosinstance 

11 footer 
Components folder in which footer file

12 layout

header and footer bhi pass karskte the but limitations kahi par sidebar kahi par header  therefore layout ek child expect karega and waha render kardega

13 Pages 
homepage