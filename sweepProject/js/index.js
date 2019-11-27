$('.footer-ul').find('li').each(function(ins) {
	$(this).click(function() {
		$('.award-list').eq(ins).addClass('active').siblings().removeClass('active');
	})
})
$('.close').each(function() {
	$(this).click(function() {
		$('.show-ewm').hide();
		$('.show-fail').hide();
		$('.show-success').hide();
	})
})
$('.zhidao').each(function() {
	$(this).click(function() {
		$('.show-ewm').hide();
		$('.show-fail').hide();
		$('.show-success').hide();
	})
})
$('.share').click(function() {
	$('.invites').show();
})
$('.hiddens').click(function() {
	$('.invites').hide();
})
