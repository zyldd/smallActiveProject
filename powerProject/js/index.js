(function(win, doc) {
	if(!win.addEventListener)
		return;
	var html = document.documentElement;

	function setFont() {
		var cliWidth = html.clientWidth;
		if(cliWidth > 750) {
			cliWidth = 750;
		}
		html.style.fontSize = 100 * (cliWidth / 640) + 'px';
	}
	win.addEventListener('resize', setFont, false);
	setFont();
})(window, document);
//console.log($('.footer-ul').find('li'))
$('.footer-ul').find('li').each(function(ins){
	$(this).click(function(){
		$('.footer-head').eq(ins).addClass('active').siblings().removeClass('active');
	})	
})
//填写信息
$('.take-part').click(function(){
	$('.show-ewm').show();
})
$('.hidden').click(function(){
	$('.show-ewm').hide();
})
$('#close').click(function(){
	$('.show-ewm').hide();
})