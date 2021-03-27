import { $ } from './library/jquery-module.js';

$(function() {

    $("input[type='tel']").on('click', function() {
        if ($(this).val() === '') {
            $('.wrong_msg').html('请输入手机号码!');
        }
    });

    $("input[type='tel']").on('change', function() {
        let reg = new RegExp();
        reg = /^(?:(?:\+|00)86)?1\d{10}$/;
        let flag = reg.test($(this).val());

        if (!flag) {
            $('.wrong_msg').html('手机号码格式错误');
        } else {
            $('.wrong_msg').html('');
        }
    });
});