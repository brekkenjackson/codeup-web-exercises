const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 1.
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const filteredLang = users.filter(user => {
     return user.languages.length >= 3;
});

console.log(filteredLang);


// 2.
// Use .map to create an array of strings where each element is a user's email address

const mappedUsers = users.map(user => {
   return user.email;
});
console.log(mappedUsers);


// 3.
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYearsSum = users.reduce((yearsOfExperience, user) => {
    console.log(yearsOfExperience);
    return   yearsOfExperience + user.yearsOfExperience;
}, 0);
console.log(totalYearsSum);
const totalYearsAverage = (totalYearsSum/5);
console.log(totalYearsAverage);


// 4.
// Use .reduce to get the longest email from the list of users.

const longEmail = users.reduce((accumulation, current) => {
    return (current.email.length > accumulation.length) ? current.email : accumulation;
}, "");
console.log(longEmail);


// 5.
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const namesList = users.reduce((user, { name }) => `${user} ${name}, `, 'Your instructors are: ').slice(0, -2) + ".";
console.log(namesList);