function speak_hello()
{
    var synth = window.speechSynthesis;
    speak_data="안녕하세요";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function speak_how_r_u()
{
    var synth = window.speechSynthesis;
    speak_data="잘 지냈어요";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}