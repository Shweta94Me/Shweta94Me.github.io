$(document).ready(function () {
    setTimeout(()=>{
        $('#loading').fadeOut();
    }, 1000);
    screenHeight = screen.height + 'px';
    // $('#home').css('height', '100vh');
    $('[data-toggle="tooltip"]').tooltip()
    $('.menu-item').click(function () {
        $('.menu-open').prop('checked', false);
        $('#circularMenu1').toggleClass('active');
        $('body').css('overflow-y', 'visible');
        $('.sm-container').css('opacity', '1');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('#circularMenu1').css('opacity', '0.7');
        } else {
            $('#circularMenu1').css('opacity', '1');
        }
    });
    $(".menu-open").click(function (e, parameters) {
        $('#circularMenu1').toggleClass('active');
        var nonUI = false;
        try {
            nonUI = parameters.nonUI;
        } catch (e) {}
        var checked = nonUI ? !this.checked : this.checked;
        if (checked) {
            $('#circularMenu1').css('opacity', '1');
            $('body').css('overflow-y', 'hidden');
            $('.sm-container').css('opacity', '0.2');
            $('.sm-container').css('transition', 'opacity .5s ease-in-out');
        } else {
            $('body').css('overflow-y', 'visible');
            if ($(window).scrollTop() >= 100) {
                $('#circularMenu1').css('opacity', '0.7');
            } else {
                $('#circularMenu1').css('opacity', '1');
            }
            $('.sm-container').css('opacity', '1');
        }
    });
    $('.sm-container').on('click touchstart', function () {
        if ($('.menu-open').is(":checked")) {
            $('.menu-open').prop('checked', false);
            $('#circularMenu1').toggleClass('active');
            $('body').css('overflow-y', 'visible');
            $('.sm-container').css('opacity', '1');
        }
    });
     // Select and loop the container element of the elements you want to equalise
     $('.carousel-inner').each(function(){  
      
        // Cache the highest
        var highestBox = 0;
        
        // Select and loop the elements you want to equalise
        $('.col-md-4', this).each(function(){
          
          // If this box is higher than the cached highest then store it
          if($(this).height() > highestBox) {
            highestBox = $(this).height(); 
          }
        
        });  
              
        // Set the height of all those children to whichever was highest 
        $('.col-md-4',this).height(highestBox);
                      
      }); 
    //   $(window).on('resize', ()=>{
    //     $('#home').css('height', '100vh');
    //   })
    // Get cards
    let cards = $('.card-block');
    let maxHeight = '0';

    //Loop all cards and check height, if bigger than max then save it
    for (let i = 0; i < cards.length; i++) {
    if (maxHeight < $(cards[i]).innerHeight()) {
        maxHeight = $(cards[i]).innerHeight();
    }
    }
    //Set ALL card bodies to this height
    for (let i = 0; i < cards.length; i++) {
    $(cards[i]).height(maxHeight);
    }
});