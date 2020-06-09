$(document).ready(function(){
    var index = 0;
    $('a').on('mouseenter',function(){
       index = $(this).index();
       swiper()
    })
    $(document).on('keydown',function(event){
         console.log(event);
        
    })
    var swiper = function(){
        $('img').eq($(this).index()).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    }
    // var alinks = $('a');
    // for (var i = alinks.length - 1; i >= 0; i--) {
    // 	alinks[i].style.background = 'red';
    // 	alinks[i].style.border = '5px solid yellow';
    // 	alinks[i].style.color = '#fff';
    // 	alinks.eq(i).css({
    // 		'background': 'red',
    // 		'border': '5px solid yellow',
    // 		'color': '#fff'
    // 	}).html('<i>七彩云南' + i + '</i>')
    // 	.text('云南旅游' + i);
    // }
})
