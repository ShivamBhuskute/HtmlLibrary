let btn = document.querySelector('#newquote');

let quote = document.querySelector('.quote');

let person = document.querySelector('.person');


const quotes = [{
    quote: '"Are you lidding me"',
    person: 'Shivam'
},
{
    quote: '"am i good"',
    person: 'shivam1'
}, {
    quote: 'Is it okay',
    person: 'shivam2'
}
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});