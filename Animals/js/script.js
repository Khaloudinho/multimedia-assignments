(function() {

    function speak(text) {
        var msg = new SpeechSynthesisUtterance();

        msg.text = text;
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;

            msg.voice = speechSynthesis.getVoices().filter(function (voice) {
                return voice.name === "Google US English";
            })[0];
        window.speechSynthesis.speak(msg);
    }

    document.querySelector('#cat').onclick = function () {
        play(this.id);
    }
    document.querySelector('#Chewbacca').onclick = function () {
        play(this.id);
    }
    document.querySelector('#dog').onclick = function () {
        play(this.id);
    }
    document.querySelector('#lion').onclick = function () {
        play(this.id);
    }
    document.querySelector('#monkey').onclick = function () {
        play(this.id);
    }
    document.querySelector('#pig').onclick = function () {
        play(this.id);
    }
    document.querySelector('#rabbit').onclick = function () {
        play(this.id);
    }
    document.querySelector('#tiger').onclick = function () {
        play(this.id);
    }
    document.querySelector('#turkey').onclick = function () {
        play(this.id);
    }

    function play(id) {
        checkClickedAnimal(id);
        printRandomAnimal();
    }

    function printRandomAnimal() {
        var animals = ["the cat", "Chewbacca", "the dog", "the lion", "the monkey", "the pig", "the rabbit", "the tiger", "the turkey"];
        document.querySelector('h1').textContent = "Click on " + animals[Math.floor(Math.random() * 8)];
        speak(document.querySelector('h1').textContent);
    }

    function checkClickedAnimal(id) {
        if (document.querySelector('h1').textContent.indexOf(id) !== -1) {
            document.querySelector("#result").textContent = "Good answer !";
            speak("Good answer !");
        } else {
            document.querySelector("#result").textContent = "Wrong answer !";
            speak("Wrong answer !");
        }
    }

})();