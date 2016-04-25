<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Author" content="Sreekhar Ale">
  <meta name="Description" content="String search project, searching a string in a paragraph">
  <meta name="keywords" content="Personal website, Projects, AWS, HTTP, POST, GET, services, string project, paragraph, search string, string, analytics"></meta>
  <title>Search String</title>
  <link href="" rel="apple-touch-icon" />
  <link href="" rel="icon" />
  <link href="images/Rafiqul-Hassan-Blogger-Search.ico" rel="shortcut icon"></link>
  <link href="css/index.css" rel="stylesheet"></link>
  <script src="js/jquery.min.js" type="text/javascript" charset="UTF-8"></script>
  <script src="js/highcharts.js" type="text/javascript" charset="UTF-8"></script>
  <script src="js/index.js" type="text/javascript" charset="UTF-8"></script>
 </head>

<body>
	<div class="dimScreen"></div>
	<div class="title">
		<div class="BoxShadow">This application allows you to search the number of times a word appeared in a paragraph and it's analytics! </div>
	</div>
	<div class="container ScreenOne TextAlignCenter">
		<div class="WhiteText ContainerTitle"> Enter your text below </div>
		<textarea class="DeveloperTextStyle" required="true" placeholder="Enter text here"></textarea> </br>
		<button class="ButtonStyle ripple" data-ripple-color="grey" onclick="sendText()">Submit</button>
	</div>
	<div class="container ScreenTwo TextAlignCenter">
		<div class="WhiteText ContainerTitle"> Enter your desired word</div>
		<input type="text" class="WordStyle" placeholder="Enter text here" name="DesiredWord"><br>
		<button class="ButtonStyleAnalytics ripple" data-ripple-color="grey" onclick="sendWord()">Display Analytics</button>
	</div>
	<div class="container ScreenThree TextAlignCenter">
		<div class="WhiteText ContainerTitle"> ANALYTICS </div>
		<div class="WhiteText"> Number of times your desired word appeared : 
			<span class="ResultCount"></span>
		</div>
		<div id="analytics"></div>
		<button class="ButtonStyleRefresh ripple" data-ripple-color="grey" onclick="refreshPage()">Try with another paragraph</button>
	</div>
	<div class="dialog">
		<p>Please enter a valid text.</p>
		<div class="buttons">
			<button class="ripple" onclick="ErrorMessage()">OK</button>
		</div>
	</div>
</body>
</html>