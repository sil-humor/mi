import { $ } from './library/jquery-module.js';
import cookie from './library/cookie.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/progetData.php",
    data: { id },
    dataType: "json",
    success: function(msg) {
        let temp = '';
        let detail = JSON.parse(msg.detail);

        if (msg.price_pre) {
            msg.price_pre = msg.price_pre + '元';
        }

        temp = ` <h3>${msg.name}</h3>
            <p><span>${detail[0]}</span>${detail[1]}</p>
            <span class="oneself">小米自营</span>
            <em>${msg.price_now} 元&nbsp;<del>${msg.price_pre}</del></em>`

        $('.msg_box').html(temp);

        temp = ``;

        if (msg.color) {
            temp += ` <p>选择颜色</p>
            <a href="javascript:;">${msg.color}</a>
            `
        }

        if (msg.size) {
            temp += `<p>选择尺寸</p>
            <a href="javascript:;">${msg.size}</a>`
        }

        $('.type_box').html(temp);

        temp = ``;

        temp = `<p>${msg.name}<em>${msg.price_now}元&nbsp;<del>${msg.price_pre}</del></em></p>
        <p>延保服务 2年<em>0元</em></p>
        <div class="total-price">总计:${msg.price_now}元</div>`;

        $('.shopping_msg').html(temp);

        temp = ``;

        temp = `<h3>${msg.name}
        <a href="javascript:;">用户评价</a></h3>`;

        $('.main_top>.wrapper').html(temp);

        $('.join').on('click', function() {
            addItem(msg.ID, msg.price_now, '1');
        });
    }
});

function addItem(id, price, num) {
    let shop = cookie.get('shop');
    let product = {
        id,
        price,
        num
    };

    if (shop) {
        shop = JSON.parse(shop);

        // 判断当前的商品id在cookie数据中是否存在
        if (shop.some(el => el.id === id)) {
            shop.forEach(elm => {
                elm.id === id ? elm.num = num : null;
            });
        } else {
            shop.push(product);
        }


    } else { // 没有存cookie的情况
        shop = []; // 初始化成数组
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);


}

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

$('.member_service>div').on('click', function() {
    $(this).find('i').toggleClass('selected');
    $(this).toggleClass('orange');
});

$('.install_service>div').on('click', function() {
    $(this).find('i').toggleClass('selected');
    $(this).toggleClass('orange');
});

$('.maintain_service>div').on('click', function() {
    $(this).find('i').toggleClass('selected');
    $(this).toggleClass('orange');
});