// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from
	//Dictionary length checker
	Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
	};
	// type checker
	function type(obj){
		return Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1];
	}
	//get the size
	var dict_size=Object.size(current_dict);
	//make an array of just keys
	var keys = new Array();
	for (var i in current_dict){
		keys.push(i);
	}
	//assign random number generator to key and find key value
	function getword(){
		var answer= keys[Math.floor(Math.random() * dict_size)];
		var word = current_dict[answer];
		//console.log(current_dict);
		return [word,answer];
	}
	function checkanswer(answer,word){
		if(answer==ans){
			//insert row into table with class "correct"	
			$('tr.hist').first().before('<tr class="hist correct"><td>'+werd+'</td><td>'+answer+'</td><td><span class="ui-icon ui-icon-check"></span></td></tr>');
		}else{
			//insert row into table with class "wrong"	
			$('tr.hist').first().before('<tr class="hist wrong"><td>'+werd+'</td><td>'+answer+'</td><td>'+ans+'</td></tr>');
		}
	}
	
	//loadword function
	function loadword(){
		splork = getword();
		werd = splork[0];
		ans = splork[1];
		$('.word').html(werd);		
	}
	//click function
	function cleeck(inp, wordval){
		if(inp!=''){
			checkanswer(inp,wordval);
			loadword();
			$('.inputbox').val('');
			$('.inputbox').focus();
		}
	}

	//autocomplete
	$(function() {
		$('.inputbox').autocomplete({
			source: keys,
			select: function(event, ui) {
				cleeck(ui.item["value"],werd)
			},
			minLength:2
		});
		$('.inputbox').bind("autocompleteclose", function(event,ui){
			$('.inputbox').val('');
		});
	});
	
	//checker
	$('.inputbox').keypress(function(event){
		if(event.which==13){
			$('.see').click();
		}
	});
	
	//set some things up to begin with
	$('.to').html(lang_to);
	$('.from').html(lang_from);
	var splork = getword();
	var werd = splork[0];
	var ans = splork[1];
	$('.word').html(werd);
	$('.inputbox').focus();
	$('.see').click(function(){
		var inpval = $('.inputbox').val();
		var wordval = $('.word').val();
		cleeck(inpval,wordval);
	});
});