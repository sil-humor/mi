import { $ } from './library/jquery-module.js';
import cookie from './library/cookie.js';

let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: { idList },
        dataType: "json",
        success: function(res) {
            let temp = '';
            let temp2 = '';
            let total_num = 0;

            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.src);

                // 让ajax中获得的数据结果的id与cookie中的id 一一对应

                // 从购物车cookie数据中筛选当前遍历的数据

                let current = shop.filter(val => val.id == elm.ID);

                temp += `<div class="goods">
                <div class="col-check">
                    <i class='true'><em>✔</em></i>
                </div>
                <div class="col-img">
                    <img src="../img/tv/${picture.url}" alt="">
                </div>
                <div class="col-name">${elm.name}</div>
                <div class="col-price">${elm.price_now}</div>
                <div class="col-number">
                <input type="text" value="${current[0].num}" max="${elm.num}" min="1" data-id="${elm.ID}">
                </div>
                <div class="col-sum">${elm.price_now*current[0].num}</div>
                <div class="col-action">
                    <a href="javascript:;" class="del" data-id="${elm.ID}">
                        <i class="iconfont icon-cuo"></i>
                    </a>
                </div>
            </div>`;

                total_num += parseInt(current[0].num);
                temp2 = `<a href="#">继续购物</a>
                <span>共<i> ${total_num} </i>件商品，已选择<i> 0 </i>件</span>`;
            });

            $('.shopping_list').append(temp).find('.del').on('click', function() {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1); // 将id不为被点击元素id的剩余元素从新写入cookie
                location.reload();
            });

            $('.count_left').html(temp2);
        }
    });
}

$('.shopping_list').on('click', function(ev) {
    let temp = 0;
    let temp2 = 0;
    if (ev.target.nodeName === 'EM') {
        $(ev.target).parent().toggleClass('selected');
    }
    $.each($('.goods .selected'), function(i, n) {
        temp += parseInt($($(n).parents('.goods')).find('.col-sum').html());
        temp2 += parseInt($($(n).parents('.goods')).find('.col-number>input').val());
    });

    $('.count_right>span').html(temp);
    $('.count_left>span>i:nth-child(2)').html(' ' + temp2 + ' ');

    $(ev.target).on('change', function() {
        shop.map(el => {
            if (el.id == $(this).attr('data-id')) {
                el.num = $(this).val();
            }
        });
        cookie.set('shop', JSON.stringify(shop), 1);
        location.reload();
    });
});

$('.option i').on('click', function() {
    if (!$(this).hasClass('selected')) {
        $('.goods .true').addClass('selected');
    } else {
        $('.goods .true').removeClass('selected');
    }
});


// 底部微信二维码
$('.contact>div>a:nth-child(2)').on('mouseover', function() {
    $('.contact>div>img').attr('style', `display:block`);
});

$('.contact>div>a:nth-child(2)').on('mouseout', function() {
    $('.contact>div>img').attr('style', `display:none`);
});

// 底部网站安全
setInterval(function() {
    $('.img2').toggleClass('hidden');
}, 5000);