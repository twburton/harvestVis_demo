
svg1=document.getElementById('svg1');

svgCalifornia=document.getElementById('svgCalifornia');

svgLouisiana=document.getElementById('svgLouisiana');

svgNorthdakota=document.getElementById('svgNorthdakota');

svgTexas=document.getElementById('svgTexas');

//make for each state

svgCalifornia.style.display = 'none';

svgLouisiana.style.display = 'none';

svgNorthdakota.style.display = 'none';

svgTexas.style.display = 'none';

settable=0;
var timeout;
document.getElementById('svg1').addEventListener('mouseover', function(ev){

	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info'));
	  
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  var myArray    = new Array();
		
		myArray[1] = "Louisiana";
		myArray[2] = "California";
		myArray[3] = "Texas";
		myArray[4] = "Arkansas";
		myArray[5] = "Minnesota";
		myArray[6] = "North Dakota";
		myArray[7] = "Illinois";
		myArray[8] = "Missouri";
		myArray[9] = "Wisconsin";
		myArray[10] = var2;

		var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked States within the Country</td>";
	  	
	  for (var i=1; i<11; i++) {
		if (i==10){
			
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the nation</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray[i]+ "</td></tr>";
		}
		else{
		myTable+="<tr><td style='height:15px;'> " + i + " - " +myArray[i]+ "</td>";
		}
	  }  
	   myTable+="</table>";

	 document.getElementById('mytable').innerHTML = myTable;
	 });
	 $("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

$("path, circle").click(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info2'));
});

$("path, circle").mousemove(function(e) {
if (typeof $(this).data('info2') != null){
	
  $('#info-box').css('top',e.pageY-$('#info-box').height()-100);
  $('#info-box').css('left',e.pageX-($('#info-box').width())-200);
	}
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

//CALIFORNIA
document.getElementById('CA').addEventListener('click', function(ev){
	document.getElementById('svg1').style.display = 'none';
	svgCalifornia.style.display = 'block';
	svgCalifornia.setAttribute("viewBox", "50 75 50 150"); 
	svgCalifornia.setAttribute("height", "850"); 
	svgCalifornia.setAttribute("width", "1100"); 
	var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	var myArray2    = new Array();
		myArray2[1] = "Merced";
		myArray2[2] = "Colusa";
		myArray2[3] = "Butte";
		myArray2[4] = "Glenn";
		myArray2[5] = "Sutter";
		myArray2[6] = "Imperial";
		myArray2[7] = "Solano";
		myArray2[8] = "Humboldt";
		myArray2[9] = "Siskiyou";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
		var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 58)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgCalifornia.addEventListener('click', function(ev){
		
		svgCalifornia.style.display = 'none';
		svg1.style.display = 'block';
		
		return;
		
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
	
})

//TEXAS
document.getElementById('TX').addEventListener('click', function(ev){
	
	document.getElementById('svg1').style.display = 'none';
	svgTexas.style.display = 'block';
	svgTexas.setAttribute("viewBox", "170 250 200 30"); 
	svgTexas.setAttribute("height", "800"); 
	svgTexas.setAttribute("width", "1200"); 
	 var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	 var myArray2    = new Array();
		myArray2[1] = "Colorado";
		myArray2[2] = "Wharton";
		myArray2[3] = "Jefferson";
		myArray2[4] = "Matagorda";
		myArray2[5] = "Brazoria";
		myArray2[6] = "Calhoun";
		myArray2[7] = "Aransas";
		myArray2[8] = "Bell";
		myArray2[9] = "Chambers";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
				var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 254)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	document.getElementById('svgTexas').addEventListener('click', function(ev){
		svgTexas.style.display = 'none';
		svg1.style.display = 'block';
	})
		$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
	
})

//NORTH DAKOTA
document.getElementById('ND').addEventListener('click', function(ev){
	document.getElementById('svg1').style.display = 'none';
	svgNorthdakota.style.display = 'block';
	svgNorthdakota.setAttribute("viewBox", "200 30 120 50"); 
	svgNorthdakota.setAttribute("height", "500"); 
	svgNorthdakota.setAttribute("width", "1200"); 
	var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	var myArray2    = new Array();
		myArray2[1] = "Stutsman";
		myArray2[2] = "Mclean";
		myArray2[3] = "Ramsey";
		myArray2[4] = "Kidder";
		myArray2[5] = "Logan";
		myArray2[6] = "Sheridan";
		myArray2[7] = "Benson";
		myArray2[8] = "Nelson";
		myArray2[9] = "McIntosh";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
				var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 53)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNorthdakota.addEventListener('click', function(ev){
		svgNorthdakota.style.display = 'none';
		svg1.style.display = 'block';
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

//LOUISIANA
document.getElementById('LA').addEventListener('click', function(ev){
	document.getElementById('svg1').style.display = 'none';
	svgLouisiana.style.display = 'block';
	svgLouisiana.setAttribute("viewBox", "330 235 50 60"); 
	svgLouisiana.setAttribute("height", "500"); 
	svgLouisiana.setAttribute("width", "1200"); 
	var myArray    = new Array();
		myArray[1] = "-";
		myArray[2] = "-";
		myArray[3] = "-";
		myArray[4] = "-";
		myArray[5] = "-";
		myArray[6] = "-";
		myArray[7] = "-";
		myArray[8] = "-";
		myArray[9] = "-";
	var myArray2    = new Array();
		myArray2[1] = "Vermillion";
		myArray2[2] = "Cameron";
		myArray2[3] = "Terrebon";
		myArray2[4] = "Plaquemines";
		myArray2[5] = "St. Tammany";
		myArray2[6] = "St. Bernard";
		myArray2[7] = "Avoyelles";
		myArray2[8] = "St. Mary";
		myArray2[9] = "Jefferson Davis";
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  $('#info-box').html($(this).data('info2'));
	  var var1 = $(this).data('info').replace('<div>','');
	  var var2 = var1.replace('</div>','');
	  if (typeof $(this).data('info2') != 'undefined'){
	  var var3 = $(this).data('info2').replace('<div>','');
	  var var4 = var3.replace('</div>','');
	  }
		myArray[10] = "";
		myArray[11] = var2;
		myArray2[10] = var4;
		
				var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of 64)</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +myArray[11]+ "</td></tr>";
		}
		
		else{
		myTable+="<td style='height:15px;'> " + i + " - " +myArray2[i]+ "</td></tr>";
		}
	  }
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgLouisiana.addEventListener('click', function(ev){
		svgLouisiana.style.display = 'none';
		svg1.style.display = 'block';
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

function getBBox(elem){
    var svg1 = document.getElementById('svg1'), e = elem.cloneNode(true);
    e.style.display = "inline";
    svg1.appendChild(e);
    var b = e.getBBox();
    svg1.removeChild(e);
    return b;
}

window.onload = function () {
 var myArray = new Array();
    	myArray[1] = "Louisiana";
		myArray[2] = "California";
		myArray[3] = "Texas";
		myArray[4] = "Arkansas";
		myArray[5] = "Minnesota";
		myArray[6] = "North Dakota";
		myArray[7] = "Illinois";//tries to translate to finnish
		myArray[8] = "Missouri";
		myArray[9] = "Wisconsin";
    		myArray[10] = "-";
	  	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked States within the Country</td></tr>";
	  for (var i=1; i<11; i++) {
		if (i==10){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the country</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray[i]+ "</td></tr>";
		}
		else{
		myTable+="<tr><td style='height:15px;'>" + i + " - " +myArray[i]+ "</td>";
		}
	  }  
	   myTable+="</table>";

	 document.getElementById('mytable').innerHTML = myTable;
}
