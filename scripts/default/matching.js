$("#bank-check-all-1").click(function() {
    if($("#bank-check-all-1").prop("checked")) {
        $("input[name='bank-check-1']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='bank-check-1']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});

$("#note-check-all-1").click(function() {
    if($("#note-check-all-1").prop("checked")) {
        $("input[name='note-check-1']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='note-check-1']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});
$("#bank-check-all-2").click(function() {
    if($("#bank-check-all-2").prop("checked")) {
        $("input[name='bank-check-2']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='bank-check-2']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});

$("#note-check-all-2").click(function() {
    if($("#note-check-all-2").prop("checked")) {
        $("input[name='note-check-2']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='note-check-2']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});
$("#bank-check-all-3").click(function() {
    if($("#bank-check-all-3").prop("checked")) {
        $("input[name='bank-check-3']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='bank-check-3']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});

$("#note-check-all-3").click(function() {
    if($("#note-check-all-3").prop("checked")) {
        $("input[name='note-check-3']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='note-check-3']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});
$("#bank-check-all-4").click(function() {
    if($("#bank-check-all-4").prop("checked")) {
        $("input[name='bank-check-4']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='bank-check-4']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});

$("#note-check-all-4").click(function() {
    if($("#note-check-all-4").prop("checked")) {
        $("input[name='note-check-4']").each(function() {
            $(this).prop("checked", true);
            $(this).parents('tr').addClass('matched');
        });
    } else {
        $("input[name='note-check-4']").each(function() {
            $(this).prop("checked", false);
            $(this).parents('tr').removeClass('matched');
        });           
    }
});


$('input[type="checkbox"]').on('change',function(){
    if($(this).prop("checked")) {
        $(this).parents('tr').addClass('matched');
    } else {
        $(this).parents('tr').removeClass('matched');
    }
    
});


function goResult() {
    $('.cutover-in').removeClass('show');
    $('#result').addClass('show');
    $('.matching-info-nav li').removeClass('active');
    $('.matching-info-nav a[href="#result"]').parent('li').addClass('active');
}


const slider2 = document.querySelector('.main-table2');

slider2.addEventListener('mousedown', (e) => {
    isDown = true;
    slider2.classList.add('active');
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
    slider2.style.cursor = 'grabbing';
});
slider2.addEventListener('mouseleave', () => {
    isDown = false;
    slider2.classList.remove('active');
    slider2.style.cursor = 'grab';
});
slider2.addEventListener('mouseup', () => {
    isDown = false;
    slider2.classList.remove('active');
});
slider2.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider2.scrollLeft = scrollLeft - walk;
});

const slider3 = document.querySelector('.main-table3');

slider3.addEventListener('mousedown', (e) => {
    isDown = true;
    slider3.classList.add('active');
    startX = e.pageX - slider3.offsetLeft;
    scrollLeft = slider3.scrollLeft;
    slider3.style.cursor = 'grabbing';
});
slider3.addEventListener('mouseleave', () => {
    isDown = false;
    slider3.classList.remove('active');
    slider3.style.cursor = 'grab';
});
slider3.addEventListener('mouseup', () => {
    isDown = false;
    slider3.classList.remove('active');
});
slider3.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider3.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider3.scrollLeft = scrollLeft - walk;
});

const slider4 = document.querySelector('.main-table4');

slider4.addEventListener('mousedown', (e) => {
    isDown = true;
    slider4.classList.add('active');
    startX = e.pageX - slider4.offsetLeft;
    scrollLeft = slider4.scrollLeft;
    slider4.style.cursor = 'grabbing';
});
slider4.addEventListener('mouseleave', () => {
    isDown = false;
    slider4.classList.remove('active');
    slider4.style.cursor = 'grab';
});
slider4.addEventListener('mouseup', () => {
    isDown = false;
    slider4.classList.remove('active');
});
slider4.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider4.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider4.scrollLeft = scrollLeft - walk;
});

const slider5 = document.querySelector('.main-table5');

slider5.addEventListener('mousedown', (e) => {
    isDown = true;
    slider5.classList.add('active');
    startX = e.pageX - slider5.offsetLeft;
    scrollLeft = slider5.scrollLeft;
    slider5.style.cursor = 'grabbing';
});
slider5.addEventListener('mouseleave', () => {
    isDown = false;
    slider5.classList.remove('active');
    slider5.style.cursor = 'grab';
});
slider5.addEventListener('mouseup', () => {
    isDown = false;
    slider5.classList.remove('active');
});
slider5.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider5.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider5.scrollLeft = scrollLeft - walk;
});

const slider6 = document.querySelector('.main-table6');

slider6.addEventListener('mousedown', (e) => {
    isDown = true;
    slider6.classList.add('active');
    startX = e.pageX - slider6.offsetLeft;
    scrollLeft = slider6.scrollLeft;
    slider6.style.cursor = 'grabbing';
});
slider6.addEventListener('mouseleave', () => {
    isDown = false;
    slider6.classList.remove('active');
    slider6.style.cursor = 'grab';
});
slider6.addEventListener('mouseup', () => {
    isDown = false;
    slider6.classList.remove('active');
});
slider6.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider6.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider6.scrollLeft = scrollLeft - walk;
});

const slider7 = document.querySelector('.main-table7');

slider7.addEventListener('mousedown', (e) => {
    isDown = true;
    slider7.classList.add('active');
    startX = e.pageX - slider7.offsetLeft;
    scrollLeft = slider7.scrollLeft;
    slider7.style.cursor = 'grabbing';
});
slider7.addEventListener('mouseleave', () => {
    isDown = false;
    slider7.classList.remove('active');
    slider7.style.cursor = 'grab';
});
slider7.addEventListener('mouseup', () => {
    isDown = false;
    slider7.classList.remove('active');
});
slider7.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider7.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider7.scrollLeft = scrollLeft - walk;
});

const slider8 = document.querySelector('.main-table8');

slider8.addEventListener('mousedown', (e) => {
    isDown = true;
    slider8.classList.add('active');
    startX = e.pageX - slider8.offsetLeft;
    scrollLeft = slider8.scrollLeft;
    slider8.style.cursor = 'grabbing';
});
slider8.addEventListener('mouseleave', () => {
    isDown = false;
    slider8.classList.remove('active');
    slider8.style.cursor = 'grab';
});
slider8.addEventListener('mouseup', () => {
    isDown = false;
    slider8.classList.remove('active');
});
slider8.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider8.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider8.scrollLeft = scrollLeft - walk;
});