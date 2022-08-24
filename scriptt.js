let btn = document.getElementById('btn');
output = document.getElementById('output');
let quotes =
    [
        '"Life is not about waiting for the storm to pass, its about learning to dance in the rain." - Vivian Greene',
        '"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, its not." - Elon Musk',
        '"The art of life is the art of avoiding pain." - Thomas Jefferson',
        '"Life is like riding a bicycle. To keep your balance, you must keep moving." — Albert Einstein',
        '“If you tell the truth, you do not have to remember anything.” ― Mark Twain',
        '“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard',
        '"When you reach the end of your rope, tie a knot in it and hang on." - Franklin D Roosevelt',
        '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
        '"It is during our darkest moments that we must focus to see the light." - Aristotle',
        '"Life is really simple, but we insist on making it complicated." - Confucius',
        '"The secret of success is to do the common thing uncommonly well." - John D. Rockefeller Jr.',
        '"If you are not willing to risk the usual, you will have to settle for the ordinary." - Jim Rohn',
        '"You miss 100% of the shots you do not take." - Wayne Gretzky',
        '"Believe you can and you are halfway there." - Theodore Roosevelt', 
        '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us." - Helen Keller',
        '"Yesterday is a history, tomorrow is a mystery, but today is a gift. Thats why we call it the present." - Winnie the Pooh',


    ];

btn.addEventListener('click', function(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)] 
    output.innerHTML = randomQuote;
    
})
