/** @type {import('tailwindcss').Config} */
/*eslint-disable */
module.exports = {
  mode: "jit",
  content: [
  "./index.html",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor:{
        mainBg: "hsl(215, 28%, 17%)",
      },
      minWidth: {
        onehundred: "100%",
        ninty: "90%",
        eighty: "80%",
        fifty: "50%",
        forty: "40%",
        thirtythree: ": 33.333333%",
      },
      maxWidth: {
        onehundred: "100%",
        ninty: "90%",
        sixty: "60%",
        forty: "40%",
        eighty: "80%",
        fifty: "50%",
        fortyFive: "45%",
        thirtythree: ": 33.333333%",
      },
      height: {
        onehundred: "100%",
        nintyFive: "95%",
        ninty: "90%",
        eighty: "80%",
        seventy: "70%",
        sixty: "60%",
        fifty: "50%",
        fortyFive: "45%",
        forty: "40%",
        thirty: "30%",
        twenty: "20%",
      },
      width: {
        onehundred: "100%",
        nintyfive: "94%",
        nintyfour: "94%",
        nintythree: "93%",
        ninty: "90%",
        eighty: "80%",
        seventy: "70%",
        fifty: "50%",
        forty: "40%",
        thirty: "30%",
      },
      top: {
        ninty: "90%",
        forty: "40%",
        eighty: "80%",
        fifty: "50%",
      },
      maxHeight: {
        onehundred: "100%",
        ninty: "90%",
        sixty: "60%",
        forty: "40%",
        eighty: "80%",
        fifty: "50%",
        fortyFive: "45%",
        thirtythree: ": 33.333333%",
      },
      minHeight: {
        onehundred: "100%",
        ninty: "90%",
        sixty: "60%",
        forty: "40%",
        eighty: "80%",
        fifty: "50%",
        fortyFive: "45%",
        thirtythree: ": 33.333333%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("flowbite/plugin")],

};