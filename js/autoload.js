try {
	var root_MetingJS = '/plugins/MetingJS/';

	setTimeout(() => {
		// <!-- require APlayer -->
		$("<link>").attr({
			href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css",
			rel: "stylesheet",
			type: "text/css"
		}).appendTo('head');
		var APlayerJs = document.createElement("script");
		APlayerJs.src = "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js";
		document.getElementsByTagName("head")[0].appendChild(APlayerJs);
		// <!-- require MetingJS -->
		var MetingJs = document.createElement("script");
		MetingJs.src = "https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js";
		document.getElementsByTagName("head")[0].appendChild(MetingJs);

		// 自定义样式
		// $("<link>").attr({
		// 	href: root_MetingJS + "main.css",
		// 	rel: "stylesheet",
		// 	type: "text/css"
		// }).appendTo('head');

		setTimeout(() => {
			$('body').append(
				'<meting-js server="netease" type="playlist" id="952725851" fixed="true" autoplay="false" order="random">\
				</meting-js>'
			);

			var lrc_check = setInterval(() => {
				console.log('检查lrc');
				if ($('.aplayer-icon-lrc').length > 0) {					
					$('.aplayer-icon-lrc').click();
					clearInterval(lrc_check);
				}
			}, 1000);

		}, 500);
	}, 3000);


} catch (err) {
	console.log("[Error] JQuery is not defined.", err)
}