$(document).ready(function(){

	 reload();
	 

});

function reload(){

	var output = $('#output');
	output.html("");

	$.ajax({
		url: 'http://triangon.com/phonegap-mysql/conex1.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		beforeSend: function() {
			$('#response').text('Loading...');
		},
		success: function(data, status){
		$('#response').html("");
			$.each(data, function(i,item){
				var landmark = '<li class="ui-li-has-thumb ui-btn ui-btn-icon-right ui-li ui-btn-down-c ui-btn-up-c"><div class="ui-btn-inner"><a onclick="getPage(\''+$.trim(item.name)+'\')" href="#page2" class="ui-link-inherit"><div class="ui-btn-text"><h3>'+item.name+'</h3>'
				+ '<p class="ui-li-desc">'+item.mail+'</p><div></a><span class="ui-icon ui-icon-arrow-r"></span></li>';

				output.append(landmark);
			});
		},
		error: function(){
			output.text('connect to the internet');
		}
	});

}

function getPage(name){
	console.log(name);

	var output1;
	
	output1 = $('#content_page');
	output1.html("");

	$.ajax({
		url: 'http://triangon.com/phonegap-mysql/conex1.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){
				if (name === item.name){
				console.log(item.city);
				var city = "<p>"+ item.name +"</p><h2>"+  item.uid +"</h2><p>"+ item.mail+"</p>";
				
				output1.append(city);
				return( false );
				}
				
				
			});
		},
		error: function(){
			output.text('connect to the internet');
		}
	});
}