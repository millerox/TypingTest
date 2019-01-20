/*jshint esversion: 6 */

class Area_2{

  getAreaContent(){
   var content = $('#area2').val();
   return content;
  }

  hideArea(){
    $(".area2").hide();
  }

  showArea(){
    $(".area2").show();
  }
  
  preventCheating(){
     $('#area2').on("cut copy paste",function(e) {
     e.preventDefault();
 });
  }
}