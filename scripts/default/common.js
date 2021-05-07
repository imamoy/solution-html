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

    const mainTable = $('.main-table');
    const table = $('.main-table table');
    mainTable.on('mouseover', function(){
        const mainTableWidth = mainTable.width();
        const tableWidth = table.width();

        if(tableWidth > mainTableWidth) {
            $(this).css('cursor','grab');
        }
    });
    
    // Tab
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

// Horizontal Click and Drag Scrolling with JS
const slider = document.querySelector('.main-table');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.cursor = 'grab';
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});
