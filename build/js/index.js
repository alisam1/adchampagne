
$( document ).ready(function() {

    /* Header language select */

    $('.langArea').click(function(){
    $('.language-select').toggleClass('open');
    })

    $('.language-select li').click(function(e){
    var setLang = $('.language-select').data('location'),
        dataLangSelect = $(this).data('lang')
        $('.language-select').data('location', dataLangSelect);
        $('.language-select li').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active')
        $('.language-select').removeClass('open');

        result = $('.language-select li.active');
        if($(this).data('lang') === 'en'){
            $('.langArea').html('<p><span><img src="img/en.svg" alt="En"></span>Анг.</p>');
            console.log(456);
        } else if ($(this).data('lang') === 'ru'){
            $('.langArea').html('<p><span><img src="img/ru.svg" alt="Ru"></span>Рус.</p>');
        } else if ($(this).data('lang') === 'ch'){
            $('.langArea').html('<p><span><img src="img/ch.svg" alt="Ch"></span>Кит.</p>');
        } else {
            $('.langArea').html('<p><span><img src="img/ru.svg" alt="Ru"></span>Рус.</p>');
        }
    });

    /* Mobile menu */
      $('.header__mobile').click(function(){
        $('.header__right').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.header__mobile').removeClass('open');
			} else {
                $('.header__right').css('display', 'flex');
				$('.header__mobile').addClass('open');
			}
		});
		return false;
      });

      /* Language mobile closw */
      if($('.language-select.open')){
          $('.language-select__close').click(function(){
            $('.language-select').addClass('close');
          });
      }

    /* Download link */

    let googlePlayUrl = $( ".open-world__googleplay").hasClass( "active" );
    let appStoreUrl = $('.open-world__appstore .active');

     $('a.open-world__googleplay[href="https://play.google.com/store/"]').each(function() {
        $('.open-world__googleplay').addClass('active');
        $('.open-world__description').css('display', 'block');
        $('.navigation__item--download').css('display', 'flex');
        $('.open-world__lead').css('display', 'none');
        $('.world__description').text('Присоединяйся и открой для себя невероятный мир путешествий с MapKlap')
    });

    $('a.open-world__googleplay[href="#"]').each(function() {
        $('.open-world__googleplay').removeClass('active');
    });

    $('a.open-world__appstore[href="https://www.apple.com/ru/app-store/"]').each(function() {
        $('.open-world__appstore').addClass('active');
        $('.open-world__description').css('display', 'block');
        $('.navigation__item--download').css('display', 'flex');
        $('.open-world__lead').css('display', 'none');
        $('.world__description').text('Присоединяйся и открой для себя невероятный мир путешествий с MapKlap')
    });

    $('a.open-world__appstore[href="#"]').each(function() {
        $('.open-world__appstore').removeClass('active');
    });

   if ($( ".open-world__googleplay" ).hasClass( "active" )) {
         $('.open-world__soon--appstore').css('display', 'block');
         $('.open-world__up--appstore').css('display', 'none');
         $('.open-world__soon--googleplay').css('display', 'none');
         $('.open-world__up--googleplay').css('display', 'block');
         console.log(231);
         return false;
    } else if ($( ".open-world__appstore" ).hasClass( "active" )) {
         $('.open-world__soon--googleplay').css('display', 'block');
         $('.open-world__soon--appstore').css('display', 'none');
         $('.open-world__up--appstore').css('display', 'block');
         $('.open-world__up--googleplay').css('display', 'none');
    } else {
         console.log(431);
    };

})
