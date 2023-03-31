jQuery(document).ready(function($){
    
    // jQuery sticky Menu
    
	// $(".mainmenu-area").sticky({topSpacing:0});
    
    
    $('.product-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });  
    
    $('.related-products-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });  
    
    $('.brand-list').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });    
    
    
    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });    
    
    // jQuery Scroll effect
    $('.navbar-nav li a, .scroll-to-up').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = $('.header-area').outerHeight();
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });    
    
    // Bootstrap ScrollPSY
    $('body').scrollspy({ 
        target: '.navbar-collapse',
        offset: 95
    })      
});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-10146041-21', 'auto');
  ga('send', 'pageview');

var header = document.getElementById("header-menu");
var mobileMenu = document.getElementById("mobile-menu");
var menuBar = document.getElementById("bar-menu");
var pathname = window.location.pathname;

mobileMenu.children[0].onclick = function() {
    var isOpen = header.clientHeight === 50;
    if(isOpen) {
        header.style.height = 'auto';
        mobileMenu.children[0].style.color = 'rgb(219, 219, 219)';
    } else {
        header.style.height = '50px';
        mobileMenu.children[0].style.color = 'white';
    }
}


// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 767px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        if (pathname == "/index.html") {
            menuBar.innerHTML = 
            `
                <div class="list-header-menu-mobile">
                    <ul class="nav navbar-nav" id="header-menu">
                        <li class="active"><a href="index.html" style="margin-left: 10px;">Trang chủ</a></li>
                        <li><a href="design3d.html" style="margin-left: 10px;">Dịch vụ thiết kế 3D</a></li>
                        <li><a href="displayModel.html" style="margin-left: 10px;">Dịch vụ làm mô hình trưng bày</a></li>
                    </ul>
                    <div id="mobile-menu" class="mobile-menu-btn">
                        <i class="fa fa-bars fa-2x wrap-icon"></i>
                    </div>
                </div>
            `
        } else if (pathname == "/design3d.html") {
            menuBar.innerHTML =
            `
                <div class="list-header-menu-mobile">
                    <ul class="nav navbar-nav" id="header-menu">
                        <li class="active"><a href="design3d.html" style="margin-left: 10px;">Dịch vụ thiết kế 3D</a></li>
                        <li><a href="index.html" style="margin-left: 10px;">Trang chủ</a></li>
                        <li><a href="displayModel.html" style="margin-left: 10px;">Dịch vụ làm mô hình trưng bày</a></li>
                    </ul>
                    <div id="mobile-menu" class="mobile-menu-btn">
                        <i class="fa fa-bars fa-2x wrap-icon"></i>
                    </div>
                </div>
            `
        } else {
            menuBar.innerHTML =
            `
                <div class="list-header-menu-mobile">
                    <ul class="nav navbar-nav" id="header-menu">
                        <li class="active"><a href="displayModel.html" style="margin-left: 10px;">Dịch vụ làm mô hình trưng bày</a></li>
                        <li><a href="index.html" style="margin-left: 10px;">Trang chủ</a></li>
                        <li><a href="design3d.html" style="margin-left: 10px;">Dịch vụ thiết kế 3D</a></li>
                    </ul>
                    <div id="mobile-menu" class="mobile-menu-btn">
                        <i class="fa fa-bars fa-2x wrap-icon"></i>
                    </div>
                </div>
            `
        };
    }
}