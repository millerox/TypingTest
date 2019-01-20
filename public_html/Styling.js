/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Styling {
    
    highlight(text1, text2){
        text2 = text2.replace(/ {1,}/g," ");
        var nSpaces = this.countSpaces(text2);
        
        var arrText1 = results.transferToArray(text1);
        var newContent = this.buildNewText(arrText1,nSpaces);
        
        $("#area1").html(newContent);
    }
    
    highlightMistakes(){
        
    }
    
    countSpaces(text){
        var spaces = 0;
        for(var i=0; i < text.length; i++){
            if(text[i] === " ")
            {
                spaces += 1;
            }
        }
        return spaces;
    }
    
    buildNewText(array, spaces){
        var text = "";
        
        var changed = false;
        changed = this.updateChangedStatus(array);
        var shifted = false;
        shifted = this.updateShiftedStatus(array,spaces);
        
        for(var i=0; i<array.length; i++){
            if(spaces === 1 && changed === false)
            {
                text +='<font color="lightgrey">' + " " + array[i] + " "+'</font>'+ " ";
                changed = true;
            }
            else if(spaces > 1 && shifted === false)
            {
                array = this.shiftTag(array,spaces);
                text += array[i] + " ";
                shifted = true;
            }
            else
            {
                text += array[i] + " ";
            }       
        }
        return text;
    }
    
    shiftTag(array,spaces){
        for(var i=0; i<array.length-1; i++)
        {
            //delete tag first, to avoid errors.
            if( array[i] === "</font>")
            {
                array.splice(i,1);
            }
        }
        //insert tag in the right place
        array.splice(spaces+2,0,"</font>");
        return array;
    }
    
    updateChangedStatus(arrayOfText){
        var changed = false;
        for(var i=0; i<arrayOfText.length; i++)
        {
            if(arrayOfText[i] === "</font>" )
            {
                changed = true;
                break;
            }
        }
        return changed;
    }
    
      updateShiftedStatus(arrayOfText,spaces){
        var shifted = false;
        if(arrayOfText[spaces+2] === "</font>" )
        {
            shifted = true;
        } 
        return shifted;
    }
    
    typingEffect(){
        var i = 0;
        var txt = 'My Typing Test...';
        var speed = 50;
        
        typeWriter();

        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("name").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
    }

}
