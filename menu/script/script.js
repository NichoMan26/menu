$(document).ready(() => {
    $('.button').on('click', () => {
        alert('Hello Word!')
    })

    let menu = {};

    menu.item = ['Home', 'Photo', 'Video', 'Video'];
    menu.subItem = [
        ['Home-1', 'Home-2', 'Home-3', 'Home-4', ],
        ['Photo-1', 'Photo-2', 'Photo-3', 'Photo-4', ],
        ['Video-1', 'Video-2', 'Video-3', 'Video-4', ],
        ['Video-1', 'Video-2', 'Video-3', 'Video-4', ],
    ];

    menu.init = function () {
        let htmlMenu = "<ul class='menu__ul'>";
        for (let i = 0; i < menu.item.length; i++) {
            htmlMenu += '<li class="menu__li"><a href="javascript:" class="menu__a">' + menu.item[i] + '</a></li>'
        }
        htmlMenu += '</ul>';

        $('body').append(htmlMenu);
    }
    menu.clickOnItem = function () {
        $('.menu__a').on('click', (e) => {
            $('.menu__a').removeClass('menu__a-active');
            console.log(e)
            $(e.currentTarget).addClass('menu__a-active')
        })
    }
    menu.init();
    menu.clickOnItem();
    $('.menu__a').eq(0).addClass('menu__a-active');

})