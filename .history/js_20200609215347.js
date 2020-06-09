$(document).ready(function(){
    var index = 0;
    $('a').on("mouseenter",mouseenter)
    $(document).on("keydown",keydown)
    var swiper = function(){
        $('img').eq(index).css({ 'opacity': '1' }).siblings().css({ 'opacity': '0' });
    }
    var mouseenter = function(event){
        event.stopPropagation()
        index = $(this).index();
        swiper()
    }
    var keydown = function(event){
        event.stopPropagation()
        if(event.keyCode == 37){
            index = index > 0? --index:$('a').length-1
        }else if(event.keyCode == 39){
            index = index < $('a').length-1? ++index:0
        }else{
            return true
        }
        swiper()
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
