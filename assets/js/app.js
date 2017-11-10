import style from '../css/likely.css';
import './likely';
import 'bootstrap';
import 'howler';
import 'ilyabirman-jouele';

$(function(){
    var playClass = '.jouele-info-control-button-icon_play';
    var pauseClass = '.jouele-info-control-button-icon_pause';
    function setActive(el){
        $('.block-player .wrapper.active').removeClass('active');
        el.closest('.wrapper').addClass('active');
    }
    function playStream(el){
        el.click(function(){
            setActive($(this));
        })
    }
    function pauseStream(el){
        el.click(function(){
            $(this).closest('.wrapper').removeClass('active');
        })
    }
    playStream($(playClass));
    pauseStream($(pauseClass));
    $('.player-link').click(function(){
        $('.block-player .wrapper.active').removeClass('active');
        if($(this).hasClass('active') && $(this).closest('.wrapper').hasClass('active')){
            $(this).removeClass('active');
            var player_btn = $(this).closest('.controls').find('.jouele-info-control-link');
            player_btn.find(pauseClass).click();
        }else{
            $(this).siblings('a').removeClass('active');
            $(this).addClass('active')
            var url = $(this).attr('href');
            var jouele_btn = $(this).closest('.controls').find('.jouele');
            jouele_btn.jouele("destroy");
            jouele_btn = $(this).closest('.controls').find('.jouele');
            jouele_btn.attr('href',url);
            jouele_btn.jouele();
            jouele_btn = $(this).closest('.controls').find('.jouele');
            jouele_btn.find('.jouele-info-control-button-icon').bind('click');
            jouele_btn.find(playClass).click();
            playStream(jouele_btn.find(playClass));
            pauseStream(jouele_btn.find(pauseClass));
            setActive(jouele_btn.find(playClass));
        }
        return false;
    })
});