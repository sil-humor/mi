import { $ } from './library/jquery-module.js';

$(function() {

    $('.login_>div:nth-child(1)>span').on('click', function(ev) {
        $(this).addClass('active').siblings().removeClass('active');
        if (ev.target.className === 'saoma active') {
            $('.nr_two').attr('style', `display:block`);
        } else {
            $('.nr_two').attr('style', `display:none`);
        }
    });
});