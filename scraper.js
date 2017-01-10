var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var urlToRequest = "http://www.nalleybuickgmc.com/";
var myLinks = [];
request(urlToRequest, function(error, response, body){
	if(error){
		console.log('Error :' + error);
	}
	console.log("status code: " + response.statusCode);
	var $ = cheerio.load(body);
	scrapeNav();
	//iframeScraping();
/*
	$(body).each(function( index ) {
		var srcs = $('.formThirdParty').attr('src');
		console.log("iframe src is :" + srcs);
    //var title = $(this).find('p.title > a.title').text().trim();
    //var score = $(this).find('div.score.unvoted').text().trim();
    //var user = $(this).find('a.author').text().trim();
    //console.log("Title: " + title);
    //console.log("Score: " + score);
    //console.log("User: " + user);
    //fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
});
*/
function iframeScraping(index){
	var $ = cheerio.load(body);
	$(body).each(function( index ) {
		var srcs = $('.formThirdParty').attr('src');
		console.log("iframe src is :" + srcs);
	});
}

function scrapeNav(index){
	var allNavUrls = [];
	var FilteredNavUrls = [];
	var defaultUrls = [];
	//this function will return an array of filtered non core URL..
	getNavUrls();
	console.log(allNavUrls);
	function getNavUrls(index){
		$('#pmenu > li').each(function(index){
		var navTopLvl = $(this).find('a');
		var navTopLink = navTopLvl.attr('href');
		var navSubLvl = navTopLvl.siblings('ul').find('li>a');
		var navSubLink = navSubLvl.attr('href');
		var submenu = $(this).find('li');
		$(submenu).each(function(index){
			var submenuLink = $(this).find('a').attr('href');
			allNavUrls.push(submenuLink);
			//console.log(submenuLink);
		});
		//myLinks.push(navTopLink+" "+navSubLink);
		allNavUrls.push(navTopLink);
		
		
	});


	}

/////////////

	function filterDefaultUrls(){
		var _unfiltered = myLinks;
		var _filtered = [];
		var _defaultPages = [""];

		for(i=0;i<_unfiltered.length;i++){
			_unfiltered[i];
		}

	}
}



});

/*
'reddit example'
	$('div#siteTable > div.link').each(function( index ) {
    var title = $(this).find('p.title > a.title').text().trim();
    var score = $(this).find('div.score.unvoted').text().trim();
    var user = $(this).find('a.author').text().trim();
    console.log("Title: " + title);
    console.log("Score: " + score);
    console.log("User: " + user);
    fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
});



*/