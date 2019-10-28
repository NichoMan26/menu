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
    <img src="img/ka-logo-tiny.png">
    <div class='menu__div logo'>
        <ul class="logo__ul">
                <li class="logo__li">
                    <a class="logo__a"><img src="img/ka-logo-tiny.png">
                    <span class='logo__span'>Sampler CMS</span>
                    </a>
                    <a class="logo__a logo__a_gear"><i class="fas fa-cog white fa-lg transition-05"></i></a>
                    </li>
                <li class="logo__li">
                    <a class="logo__a"><img src="img/samplercms-icon-24x30.png">
                    <span class='logo__span'>KA Etikettering</span></a>
                </li>
        </ul>
    <div/>
</li>
<li class="menu__li userIcon">
<a class='userIcon__a'><i class="far fa-comment-dots white fa-2x"></i></a>
<span class="userIcon__span_around">10</span>
<ul class='userIcon__ul'>
    <li class="userIcon__li">
        <a class='userIcon__a'><i class="fas fa-calendar white"></i></a>
        <span class="userIcon__span_around">3</span>
    </li>
    <li class="userIcon__li">
        <a class='userIcon__a userIcon__a_message'>
            <i class="fas fa-envelope white"></i>
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
        <a class='userIcon__a'><i class="fas fa-user white"></i></a>
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
$('.burger').on('touchend', (e) => {
    if($('.hideMenu-active').length > 0){
        toggleHideMenu();
    } else{
        hideAll();
        toggleHideMenu();
    }
})
$('.hideMenu__a_triangle').on('touchend', (e) => {
    if($(e.currentTarget).children('.hideMenu__i_triangle-active').length > 0){
        $('.hideMenu__i_triangle-active').removeClass('hideMenu__i_triangle-active')
        $(e.currentTarget).parent('.hideMenu__p').siblings('.hideMenu__div').toggleClass('hideMenu__div-active')
        return
    }
    if($('.hideMenu__i_triangle-active'))$('.hideMenu__i_triangle-active').removeClass('hideMenu__i_triangle-active')
    $(e.currentTarget).children('.hideMenu__i_triangle').addClass('hideMenu__i_triangle-active')
    if($('.hideMenu__div-active'))$('.hideMenu__div-active').removeClass('hideMenu__div-active')
    $(e.currentTarget).parent('.hideMenu__p').siblings('.hideMenu__div').toggleClass('hideMenu__div-active')
})
var lastX;
let firstTouch;
$('.hideMenu').on('touchstart', (e) => {
    firstTouch = e.originalEvent.touches[0].clientX
})
$('.hideMenu').on('touchmove', (e) => {
    var currentX = e.originalEvent.touches[0].clientX;
    if((firstTouch - currentX) > 50 ){
        toggleHideMenu()
    }
    lastX = currentX;    
})
$('.points').on('touchstart', (e) => {
    toggleHideMenu()
})
$('.userIcon__li').on('touchend', (e) => {
    if($('.newMessage-active').length > 0){
        $('.newMessage-active').removeClass('newMessage-active')
    } else {
        hideAll()
        $(e.currentTarget).children('.newMessage').toggleClass('newMessage-active')
    }
    
})
$('.userIcon').on('touchend', (e) => {
    if($('.userIcon__ul-active').length > 0){
        $('.userIcon__ul-active').removeClass('userIcon__ul-active')
    } else {
        hideAll()
        $(e.currentTarget).children('.userIcon__ul').toggleClass('userIcon__ul-active')
    }
    
})
$('body').on('touchend', (e) => {
    let arrTouch = e.originalEvent.path;
    let change = 0;
    $.each(arrTouch, (index, value) =>{
        if($(value).hasClass('menu__ul') || $(value).hasClass('hideMenu')){
            change++;
        }
    })
    if(change === 0){
        hideAll()
    }
})
function hideAll() {
    $('.hideMenu-active').removeClass('hideMenu-active')
    $('#nav-icon2').removeClass('open');
    $('.points').removeClass('points-active')
    $('.menu__div-active').removeClass('menu__div-active')
    $('.newMessage-active').removeClass('newMessage-active')
    $('.userIcon__ul-active').removeClass('userIcon__ul-active')
}
function toggleHideMenu() {
    $('#nav-icon2').toggleClass('open');
    $('.hideMenu').toggleClass('hideMenu-active')
    $('.points').toggleClass('points-active')
}