$(document).ready(function(){
    var labItem = $('.content-lab--item');
    var meetingIitem = $('.content-meeting--item');
    var eventItem = $('.content-event--item');
    var whcIitem = $('.content-whc--item');

    meetingIitem.click(function(){
        if(!$(this).hasClass('upDown1')){
            $(this).addClass('upDown1');
            meetingIitem.animate({
                margin: '-35px 0px 0px 0px'
            },500);
        }
        else{
            $(this).removeClass('upDown1');
            meetingIitem.animate({
                margin: '18px 0px 0px 0px'
            },500);
        }
    });

    labItem.click(function(){
        if(!$(this).hasClass('upDown')){
            $(this).addClass('upDown');
            meetingIitem.animate({
                margin: '-35px 0px 0px 0px'
            },500);
        }
        else{
            $(this).removeClass('upDown');
            meetingIitem.animate({
                margin: '18px 0px 0px 0px'
            },500);
        }
    });

    eventItem.click(function(){
        if(!$(this).hasClass('upDown1')){
            $(this).addClass('upDown1');
            eventItem.animate({
                margin: '-35px 0px 0px 0px'
            },500);
        }
        else{
            $(this).removeClass('upDown1');
            eventItem.animate({
                margin: '18px 0px 0px 0px'
            },500);
        }
    });

    whcIitem.click(function(){
        if(!$(this).hasClass('upDown')){
            $(this).addClass('upDown');
            eventItem.animate({
                margin: '-35px 0px 0px 0px'
            },500);
        }
        else{
            $(this).removeClass('upDown');
            eventItem.animate({
                margin: '18px 0px 0px 0px'
            },500);
        }
    });
})