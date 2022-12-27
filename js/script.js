$(document).ready(function () {
    /* 메인슬라이드 */
    // 슬라이드 돌리기
    mainslide();
    var mainidx = 0, ms, maincnt = $('#mainslide>.scene').length - 1;
    function mainslide () {
        ms = setInterval(() => {
            $('#mainslide>.scene').eq(mainidx).animate({left: '-100%'}).animate({left: '100%'},0);
            $('#mainslide>.indi>li').eq(mainidx).removeClass('current'); /* 슬라이드 위치표시 */
            mainidx==maincnt?mainidx=0:mainidx++;
            $('#mainslide>.scene').eq(mainidx).animate({left: 0});
            $('#mainslide>.indi>li').eq(mainidx).addClass('current'); /* 슬라이드 위치표시 */
        }, 5000);
    }

    // 슬라이드 현재 페이지 표시
    $('#mainslide>.scene').each(function(index){
        if(index==0) {
            $('#mainslide>.indi').append('<li class="current"></li>')
        }else{
            $('#mainslide>.indi').append('<li></li>')
        }
    });


    /* 아이템슬라이드 */
    var itemW = $('.item', '.itemslide').width()+30;
    var itemcnt = $('.item', '.itemslide').length - 1;
    $('.item', '.itemslide').each(function(index){
        $(this).css({left: index*itemW});
    });

    itemslide();
    var is;
    function itemslide(){
        is = setInterval(() => {
            $('.item','.itemslide').each(function(){
                $(this).animate({left: '-='+itemW});
                if(parseInt($(this).css('left')) == 0) {
                    $(this).animate({left: itemW*itemcnt}, 0);
                }
            });
        }, 3000);
    }
 
});