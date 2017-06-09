var vowels = ["A","E","I","O","U","a","e","i","o","u"];
var output = [];

function pigLatin(sentence){
  var newSentence = [];
  newSentence = sentence.split(" ");
  newSentence.forEach(function(word){
    if (vowels.includes(word[0])) {
      var newWord = [];
      newWord = word + "ay";
      output.push(newWord);
      return output;
    } else if (!vowels.includes(word[0])) {
      var count = 0;
      var vowelFound = false;
      var letters = word.split(" ");

      letters.forEach(function(letter){
        if (word[0] + word[1] === "qu") {
          var ending = "quay";
          count = 2;
          if (word.length!=count) {
            var preceding = [];
            preceding = word.slice(-word.length+count);
          }
          output.push(preceding+ending+"ay");
        } else {
          return output;
        }
        if (!vowels.includes(letter)&&!vowelFound) {
          count+=1;
          console.log(count);
        }else {
          vowelFound = true;
          console.log(count);
        }
        if (word.length!=count) {
          var consonant = [];
          consonant = word.splice(0, count);
          output.push(preceding+consonant+"ay");
        }else {
          output.push(word);
        }
      })
    }
    console.log(output);
  });
}
  $(document).ready(function(){
    $("#latin form").submit(function(event){
      event.preventDefault();
      var sentence = $("input#sentence").val();
      var result = pigLatin(sentence);
      $("#result").text(result);
    });

      $("#story").show();
    });
