var path="http://www.24karats.ru/banner/";
var html="<div id=\"vhd_FloatingAd_01\" style=\"position:fixed;bottom:-230px;left:0px;height:228px;width:100%;background-image:url('"+path+"barre_windows_1920.png');background-repeat:no-repeat;background-position:bottom left;z-index:1000;\">";
html+="<a href=\"http://evsembu.com/in.htm?wm="+ids+"\"><img src=\""+path+"banner.gif\" width=\"500\" height=\"60\" border=\"0\" style=\"position:absolute;top:100px;left:0px;\" /></a>";
html+="<a href=\"http://goo.gl/RfZYBU\" target=\"_blank\"><img src=\""+path+"cabiria.png\" width=\"400\" height=\"220\" border=\"0\" style=\"position:absolute;top:0px;right:20px;\" name=\"img_vhd_FloatingAd_01\" /></a>";
html+="<a href=\"javascript:void(0);\" name=\"a_vhd_FloatingAd_01\" style=\"position:absolute;top:195px;right:8px;text-decoration:none;color:#000;font-family:Arial, Helvetica, sans-serif;font-size:10px;\">[Закрыть]</a>";
html+="</div>";
var display=true;

$(document).ready(
	function()
	{
		$("body").prepend(html);
		$('img[name=img_vhd_FloatingAd_01]').load(function()
		{
			if(display)
			{
				$("div[id=vhd_FloatingAd_01]").animate({"bottom": "+=230px"}, "slow");		
				$("a[name=a_vhd_FloatingAd_01]").click(function(){$("div[id=vhd_FloatingAd_01]").animate({"bottom": "-=230px"}, "slow");});
			}	
			display=false;
		});
	}
);