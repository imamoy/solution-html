function loading(){
    $('.loading').show();
    $('#uploadFileModel').modal('hide');

    setTimeout(function(){
        $('.loading').hide();
    },2000)
    setTimeout(function(){
        $('.inner-wrapper').show();
    }, 2250)
}

$(document).ready(function() {
    $('.inner-menu-toggle').click(function () {
        $(this).next().slideToggle().parents('.list-inline-item').siblings().find('.inner-menu-toggle').next().slideUp();
        $('#header').addClass('active');
    });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.menu').slideToggle();
    });
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#header").addClass('active');
        } else {
            $("#header").removeClass('active');
        }
    });

    $('#info-btn').click(function(){
        $('#info-inner').addClass('active');
    });

    $('#info-close-btn').click(function(){
        $('#info-inner').removeClass('active');
    });

    $('.format-btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.delete-btn').click(function(){
        $(this).parents('tr').remove();
    });
    

    $(function () {
		var _showTab = 0;
		var $defaultLi = $('ul.cutover li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().removeClass('show');

		$('ul.cutover li').click(function () {
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

			return false;
		}).find('a').focus(function () {
			this.blur();
		});
	});
});
