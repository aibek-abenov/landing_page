jQuery(function($){

    // window.location.href = "http://stackoverflow.com";

    // snow on screen
    // $.fn.snow(); //

    // ie 9 placeholder activate
    $('input, textarea').placeholder();

    // hide error label for all
    $("input").on("click", function(){
        $(this).prev().fadeOut();
    });

	// reviews carousel
	$('#slick-reviews').slick({
        autoplay: false,
        autoplaySpeed: 10000,
        speed: 500,
        prevArrow: '<div class="section4-reviews-prev"></div>',
        nextArrow: '<div class="section4-reviews-next"></div>'
	});

    /* ==========================================================================
    top form
    ========================================================================== */
    $("#form-top-submit").click(function(){
        // собираем данные с формы
        var phone = $('.form-top-phone').val();
        // отправляем данные
        $.ajax({
            url: "send.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "top-form": phone
            },
            // после получения ответа сервера
            success: function(data){
                var url = "success.html";    
                $(location).attr(data.url,url);

                $(data.error).fadeIn("fast"); // ошибка отправки
                $(".form-top-phone").val("");
            }
        });
    });

    /* ==========================================================================
    bottom form
    ========================================================================== */
    $("#form-bottom-submit").click(function(){
        // собираем данные с формы
        var phone = $('.form-bottom-phone').val();
        // отправляем данные
        $.ajax({
            url: "send.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "bottom-form": phone
            },
            // после получения ответа сервера
            success: function(data){
                var url = "success.html";    
                $(location).attr(data.url,url);

                $(data.error).fadeIn("fast");
                $(".form-bottom-phone").val("");
            }
        });
    });

    /* ==========================================================================
    catalog forms
    ========================================================================== */
    $(".js-order-btn").on("click", function(){
        var phone = $(this).parent().prev().children(".js-phone").val();
        // отправляем данные
        $.ajax({
            context: this,
            url: "send.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "catalog-form" : phone
            },
            // после получения ответа сервера
            success: function(data){
                $(this).parent().prev().children(".js-catalog-error-label").fadeIn("fast");

                var url = "success.html";    
                $(location).attr(data.url,url);

                $(data.success).hide();

                $(".js-phone").val("");
            }
        });
    });

    /* ==========================================================================
    modal form
    ========================================================================== */

    // show modal form
    $(".js-show-modal-form").on("click", function(e){
        e.preventDefault();
        $("#modal-form, #overlay").fadeIn("fast");
    });
    // close modal form 
    $("#modal-close").on("click", function(){
        $("#modal-form, #overlay").fadeOut("fast");
    });

    // send form modal
    $(".js-modal-submit").click(function(){
        // собираем данные с формы
        var phone = $('.js-modal-input').val();
        // отправляем данные
        $.ajax({
            url: "send.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "modal-form": phone
            },
            // после получения ответа сервера
            success: function(data){

                // ошибка
                $(data.error).fadeIn("fast");
                
                // отправлено
                var url = "success.html";    
                $(location).attr(data.url,url);

                $(".js-modal-input").val("");
            }
        });
    });

    /* ==========================================================================
    success
    ========================================================================== */

    // close success form 
    $("#modal-success-close").on("click", function(){
        $("#modal-success, #overlay").fadeOut("fast");
    });

});