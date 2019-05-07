var dogs = (function(){

  var $breeds = $('#breeds');
  var $imageContainer= $('#imageContainer');

  function getBreedList (){
    $.ajax({
      type:'GET',
      url: 'https://dog.ceo/api/breeds/list/all',
      dataType:'text',
      success: function(breed){
        var breedsObj = JSON.parse(breed);
        $.each(breedsObj.message, function(key){
          $breeds.append('<option value='+key+'\'>'+key+'</option>;');
        });
        $('#submitButton').on('click',function(){
          dogs.getBreedImage();
        });
      }
    });
  }

  function getBreedImage(){
    $.ajax({
      type:'GET',
      url:'https://dog.ceo/api/breed/'+ ($('#breeds option:selected').text()) +'/images/random',
      dataType:'text',
      success: function(response){

        showModal();

        var imageUrl = JSON.parse(response).message;

        $imageContainer.append('<div class=\'modal\'> </div>');

        $('.modal').append('<img class=\'image\' src='+imageUrl+'>');

        $('.modal').append('<button class=\'modal-close\'> Close </button>');

        $('.modal-close').on('click', function(){
          hideModal();
        });
      }});

    }

    function showModal(){
      $imageContainer.addClass('visible');
    }

    function hideModal(){
      $imageContainer.removeClass('visible');
      $imageContainer.html('');
    }
    $imageContainer.on('click', function (e) {
      var $target = e.target;
      if ($target === $imageContainer[0]){
        hideModal();
      }
    });


    return{
      getBreedList: getBreedList,
      getBreedImage: getBreedImage,
      showModal: showModal,
      hideModal: hideModal,
    };

  })();



  $(document).ready(function(){
    dogs.getBreedList();
    $(document).on('keyup', function(e){
      if(e.keyCode === 27){
        dogs.hideModal();
      }
    })

  });
