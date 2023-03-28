const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((title) => {
    return title
      .split(" ")
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
      .join(" ");
  });
};

// const titleCased = () => {
//   const titlesArr = tutorials.map(title => {
//     const slicedTitle =  title.split(' ')
//     const upperCasedTitle = slicedTitle.map(x => x.charAt(0).toUpperCase() + x.slice(1) )
//     const joinedTitle = upperCasedTitle.join(' ')
//     return joinedTitle
//   })
//   return titlesArr
// }

// const title = 'implementing Blockchain Web API';
// const sliced =  title.split(' ')
// const x = sliced.map(x => x.charAt(0).toUpperCase() + x.slice(1) )
// const joinedTitle = x.join(' ')
// console.log(joinedTitle)
