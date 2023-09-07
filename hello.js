$(function () {
	$("#qieh").click(function () {
		if ($("#qieh").is(":checked")) {
			$("#app").css("display", "none");
			$("#app1").css("display", "block")
		} else {
			$("#app1").css("display", "none");
			$("#app").css("display", "block")
		}
	})
})

window.console && console.log("解出来了？ 嗯挺好（喜） 你可以提一个小礼物 在我能力范围之内顺便不能过分就行")


var _PageHeight = document.documentElement.clientHeight,
	_PageWidth = document.documentElement.clientWidth;
var _LoadingTop = _PageHeight > 100 ? (_PageHeight - 100) / 2 : 0,
	_LoadingLeft = _PageWidth > 35 ? (_PageWidth - 35) / 2 : 0;
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0; opacity:0.3; filter: alpha(opacity=30); background-color:#000;z-index:10000;"><div class="coffee_cup"></div></div>';
document.write(_LoadingHtml);
document.onreadystatechange = completeLoading;

function completeLoading() {
	if (document.readyState == "complete") {
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.parentNode.removeChild(loadingMask)
	}
}