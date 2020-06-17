$(function(){

    const sliderimg = document.querySelector('.slider__img');
    const sliderellipsefirst = document.querySelector('.slider__ellipse--first');
    const sliderellipsesecond = document.querySelector('.slider__ellipse--second');
    const sliderellipsethird = document.querySelector('.slider__ellipse--third');

    const firstwindow = document.querySelector('.F5__window--first .F5__window--description');
    const secondwindow = document.querySelector('.F5__window--second .F5__window--description');
    const thirdwindow = document.querySelector('.F5__window--third .F5__window--description');
    const fourthwindow = document.querySelector('.F5__window--fourth .F5__window--description');
    const fifthwindow = document.querySelector('.F5__window--fifth .F5__window--description');
    const firstwindowfull = document.querySelector('.F5__window--first');
    const secondwindowfull = document.querySelector('.F5__window--second');
    const thirdwindowfull = document.querySelector('.F5__window--third');
    const fourthwindowfull = document.querySelector('.F5__window--fourth');
    const fifthwindowfull = document.querySelector('.F5__window--fifth');
    const windowname = document.querySelector('.right-bar__window-name');
    const windowimg = document.querySelector('.F5__calculator--img');

    $("#phone").mask("+7(999)999-99-99", {
        completed: function(){ alert("Вы ввели номер: " + this.val()); }
      });

    $("#calculator-phone").mask("+7(999)999-99-99", {
        completed: function(){ alert("Вы ввели номер: " + this.val()); }
      });

    $(sliderellipsefirst).click(function(){
        sliderimg.setAttribute('src','img/slider_1.jpg');
        sliderellipsefirst.setAttribute('src','img/slider_ellipse-active.jpg');
        sliderellipsesecond.setAttribute('src','img/slider_ellipse.jpg');
        sliderellipsethird.setAttribute('src','img/slider_ellipse.jpg');
    });

    $(sliderellipsesecond).click(function(){
        sliderimg.setAttribute('src','img/slider_2.jpg');
        sliderellipsefirst.setAttribute('src','img/slider_ellipse.jpg');
        sliderellipsesecond.setAttribute('src','img/slider_ellipse-active.jpg');
        sliderellipsethird.setAttribute('src','img/slider_ellipse.jpg');
    });

    $(sliderellipsethird).click(function(){
        sliderimg.setAttribute('src','img/slider_3.jpg');
        sliderellipsefirst.setAttribute('src','img/slider_ellipse.jpg');
        sliderellipsesecond.setAttribute('src','img/slider_ellipse.jpg');
        sliderellipsethird.setAttribute('src','img/slider_ellipse-active.jpg');
    });

    $(firstwindowfull).click(function(){
        windowname.textContent = 'Одностворчатое окно KBE';
        windowimg.setAttribute('src','img/1-calculator.jpg');
        firstwindow.style.color = '#0099de';
        firstwindow.style.textDecoration = 'underline';
        secondwindow.style.color = '#000000';
        secondwindow.style.textDecoration = 'none';
        thirdwindow.style.color = '#000000';
        thirdwindow.style.textDecoration = 'none';
        fourthwindow.style.color = '#000000';
        fourthwindow.style.textDecoration = 'none';
        fifthwindow.style.color = '#000000';
        fifthwindow.style.textDecoration = 'none';
    });

    $(secondwindowfull).click(function(){
        windowname.textContent = 'Двухстворчатое окно';
        windowimg.setAttribute('src','img/window_2.jpg');
        firstwindow.style.color = '#000000';
        firstwindow.style.textDecoration = 'none';
        secondwindow.style.color = '#0099de';
        secondwindow.style.textDecoration = 'underline';
        thirdwindow.style.color = '#000000';
        thirdwindow.style.textDecoration = 'none';
        fourthwindow.style.color = '#000000';
        fourthwindow.style.textDecoration = 'none';
        fifthwindow.style.color = '#000000';
        fifthwindow.style.textDecoration = 'none';
    });

    $(thirdwindowfull).click(function(){
        windowname.textContent = 'Трехстворчатое окно';
        windowimg.setAttribute('src','img/window_3.jpg');
        firstwindow.style.color = '#000000';
        firstwindow.style.textDecoration = 'none';
        secondwindow.style.color = '#000000';
        secondwindow.style.textDecoration = 'none';
        thirdwindow.style.color = '#0099de';
        thirdwindow.style.textDecoration = 'underline';
        fourthwindow.style.color = '#000000';
        fourthwindow.style.textDecoration = 'none';
        fifthwindow.style.color = '#000000';
        fifthwindow.style.textDecoration = 'none';
    });

    $(fourthwindowfull).click(function(){
        windowname.textContent = 'Балконный блок';
        windowimg.setAttribute('src','img/window_4.jpg');
        firstwindow.style.color = '#000000';
        firstwindow.style.textDecoration = 'none';
        secondwindow.style.color = '#000000';
        secondwindow.style.textDecoration = 'none';
        thirdwindow.style.color = '#000000';
        thirdwindow.style.textDecoration = 'none';
        fourthwindow.style.color = '#0099de';
        fourthwindow.style.textDecoration = 'underline';
        fifthwindow.style.color = '#000000';
        fifthwindow.style.textDecoration = 'none';
    });

    $(fifthwindowfull).click(function(){
        windowname.textContent = 'Остекление балкона';
        windowimg.setAttribute('src','img/window_5.jpg');
        firstwindow.style.color = '#000000';
        firstwindow.style.textDecoration = 'none';
        secondwindow.style.color = '#000000';
        secondwindow.style.textDecoration = 'none';
        thirdwindow.style.color = '#000000';
        thirdwindow.style.textDecoration = 'none';
        fourthwindow.style.color = '#000000';
        fourthwindow.style.textDecoration = 'none';
        fifthwindow.style.color = '#0099de';
        fifthwindow.style.textDecoration = 'underline';
    });

});