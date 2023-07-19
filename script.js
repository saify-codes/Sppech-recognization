var textarea = document.getElementById('prompt')
var button = document.getElementById('btn')



function foo(){
    var text = textarea.value
    var speech = new SpeechSynthesisUtterance()
    speech.text = text
    speech.rate = 1
    speech.pitch = 2
    speechSynthesis.speak(speech)
}


button.addEventListener('click',foo)