class SpeedTypingGame{
    constructor(totalTime){
        this.timeRemaining = totalTime;
        this.startButton = document.getElementById("start-btn");
        this.textArea = document.getElementById('userInput');
        this.timer = document.getElementById('timer');
        this.totalTime = totalTime;
        this.quotes = [
        'a red flare silhouetted the jagged edge of a wing',
        'the sky was cloudless and of a deep dark blue',
        'all their equipment and instruments are alive',
        'the recorded voice scratched in the speaker'];
        this.currentQuoteIndex = 0;
        this.sentencesDisplayed = document.getElementById('sentencesDisplay');
        this.nextButton = document.getElementById('next-btn');
        this.restartMessage = document.getElementById('restart-msg');
        this.timeRemainingMsg = document.getElementById('timerRemining');
        this.info = document.getElementById('info');
    }

    startGame(){
        this.timeRemaining= this.totalTime;
        this.startButton.classList.add('hide');
        this.timer.innerText = this.timeRemaining;
        this.textArea.classList.remove('hide');
        this.restartMessage.classList.add('hide');
        this.textArea.value="";
        
        setTimeout(() => {
            this.shuffledQuotes(this.quotes)
            this.countdown = this.startCountdown();
        }, 100)
    };

    shuffledQuotes(quotes){
        quotes.sort(() => Math.random() - .5)
        this.sentencesDisplayed.textContent = quotes[this.currentQuoteIndex]
    };

    startCountdown(){
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0){
                this.gameOver();
            }
        }, 1000)
    };

    gameOver(){
        clearInterval(this.countdown);
        this.timer.textContent = `GAME IS OVER`;
        this.textArea.classList.add('hide');
        this.startButton.classList.remove('hide');
        this.startButton.innerText = `Restart`;
        this.sentencesDisplayed.classList.add('hide');
        this.currentQuoteIndex=0;
    }

    textAreaTest(){
            if(this.textArea.value === this.sentencesDisplayed.innerText){
             this.victory();
        };
    }

    victory() {
        clearInterval(this.countdown);
        clearTimeout(this.timeRemaining);
        this.timer.innerText=`CORRECT`;
        this.textArea.value='';
        this.sentencesDisplayed.classList.add('hide');
        this.nextButton.classList.remove('hide');
    }

    nextQuote(){
        this.currentQuoteIndex++;
        this.nextButton.classList.add('hide');

        if(this.currentQuoteIndex >= this.quotes.length){
            this.restartMessage.classList.remove('hide');
            this.startButton.innerText = `Restart`;
            this.startButton.classList.remove('hide');
            this.currentQuoteIndex = 0;
            this.textArea.classList.add('hide');
            this.info.classList.add('hide');

            
        }else{
            this.timeRemaining=this.totalTime;
            this.sentencesDisplayed.classList.remove('hide');
            this.textArea.value='';
            this.sentencesDisplayed.innerText = this.quotes[this.currentQuoteIndex];
            this.countdown = this.startCountdown();
            this.timer.innerText = this.timeRemaining;





            

        }

        
    }
}



if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready();
}



function ready() {

    let startButton = document.getElementById('start-btn');
    let stg = new SpeedTypingGame(10);
    let textArea = document.getElementById('userInput');
    let nextButton = document.getElementById('next-btn');
    let sentencesDisplayed = document.getElementById('sentencesDisplay');
    let info = document.getElementById('info');

    startButton.addEventListener('click', () => {
        sentencesDisplayed.classList.remove('hide');
        this.info.classList.remove('hide');
        stg.startGame();
        
    });

    textArea.addEventListener('keyup', () => {
        stg.textAreaTest();
    })

    nextButton.addEventListener('click', () => {
        stg.nextQuote();
    })
}









 /*this.quotes = [ 'I feel no need for any other faith than my faith in human beings. Like Confucius of old, I am so absorbed in the wonder of earth and the life upon it that I cannot think of heaven and the angels. I have enough for this life. If there is no other life, then this one has been enough to make it worth being born, myself a human being.',
         'You must intensify and render continuous by repeatedly presenting with suggestive ideas and mental pictures of the feast of good things, and the flowing fountain, which awaits the successful achievement or attainment of the desires.',

        'President Bush was once asked which Presidential speech he admired most. He replied that it was the one Teddy Roosevelt had in his pocket that had helped cushion the blow of a would-be assassin bullet.',

    'I know no method to secure the repeal of bad or obnoxious laws so effective as their stringent execution.',
    'Choose your friends carefully, for you will tend to be like them and be found where they choose to go.',
]*/
     