<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>TrafficBuddy - Task - Tomware</title>

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	
	<style>
	.table-responsive {
		height: 400px !important;
		overflow-y: scroll;
	}
	</style>
</head>	
<body>
	<div class="container">
		<div class="row">
			<div class="page-header">
				<h1>TrafficBuddy - Task - Tomware</h1>
				<select id="MaxCars" name="MaxCars">
					<option value="25">25 Cars</option>
					<option value="50">50 Cars</option>
					<option value="100">100 Cars</option>
					<option value="1000">1000 Cars</option>
				</select>
			</div>
			<div class="col-md-7">
				<div id="map" style="width: 100%; height: 400px"></div>
			</div>
			
			<div class="col-md-5 table-responsive">
				<table class="table table-striped">
				  <thead>
					<tr>
					  <th>#</th>
					  <th>Car</th>
					  <th>Speed</th>
					  <th>Position</th>
					</tr>
				  </thead>
				  <tbody id="cars">

				  </tbody>
				</table>
			</div>
		</div>
	</div>	
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<!-- Custom Map JS File !-->
	<!--<script src="./jsMap.js"></script>-->
	<script src="./OldMap.js"></script>
	
	<!-- Google Map Key !-->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgPECsv6CNriZlqLYJY2EMyOShqKSbKBc&callback=initMap"></script>
	
</body>
</html>