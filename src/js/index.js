import { $ } from './library/jquery-module.js';
import 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js';
import 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js';
import '../../swiper-master/package/swiper-bundle.min.js';

$(function() {
    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 底部微信二维码
    $('.contact>div>a:nth-child(2)').on('mouseover', function() {
        $('.contact>div>img').attr('style', `display:block`);
    });

    $('.contact>div>a:nth-child(2)').on('mouseout', function() {
        $('.contact>div>img').attr('style', `display:none`);
    });

    // 侧边栏二维码
    $('.right_nav>ul>li:nth-child(2)').on('mouseover', function() {
        $('.right_nav>ul>div:nth-child(1)').attr('style', `display:block`);
    });

    $('.right_nav>ul>li:nth-child(2)').on('mouseout', function() {
        $('.right_nav>ul>div:nth-child(1)').attr('style', `display:none`);
    });

    // 回顶部按钮
    $(window).on('scroll', function() {
        if (document.documentElement.scrollTop > screen.availHeight) {
            $('.right_nav>ul>li:last-child').attr('style', `display:block`);
        } else {
            $('.right_nav>ul>li:last-child').attr('style', `display:none`);
        }
    });

    // 底部网站安全
    setInterval(function() {
        $('.img2').toggleClass('hidden');
    }, 5000);

    // tv栏切换
    $('.tv>h2>ul>li').on('mouseover', function(ev) {
        $(this).addClass('active_1').siblings().removeClass('active_1');
        if (ev.target.className === 'tab active_1') {
            $('.active1_').attr('style', `display:block`);
        } else {
            $('.active1_').attr('style', `display:none`);
        }
    });

    // tv栏网页渲染
    $.ajax({
        type: "get",
        url: "../../interface/getData.php",
        dataType: "json",
        success: function(msg) {
            let temp = '';
            msg.forEach(elm => {
                let src = JSON.parse(elm.src);

                if (elm.price_pre) {
                    elm.price_pre = elm.price_pre + '元';
                }

                temp += `<div class="bottom_14">
                    <a href="product.html?id=${elm.ID}">
                        <img  class="lazy" data-original="../img/tv/${src.url}" alt="">
                        <span>${elm.name}</span>
                        <p>${elm.detail}</p>
                        <em>${elm.price_now}元起&nbsp;&nbsp;<del>${elm.price_pre}</del></em>
                    </a>
                </div>`
            });

            $('.tv>div:nth-child(4)').prepend(temp);

            jQuery(document).ready(function($) {
                $("img.lazy").lazyload({
                    placeholder: "../img/mi-ti.png",
                    effect: "fadeIn"
                });
            });
        }
    });

    jQuery(document).ready(function($) {
        $("img.lazy").lazyload({
            placeholder: "../img/mi-ti.png",
            effect: "fadeIn"
        });
    });

    function fn(num, sum = $('.onskill>div').length) {
        let temp = sum;
        let temp2 = $('.onskill').position().left;

        setInterval(function(fan = 1) {
            let left = $('.onskill').position().left;
            if (sum - num >= num) {
                left -= num * 248 * fan;
                sum = sum - num;
            } else if (sum > num && sum < 2 * num) {
                left -= (sum - num) * 248 * fan;
                sum = sum - num;
            } else {
                sum = temp;
                left = temp2;
            }

            $('.onskill').attr('style', `left:${left}px`);
        }, 4000);
    }
    fn(4);


    let h = 1;
    let m = 59;
    let s = 10;
    setInterval(function() {
        s--;
        if (s == 0) {
            s = 59;
            if (m == 0) {
                h--;
                m = 59;
            } else {
                m--;
            }
        }
        $('.time>span:nth-of-type(1)').html('0' + h);
        $('.time>span:nth-of-type(2)').html(m < 10 ? '0' + m : m);
        $('.time>span:nth-of-type(3)').html(s < 10 ? '0' + s : s);
    }, 1000);

    $('.you').on('click', function() {
        let left = $('.onskill').position().left - 992;
        $('.onskill').attr('style', `left:${left}px`);
    });
    $('.zuo').on('click', function() {
        let left = $('.onskill').position().left;
        console.log(left);
        if (left < 234) {
            left += 992;
            $('.onskill').attr('style', `left:${left}px`);
        }
    });
});