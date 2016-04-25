//CODE FOR RIPPLE EFFECT
//START HERE

(function (window, $) {
  
  $(function() {
    
    
    $('.ripple').on('click', function (event) {
      event.preventDefault();
      
      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;
      

      
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        }) 
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
    
  });
  
})(window, jQuery);

//END HERE

var text, word;

$(document).ready(function(){
	hideInitialContainers();
});

function hideInitialContainers() {
	$('.ScreenTwo').hide();
	$('.ScreenThree').hide();
	$('.dialog').hide();
	$('.dimScreen').hide();
}

function sendText() {
	text = $('textarea.DeveloperTextStyle').val();
	if(text === "") {
		$('.dialog').show();
		$('.dimScreen').show();
	} else {
		$('.ScreenOne').hide();
		$('.ScreenTwo').show();
		$('.ScreenThree').hide();
	}
}

function ErrorMessage() {
	$('.dialog').hide();
	$('.dimScreen').hide();
}

function compareNumbers(a, b) {
  return b - a;
}

function sendWord() {
	word = $('input:text[name=DesiredWord]').val();
	word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	var resultword = word.split(" ");
	if((word === "") || (resultword.length != 1)) {
		$('.dialog').show();
		$('.dimScreen').show();
		$('input:text[name=DesiredWord]').val('');
	} else {
		$('.ScreenOne').hide();
		$('.ScreenTwo').hide();
		$('.ScreenThree').show();
		
		WordCalculate();
	}
}

function WordCalculate() {
	var wordCount = 0, uniqueResult;
	var wordCountArray = [];
	var TopWordsArray = [];
	var wordObj = [];

	for(var iCount = 0; iCount < 5; iCount++) {
		wordObj.push(new emptykeyValue("",0));
	}
	
	text = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	var result = text.split(" ");
	uniqueResult = result.slice();
	uniqueResult = uniqueResult.filter(function(itm,i,uniqueResult){
		return i==uniqueResult.indexOf(itm);
	});
	for(var iCount = 0; iCount < (uniqueResult.length); iCount++) {
		for(var jCount = 0; jCount < (result.length); jCount++) {
			if(result[jCount] === uniqueResult[iCount]) {
				wordCount++;
			}
		}
		wordObj.push(new keyValue(uniqueResult[iCount],wordCount));
		wordCount = 0;
	}
	
	wordObj.sort(custom_compare).reverse();
	
	for(var iCount = 0; iCount < 5; iCount++) {
		TopWordsArray[iCount] = wordObj[iCount].word;
		wordCountArray[iCount] = wordObj[iCount].wordCount;
	}
	
	var findWordCount = 0;
	for(var iCount = 0; iCount < (result.length-1); iCount++) {
		if(result[iCount] === word) {
			findWordCount++;
		}
	}
	$('.ResultCount').html(findWordCount);
		
	$('#analytics').highcharts({
        chart: {
			renderTo: 'analytics',
			type: 'column'
        },
		legend: {
			enabled: false
		},
        title: {
            text: 'Frequency chart'
        },
		tooltip: {
            pointFormat: '<span style="color:{series.color};padding:0">{series.name}: <b>{point.y}</span>',
            shared: true
        },
		exporting: { 
			enabled: false
		},
        xAxis: {
            categories: [TopWordsArray[0],TopWordsArray[1],TopWordsArray[2],TopWordsArray[3],TopWordsArray[4]],
			labels: {
				align: 'center',
			}
        },
        yAxis: {
            title: {
                text: 'Frequency'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
				dataLabels: {
					enabled: true,
					verticalAlign: 'top',
					y:-20
				}
            }
        },
		credits: {
			enabled: false
		},
        series: [{
            name: 'Word frequency',
			colorByPoint: true,
            data: [wordCountArray[0],wordCountArray[1],wordCountArray[2],wordCountArray[3],wordCountArray[4]]
        }]
    });
	
}

function emptykeyValue(key, value){
    this.word = key;
    this.wordCount = value;
};

function keyValue(key, value){
    this.word = key;
    this.wordCount = value;
};
  
function custom_compare (a,b) {
	return a.wordCount- b.wordCount;
}

function refreshPage() {
	location.reload();
}
