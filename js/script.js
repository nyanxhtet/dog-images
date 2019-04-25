var dogs = (function(){

  var $breeds = $('#breeds');
  var $imageContainer= $('#imageContainer');
  var $closeButton = $('#closeButton');


  function getBreedList (){

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
   };

   function getBreedImage(){
       $.ajax({
         type:'GET',
         url:'https://dog.ceo/api/breed/'+ ($("#breeds option:selected").text()) +'/images/random',
         dataType:'text',
         success: function(response){
           var imageUrl = JSON.parse(response).message;
           $imageContainer.append('<img class=\'image\' src='+imageUrl+'>');
         }});
     };




return{
  getBreedList: getBreedList,
  getBreedImage: getBreedImage,
};

})();

dogs.getBreedList();

$(document).ready(function(){
$('#submitButton').on('click',function(){
  dogs.getBreedImage();
});

});
