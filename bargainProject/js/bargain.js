//点击活动说明，砍价记录，公司介绍
$('.detalisUL').find('li').each(function(ins) {
	$(this).click(function() {
		if($('.down').hasClass('active')) {
			$('.down').removeClass('active');
			$('.down').eq(ins).addClass('active').siblings().removeClass('active');
		}
		$('.declare').eq(ins).addClass('active').siblings().removeClass('active');
	})

})
//分享
$('.share').click(function() {
	$('.invites').show();
})
$('.hiddens').click(function() {
	$('.invites').hide();
})

//註冊彈框
$('.btnPartake').click(function(){
	$('.show-ewm').show();
})
$('.hidden').click(function() {
	$('.show-ewm').hide();
	$('.power-success').hide();
	$('.power-fail').hide();
})
//砍价成功
$('.btnOne').click(function(){
//	$('.power-success').show();
	$('.power-fail').show();
})
$('.btnTwo').click(function(){
	$('.show-ewm').show();
})
$('.Iknow').click(function(){
	$('.power-success').hide();
	$('.power-fail').hide();
})
