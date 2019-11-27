$('.barClass').find('a').each(function(ins) {
	$(this).click(function() {
		$('.backImg').eq(ins).addClass('active').siblings().removeClass('active');
		$('.ClassWenZi').eq(ins).addClass('actives').siblings().removeClass('actives');
	})
})
$(document).ready(function() {
	$(".barClass").find('a').each(function(ins) {
		$this = $(this);
		if($this[0].href == String(window.location)) {
			//          $this.eq(ins).addClass("active").siblings().removeClass('active');  
			$('.backImg').eq(ins).addClass('active').siblings().removeClass('active');
			$('.ClassWenZi').eq(ins).addClass('actives').siblings().removeClass('actives');
		}
	});
});
$('.share').click(function() {
	$('.invites').show();
})
$('.hiddens').click(function() {
	$('.invites').hide();
})
$('.Iknow').click(function(){
	$('.power-fail').hide();
	$('.power-success').hide();
})
$('.hidden').click(function() {
	$('.power-fail').hide();
	$('.power-success').hide();
})