$(function(){

  var $breeds = $('#breeds');
  var $imageContainer= $('#imageContainer');
  var $closeButton = $('#closeButton');

  $.ajax({

     type:'GET',
     url: 'https://dog.ceo/api/breeds/list/all',
     dataType:'text',
     success: function(breed){
       var breedsObj = JSON.parse(breed);
       $.each(breedsObj.message, function(key, value){
         $breeds.append('<option value='+key+'\'>'+key+'</option>;');
       });
       }
     });

     $(document).ready(function(){
     $('#submitButton').on('click',function(){

       $.ajax({
         type:'GET',
         url:'https://dog.ceo/api/breed/'+ ($("#breeds option:selected").text()) +'/images/random',
         dataType:'text',
         success: function(response){
           var imageUrl = JSON.parse(response).message;
           $imageContainer.append('<img class=\'image\' src='+imageUrl+'>');
         }});


     });
   });


   $('body').on('click','img',function(){
     this.remove();
   })





});
