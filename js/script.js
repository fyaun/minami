$(function() {

    // ハンバーガー
    $('.drawer-icon').on('click', function(e) {
        e.preventDefault();
      
        $('.drawer-icon').toggleClass('is-active');
        $('.drawer-content').toggleClass('is-active');
        $('.drawer-background').toggleClass('is-active');
      
        return false;
      });
    
    //swiper
      const slide0 = new Swiper('.slide0', {
        // Optional parameters
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          //クリック時に写真もスライド
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
    
      const slide1 = new Swiper('.slide1', {
        speed: 8000,
        slidesPerView: '2',
        loop: true,
        allowTouchMove: false, // スワイプ操作をできないようにする
        autoplay: {
          delay: 1,　// 1にすることで流れ続けるようになる
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: '4',
          }
        }
      
      });
    
    
    $(window).scroll(function(){
    
        if($(this).scrollTop() > 80) {
            $(".to-top").fadeIn();
        } else {
            $(".to-top").fadeOut();
        }
    });
    
    $(".to-top").click(function(){
        $("body, html").animate({
            scrollTop: 0
        }, 500);
    });
    
    // 下線をつける
    $('.header-nav li a').on('click', function() {
      $('.header-nav li a').removeClass('is-action');
      $(this).addClass('is-action');
    });
    
    //ページネーション
    $('.archive-page-button-white').on('click', function() {
      $('.archive-page-button-white').removeClass('is-action');
      $(this).addClass('is-action');
    });
    
    
    
    // ページ内リンク
    $('a[href^="#"]').on('click', function(){
    
      //headerの高さを取得
      let header = $('.header').innerHeight();
      // idを取得
      let id = $(this).attr('href');
      // 位置を取得
      let position = $(id).offset().top - header;
      console.log(id);
      console.log(position);
      
    
        $("html, body").animate({
            scrollTop: position
        }, 500);
    
    });
    
    //別ページでのページ内リンク　ずれを直す
    $(window).on('load', function() {
      let headerHeight = $('.header').outerHeight();
      let urlHash = location.hash;
      if (urlHash) {
        let position = $(urlHash).offset().top - headerHeight;
        $('html, body').animate({ scrollTop: position }, 0);
      }
    });
    
    
    
      // form validation
      (function() {
        var requireFlg = false;
        var privacyFlg = false;
        var $require = $( '#js-contactForm .js-require' );
        var fillCount = 0;
    
        function setSubmitProp() {
          if( requireFlg && privacyFlg ) {
            $( '#form-submit' ).prop( 'disabled', false );
          } else {
            $( '#form-submit' ).prop( 'disabled', true );
          }
        }
    
        // 必須項目
        $require.on( 'blur', function() {
          if( $( this ).attr( 'id' ) === 'js-formKana' && !$( this ).val().match( /^([ァ-ン]|ー)+$/ ) ) {
            $( this ).val( '' );
            alert( '全角カタカナで入力してください。' )
          }
    
    
          $require.each( function() {
            var value = $( this ).val();
    
            if( ( value !== '' && value.match( /[^\s\t]/ ) ) ) {
              fillCount++;
            }
          });
    
          requireFlg = ( fillCount === $require.length ? true : false );
    
          setSubmitProp();
          fillCount = 0;
        });
    
      })();
    
    
        $('form').find('input').removeAttr('required max min maxlength pattern');
    
      //google form
      let $form = $('#js-contactForm')
      $form.submit(function(e) { 
        $.ajax({ 
         url: $form.attr('action'), 
         data: $form.serialize(), 
         type: "POST", 
         dataType: "xml", 
         statusCode: { 
            0: function() { 
              //送信に成功したときの処理 
              $form.slideUp()
              $( '#js-success' ).slideDown()
            }, 
            200: function() { 
              //送信に失敗したときの処理 
              $form.slideUp()
              $( '#js-error' ).slideDown()
            }
          } 
        });
        return false; 
    
      }); 
    
    
    
    
    });