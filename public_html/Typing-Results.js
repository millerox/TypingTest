



class Results{
  
    constructor(){
        this.errors = 0;
        this.speed = 0;
        this.accuracy = 0;
    }
    
  detectErrors(randomP, newText, event) {
    randomP = this.transferToArray(randomP);
    randomP = this.ignoreStyling(randomP);
    
    //delete multiples spaces from area 1
    newText = newText.replace(/ {1,}/g," ");
    newText = this.transferToArray(newText);
   
    this.errors = 0;
    
    for (let a=0, b=0; a < newText.length; a++, b++) 
    {
        var word = randomP[b];
        var newWord = newText[a];
      
        // check "by words" first, if mismatch detected, see how many errors exactly. 
        if(word !== newWord)
        {
            //shift comparison if a WORD was missed
            if(newWord === randomP[b+1])
            {   
                this.errors += word.length;
                //display errors
                $("#errors").html(this.errors);
                a--;
                continue;    
            }
            //shift comparison if an extra WORD has been inserted
            if(newText[a+1] === randomP[b])
            {
                this.errors += newWord.length;
                //display errors
                $("#errors").html(this.errors);
                a++;
                continue;
            }
            //shift comparison if a LETTER was missed/or an extra inserted
            for(let j=0, k=0; j<word.length || j<newWord.length; j++, k++) 
            {
                //check for misspelled letters
                if(word[k]!== newWord[j])
                {   
                    this.errors += 1;
                    //shift comparing forward if a letter was missed
                    if(newWord[j] === word[k+1])
                    {
                        k++;
                        continue;
                    }
                    //shift comparing backward if an extra letter was inserted
                    if(newWord[j+1] === word[k])
                    {
                        j++;
                        continue;
                    }
                } 
            }
        } 
        //if the last keypress was "space", calculate mistakes and move to the next word
        // ignore multiple spaces
        if(event.keyCode === 32 && event.keyCode !== prev_keypress)
        {
            //display errors
            $("#errors").html(this.errors);
            continue;
        }
        // TO DO:
        // do NOT detect errors after the text is over ??
        // if a SPACE IS MISSED
        // if the LAST LETTER IS MISSED
    } 
  } 
  
  ignoreStyling(text){
      for(var i=0; i<text.length; i++)
      {
          if(text[i] === "<font")
          {
              text.splice(i,2);
          }
          if( text[i] === "</font>")
          {
              text.splice(i,1);
          }
      }
      return text;
  }
  transferToArray(string){
      var arrayOfWords = string.split(" ");
      //delete empty elements:
        for(var i=0; i<arrayOfWords.length; i++)
      {
          if(arrayOfWords[i] === "")
          {
              arrayOfWords.splice(i,1);
          }
      }
      return arrayOfWords;
  }
  
  displayResults(strText,min){
      var grossSpeed = this.calculateGrossSpeed(strText, min);
      this.speed = this.calculateNetSpeed(grossSpeed,this.errors,min);
      this.accuracy = this.calculateAccuracy(strText, this.errors);
      
      $("#speed").html(this.speed + " WPM");
      $("#accuracy").html(this.accuracy + " %");
  }
  
  calculateGrossSpeed(strText,min){
    var intGross = (strText.length/5)/ min;
    return intGross;
  }
  
  calculateNetSpeed(gross, errors, min){
      var errorRate = errors/min;
      var netSpeed = Math.floor((gross - errorRate));
      
      return netSpeed;
  }
  
  calculateAccuracy(text, errors){     
      var accuracy = Math.floor(((text.length - errors)/ text.length)*100);
      return accuracy;
  } 
  
  resetResults(){
      $("#speed").html("...");
      $("#accuracy").html("...");
      $("#errors").html("...");
  }
}