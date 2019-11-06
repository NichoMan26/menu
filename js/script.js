let nav = `<nav class="menu"><ul class="menu__ul">
<li class="menu__li burger">
    <div class='burger__div_wrapper'>
        <div id="nav-icon2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> 
    <div/>    
</li>
<li class="menu__li menu__li_logo">
    <img class="menu__a" src="img/ka-logo-tiny.png">
    <div class='menu__div logo'>
        <ul class="logo__ul">
                <li class="logo__li">
                    <a class="logo__a"><img src="img/ka-logo-tiny.png">
                    <span class='logo__span'>Sampler CMS</span>
                    </a>
                    </li>
                <li class="logo__li">
                    <a class="logo__a"><img src="img/samplercms-icon-24x30.png">
                    <span class='logo__span'>KA Etikettering</span></a>
                </li>
        </ul>
    <div/>
</li>
<li class="menu__li userIcon">
<i class="far fa-bell fa-2x white"></i>
<span class="userIcon__span_around userIcon__span_around-unit userIcon__span_around-unit-active">11</span>
<ul class='userIcon__ul'>
<li class="userIcon__li">
        <a class='userIcon__a userIcon__a_message'>
            <i class="fas fa-envelope fa-2x white"></i>
            <span class="userIcon__span_around">2</span>
        </a>
        <div class='userIcon__div newMessage'>
            <p class="newMessage__p"><span>New message: </span><span class="newMessage__span_count">2</span></p>
            <ul class='newMessage__ul'>
                <li class='newMessage__li'><img class='newMessage__img' src="img/icon.png"><span>test@gmail.com</span></li>
                <li class='newMessage__li'><img class='newMessage__img' src="img/icon.png"><span>super@gmail.com</span></img>
            </ul>
        </div>
    </li>
    <li class="userIcon__li">
        <a class='userIcon__a'><i class="fas fa-calendar fa-2x white"></i></a>
        <span class="userIcon__span_around">3</span>
    </li>
    <li class="userIcon__li">
        <a class='userIcon__a'><i class="far fa-list-alt fa-2x white"></i></a>
        <span class="userIcon__span_around">1</span>
    </li>
    
    <li class="userIcon__li">
        <a class='userIcon__a'><i class="fas fa-user fa-2x white"></i></a>
        <span class="userIcon__span_around">5</span>
    </li>
    </ul>
</li>
</ul></nav>`
let hideMenu = `<div class='hideMenu'>
<ul class="hideMenu__ul_l1">
    <li class="hideMenu__li_l1">
        <p class="hideMenu__p"><a class="hideMenu__a_l1">item-1</a><a class="hideMenu__a_triangle"><i class="fas fa-angle-right white hideMenu__i_triangle"></i></a></p>
        <div class="hideMenu__div">
            <ul class="hideMenu__ul_l2">
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---1</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---2</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---3</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---4</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---5</a></li>
            </ul>
        </div>
    </li>
    <li class="hideMenu__li_l1">
        <p class="hideMenu__p"><a class="hideMenu__a_l1">item-2</a><a class="hideMenu__a_triangle"><i class="fas fa-angle-right white hideMenu__i_triangle"></i></a></p>
        <div class="hideMenu__div">
            <ul class="hideMenu__ul_l2">
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---1</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---2</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---3</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---3</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---3</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---4</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-1---5</a></li>
            </ul>
        </div>
    </li>
    <li class="hideMenu__li_l1">
    <p class="hideMenu__p"><a class="hideMenu__a_l1">item-3</a><a class="hideMenu__a_triangle"><i class="fas fa-angle-right white hideMenu__i_triangle"></i></a></p>
        <div class="hideMenu__div">
            <ul class="hideMenu__ul_l2">
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-3---1</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-3---2</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-3---3</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-3---4</a></li>
                <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-3---5</a></li>
            </ul>
        </div>
    </li>
    <li class="hideMenu__li_l1">
    <p class="hideMenu__p"><a class="hideMenu__a_l1">item-4</a><a class="hideMenu__a_triangle"><i class="fas fa-angle-right white hideMenu__i_triangle"></i></a></p>
    <div class="hideMenu__div">
        <ul class="hideMenu__ul_l2">
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---1</a></li>
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---2</a></li>
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---3</a></li>
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---4</a></li>
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---5</a></li>
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---5</a></li>
            <li class="hideMenu__li_l2"><a class="hideMenu__a_l2">item-4---5</a></li>
        </ul>
    </div>
    </li>
</ul>
<ul class='hideMenu__ul_footer'>
    <li class='hideMenu__li_footer'>
    <a class ='hideMenu__a_footer'>
        <i class="fas fa-cog white fa-lg hideMenu__i_cogwhell"></i>
        <span class='hideMenu__span_conf'>Konfiguration</span>
    </a>
            
    <div class='configuration'>
        <ul class='configuration__ul'>
            <li class='configuration__li configuration__li-active'>
            <i class="fab fa-android white fa-lg"></i>
            <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-1-1</li>
                    <li class='configuration__li_content'>link-1-2</li>
                    <li class='configuration__li_content'>link-1-3</li>
                    <li class='configuration__li_content'>link-1-4</li>
                    <li class='configuration__li_content'>link-1-5</li>
                    <li class='configuration__li_content'>link-1-6</li>
                    <li class='configuration__li_content'>link-1-7</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
            <i class="fas fa-adjust white fa-lg"></i>
            <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-2-1</li>
                    <li class='configuration__li_content'>link-2-2</li>
                    <li class='configuration__li_content'>link-2-3</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
            <i class="fab fa-bluetooth white fa-lg"></i>
            <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-3-1</li>
                    <li class='configuration__li_content'>link-3-2</li>
                    <li class='configuration__li_content'>link-3-3</li>
                    <li class='configuration__li_content'>link-3-4</li>
                    <li class='configuration__li_content'>link-3-5</li>
                    <li class='configuration__li_content'>link-3-6</li>
                    <li class='configuration__li_content'>link-3-6</li>
                    <li class='configuration__li_content'>link-3-6</li>
                    <li class='configuration__li_content'>link-3-7</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
                <i class="fas fa-exclamation-triangle white fa-lg"></i>
                <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-4-1</li>
                    <li class='configuration__li_content'>link-4-2</li>
                    <li class='configuration__li_content'>link-4-3</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
                <i class="fas fa-car-battery white fa-lg"></i>
                <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-5-1</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
            <i class="fas fa-camera white fa-lg"></i>
            <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-6-1</li>
                    <li class='configuration__li_content'>link-6-2</li>
                    <li class='configuration__li_content'>link-6-3</li>
                    <li class='configuration__li_content'>link-6-4</li>
                    <li class='configuration__li_content'>link-6-5</li>
                    <li class='configuration__li_content'>link-6-6</li>
                    <li class='configuration__li_content'>link-6-7</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
            <i class="fas fa-code-branch white fa-lg"></i>
            <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-7-1</li>
                    <li class='configuration__li_content'>link-7-2</li>
                    <li class='configuration__li_content'>link-7-3</li>
                </ul>
            </div>
            </li>
            <li class='configuration__li'>
                <i class="fas fa-car-alt white fa-lg"></i>
                <div class="configuration__div_byList displayNone">
                <ul class='configuration__ul_content'>
                    <li class='configuration__li_content'>link-8-1</li>
                    <li class='configuration__li_content'>link-8-2</li>
                    <li class='configuration__li_content'>link-8-3</li>
                    <li class='configuration__li_content'>link-8-4</li>
                    <li class='configuration__li_content'>link-8-5</li>
                </ul>
            </div>
            </li>
        </ul>
        <div class='configuration__div_content'>
            <div class="configuration__div_byList">
            <ul class='configuration__ul_content'>
            <li class='configuration__li_content'>link-1-1</li>
            <li class='configuration__li_content'>link-1-2</li>
            <li class='configuration__li_content'>link-1-3</li>
            <li class='configuration__li_content'>link-1-4</li>
            <li class='configuration__li_content'>link-1-5</li>
            <li class='configuration__li_content'>link-1-6</li>
            <li class='configuration__li_content'>link-1-7</li>
        </ul>
            </div>
        </div>
    </li>    
</ul>
</li>
<div class='points'>
    <ul class='points__ul'>
        <li class='points__li'></li>
        <li class='points__li'></li>
        <li class='points__li'></li>
    </ul>
</div>
</div>`
let header = '<header class="header"><div class="header__div_l1">' + nav + '</div></header>';
let wrapper = "<div class='wrapper'>" + header + hideMenu + "</div>"
$('.root').append(wrapper)

$('.menu__li_logo').on('touchend', (e) => {
    let divMenuCurrentLi = $(e.currentTarget).children('.menu__div');
    if ($('.menu__div-active').length > 0) {
        $('.menu__div-active').removeClass('menu__div-active')
    } else {
        hideAll()
        divMenuCurrentLi.addClass('menu__div-active')
    }
})
$('.menu__li_logo').on('click', (e) => {
    let divMenuCurrentLi = $(e.currentTarget).children('.menu__div');
    if ($('.menu__div-active').length > 0) {
        $('.menu__div-active').removeClass('menu__div-active')
    } else {
        hideAll()
        divMenuCurrentLi.addClass('menu__div-active')
    }
})
$('.burger').on('touchend', (e) => {
    if ($('.hideMenu-active').length > 0) {
        toggleHideMenu();
    } else {
        hideAll();
        toggleHideMenu();
    }
})
$('.burger').on('click', (e) => {
    if ($('.hideMenu-active').length > 0) {
        toggleHideMenu();
    } else {
        hideAll();
        toggleHideMenu();
    }
})
$('.hideMenu__li_l1').on('touchend', (e) => {
    if ($(e.currentTarget).children('.hideMenu__div-active').length > 0) {
        $('.hideMenu__div-active').removeClass('hideMenu__div-active');
        $('.hideMenu__i_triangle-active').removeClass('hideMenu__i_triangle-active');
        return
    }
    $('.hideMenu__div-active').removeClass('hideMenu__div-active');
    $('.hideMenu__i_triangle-active').removeClass('hideMenu__i_triangle-active');
    $(e.currentTarget).children('.hideMenu__div').toggleClass('hideMenu__div-active');
    $(e.currentTarget).children('.hideMenu__p')
        .children('.hideMenu__a_triangle')
        .children('.hideMenu__i_triangle')
        .toggleClass('hideMenu__i_triangle-active')
})
$('.hideMenu__li_l1').on('click', (e) => {
    if ($(e.currentTarget).children('.hideMenu__div-active').length > 0) {
        $('.hideMenu__div-active').removeClass('hideMenu__div-active');
        $('.hideMenu__i_triangle-active').removeClass('hideMenu__i_triangle-active');
        return
    }
    $('.hideMenu__div-active').removeClass('hideMenu__div-active');
    $('.hideMenu__i_triangle-active').removeClass('hideMenu__i_triangle-active');
    $(e.currentTarget).children('.hideMenu__div').toggleClass('hideMenu__div-active');
    $(e.currentTarget).children('.hideMenu__p')
        .children('.hideMenu__a_triangle')
        .children('.hideMenu__i_triangle')
        .toggleClass('hideMenu__i_triangle-active')
})
$('.points').on('touchstart', (e) => {
    toggleHideMenu()
})
$('.points').on('click', (e) => {
    toggleHideMenu()
})
$('.userIcon__li').on('touchend', (e) => {
    if ($('.newMessage-active').length > 0) {
        $('.newMessage-active').removeClass('newMessage-active')
    } else {
        hideAll()
        $(e.currentTarget).children('.newMessage').toggleClass('newMessage-active')
    }

})
$('.userIcon__li').on('clcik', (e) => {
    if ($('.newMessage-active').length > 0) {
        $('.newMessage-active').removeClass('newMessage-active')
    } else {
        hideAll()
        $(e.currentTarget).children('.newMessage').toggleClass('newMessage-active')
    }

})
$('.userIcon').on('touchend', (e) => {
    if ($('.userIcon__ul-active').length > 0) {
        $('.userIcon__ul-active').removeClass('userIcon__ul-active')
        $(e.currentTarget).children('.userIcon__span_around-unit').addClass('userIcon__span_around-unit-active')
    } else {
        hideAll()
        $(e.currentTarget).children('.userIcon__ul').toggleClass('userIcon__ul-active')
        $(e.currentTarget).children('.userIcon__span_around-unit').removeClass('userIcon__span_around-unit-active')
        
    }

})
$('.userIcon').on('click', (e) => {
    if ($('.userIcon__ul-active').length > 0) {
        $('.userIcon__ul-active').removeClass('userIcon__ul-active')
        $(e.currentTarget).children('.userIcon__span_around-unit').addClass('userIcon__span_around-unit-active')
    } else {
        hideAll()
        $(e.currentTarget).children('.userIcon__ul').toggleClass('userIcon__ul-active')
        $(e.currentTarget).children('.userIcon__span_around-unit').removeClass('userIcon__span_around-unit-active')
        
    }

})
$('body').on('touchstart', (e) => {
    console.log('touch body')
    let arrTouch = e.originalEvent.path;
    let change = 0;
    $.each(arrTouch, (index, value) => {
        if ($(value).hasClass('menu__ul') || $(value).hasClass('hideMenu')) {
            change++;
        }
    })
    if (change === 0) {
        hideAll()   
    }
})
$('body').on('clcik', (e) => {
    console.log('touch body')
    let arrTouch = e.originalEvent.path;
    let change = 0;
    $.each(arrTouch, (index, value) => {
        if ($(value).hasClass('menu__ul') || $(value).hasClass('hideMenu')) {
            change++;
        }
    })
    if (change === 0) {
        hideAll()   
    }
})

let firstTouch;
$('.content').on('touchstart', (e) => {
    firstTouch = e.originalEvent.touches[0].clientX
    timeStart =  Date.now()
    console.log(timeStart)
})
$('.content').on('touchmove', (e) => {
    var currentX = e.originalEvent.touches[0].clientX;
    let timeMove = Date.now();
    if ((firstTouch + 80) < currentX && (timeStart + 500) > timeMove) {
        console.log('show hidemenu')
        showHideMenu()
    } else if((firstTouch - 80) > currentX){
        console.log('hide hidemenu')
        hideHideMenu()
    }
})
let firstTouchMenu;
$('.hideMenu').on('touchstart', (e) => {
    firstTouchMenu = e.originalEvent.touches[0].clientX
    timeStart =  Date.now()
})

$('.hideMenu').on('touchmove', (e) => {
    console.log('hde meny mive')
    let timeMove = Date.now();
    var currentX = e.originalEvent.touches[0].clientX;
    if ((firstTouchMenu - currentX) > 50 && (timeStart + 500) > timeMove) {
        hideHideMenu()
    }
})
$('.hideMenu__a_footer').on('touchend', (e) => {
    $('.hideMenu__ul_footer').toggleClass('hideMenu__ul_footer-active')
})
$('.hideMenu__a_footer').on('click', (e) => {
    $('.hideMenu__ul_footer').toggleClass('hideMenu__ul_footer-active')
})
$('.configuration__li').on('touchend', (e) => {
    $('.configuration__li-active').removeClass('configuration__li-active');
    $(e.currentTarget).addClass('configuration__li-active')
    let configDivContent = $('.configuration__div_content');
    configDivContent.children('div').remove()
    $(e.currentTarget).children('.configuration__div_byList').clone().appendTo(configDivContent);
    configDivContent
    configDivContent.children('div').removeClass('displayNone')
})
$('.configuration__li').on('click', (e) => {
    $('.configuration__li-active').removeClass('configuration__li-active');
    $(e.currentTarget).addClass('configuration__li-active')
    let configDivContent = $('.configuration__div_content');
    configDivContent.children('div').remove()
    $(e.currentTarget).children('.configuration__div_byList').clone().appendTo(configDivContent);
    configDivContent
    configDivContent.children('div').removeClass('displayNone')
})

function hideAll() {
    console.log('function', 'hideAll')
    $('.hideMenu-active').removeClass('hideMenu-active')
    $('#nav-icon2').removeClass('open');
    $('.points').removeClass('points-active')
    $('.menu__div-active').removeClass('menu__div-active')
    $('.newMessage-active').removeClass('newMessage-active')
    $('.userIcon__ul-active').removeClass('userIcon__ul-active')
    $('.userIcon__span_around-unit').addClass('userIcon__span_around-unit-active')
    
}

function toggleHideMenu() {
    $('#nav-icon2').toggleClass('open');
    $('.hideMenu').toggleClass('hideMenu-active')
    $('.points').toggleClass('points-active')
}
function hideHideMenu() {
    $('#nav-icon2').removeClass('open');
    $('.hideMenu').removeClass('hideMenu-active')
    $('.points').removeClass('points-active')
}
function showHideMenu() {
    $('#nav-icon2').addClass('open');
    $('.hideMenu').addClass('hideMenu-active')
    $('.points').addClass('points-active')
}
