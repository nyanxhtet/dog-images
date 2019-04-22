$function(){

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





});
