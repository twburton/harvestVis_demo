
svg1=document.getElementById('svg1');
svgAlaska=document.getElementById('svgAlaska');
svgAlabama=document.getElementById('svgAlabama');
svgArkansas=document.getElementById('svgArkansas');
svgArizona=document.getElementById('svgArizona');
svgCalifornia=document.getElementById('svgCalifornia');
svgColorado=document.getElementById('svgColorado');
svgHawaii=document.getElementById('svgHawaii');
svgConnecticut=document.getElementById('svgConnecticut');
svgDelaware=document.getElementById('svgDelaware');
svgFlorida=document.getElementById('svgFlorida');
svgGeorgia=document.getElementById('svgGeorgia');
svgIowa=document.getElementById('svgIowa');
svgIdaho=document.getElementById('svgIdaho');
svgIllinois=document.getElementById('svgIllinois');
svgIndiana=document.getElementById('svgIndiana');
svgKansas=document.getElementById('svgKansas');
svgKentucky=document.getElementById('svgKentucky');
svgLouisiana=document.getElementById('svgLouisiana');
svgMassachusetts=document.getElementById('svgMassachusetts');
svgMaryland=document.getElementById('svgMaryland');
svgMaine=document.getElementById('svgMaine');
svgMichigan=document.getElementById('svgMichigan');
svgMinnesota=document.getElementById('svgMinnesota');
svgMissouri=document.getElementById('svgMissouri');
svgMississipi=document.getElementById('svgMississipi');
svgMontana=document.getElementById('svgMontana');
svgNorthcarolina=document.getElementById('svgNorthcarolina');
svgNorthdakota=document.getElementById('svgNorthdakota');
svgNebraska=document.getElementById('svgNebraska');
svgNewhampshire=document.getElementById('svgNewhampshire');
svgNewjersey=document.getElementById('svgNewjersey');
svgNewmexico=document.getElementById('svgNewmexico');
svgNevada=document.getElementById('svgNevada');
svgNewyork=document.getElementById('svgNewyork');
svgOhio=document.getElementById('svgOhio');
svgOklahoma=document.getElementById('svgOklahoma');
svgOregon=document.getElementById('svgOregon');
svgPennsylvania=document.getElementById('svgPennsylvania');
svgRhodeisland=document.getElementById('svgRhodeisland');
svgSouthcarolina=document.getElementById('svgSouthcarolina');
svgSouthdakota=document.getElementById('svgSouthdakota');
svgTennessee=document.getElementById('svgTennessee');
svgTexas=document.getElementById('svgTexas');
svgUtah=document.getElementById('svgUtah');
svgVirginia=document.getElementById('svgVirginia');
svgVermont=document.getElementById('svgVermont');
svgWashington=document.getElementById('svgWashington');
svgWisconsin=document.getElementById('svgWisconsin');
svgWestvirginia=document.getElementById('svgWestvirginia');
svgWyoming=document.getElementById('svgWyoming');

//make for each state
function hideall(){
svgAlaska.style.display = 'none';
svgAlabama.style.display = 'none';
svgArkansas.style.display = 'none';
svgArizona.style.display = 'none';
svgCalifornia.style.display = 'none';
svgColorado.style.display = 'none';
svgHawaii.style.display = 'none';
svgConnecticut.style.display = 'none';
svgDelaware.style.display = 'none';
svgFlorida.style.display = 'none';
svgGeorgia.style.display = 'none';
svgIowa.style.display = 'none';
svgIdaho.style.display = 'none';
svgIllinois.style.display = 'none';
svgIndiana.style.display = 'none';
svgKansas.style.display = 'none';
svgKentucky.style.display = 'none';
svgLouisiana.style.display = 'none';
svgMassachusetts.style.display = 'none';
svgMaryland.style.display = 'none';
svgMaine.style.display = 'none';
svgMichigan.style.display = 'none';
svgMinnesota.style.display = 'none';
svgMissouri.style.display = 'none';
svgMississippi.style.display = 'none';
svgMontana.style.display = 'none';
svgNorthcarolina.style.display = 'none';
svgNorthdakota.style.display = 'none';
svgNebraska.style.display = 'none';
svgNewhampshire.style.display = 'none';
svgNewjersey.style.display = 'none';
svgNewmexico.style.display = 'none';
svgNevada.style.display = 'none';
svgNewyork.style.display = 'none';
svgOhio.style.display = 'none';
svgOklahoma.style.display = 'none';
svgOregon.style.display = 'none';
svgPennsylvania.style.display = 'none';
svgRhodeisland.style.display = 'none';
svgSouthcarolina.style.display = 'none';
svgSouthdakota.style.display = 'none';
svgTennessee.style.display = 'none';
svgTexas.style.display = 'none';
svgUtah.style.display = 'none';
svgVirginia.style.display = 'none';
svgVermont.style.display = 'none';
svgWashington.style.display = 'none';
svgWisconsin.style.display = 'none';
svgWestvirginia.style.display = 'none';
svgWyoming.style.display = 'none';
}
hideall();
svgLouisiana.style.display = 'block';
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
	//hideall();
	hideall();
	svgCalifornia.style.display = 'block';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgCalifornia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgCalifornia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgCalifornia.setAttribute("width",svgW/1.5)
    svgCalifornia.setAttribute("height",svgH)
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
document.getElementById('AZ').addEventListener('click', function(ev){
	hideall();
	svgArizona.style.display = 'block';
	
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgArizona.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgArizona.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgArizona.setAttribute("width",svgW/1.5)
    svgArizona.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgArizona.addEventListener('click', function(ev){
		svgArizona.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

//TEXAS
document.getElementById('TX').addEventListener('click', function(ev){
	
	hideall();
	svgTexas.style.display = 'block';
	svgTexas.setAttribute("viewBox", "170 250 200 30"); 
	svgTexas.setAttribute("height", "800"); 
	svgTexas.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgTexas.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgTexas.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgTexas.setAttribute("width",svgW/1.5)
    svgTexas.setAttribute("height",svgH)
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
	hideall();
	svgNorthdakota.style.display = 'block';
	svgNorthdakota.setAttribute("viewBox", "200 30 120 50"); 
	svgNorthdakota.setAttribute("height", "500"); 
	svgNorthdakota.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNorthdakota.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNorthdakota.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNorthdakota.setAttribute("width",svgW/1.5)
    svgNorthdakota.setAttribute("height",svgH)
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
	hideall();
	svgLouisiana.style.display = 'block';
	svgLouisiana.setAttribute("viewBox", "330 235 50 60"); 
	svgLouisiana.setAttribute("height", "500"); 
	svgLouisiana.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgLouisiana.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgLouisiana.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgLouisiana.setAttribute("width",svgW/1.5)
    svgLouisiana.setAttribute("height",svgH)
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


document.getElementById('AK').addEventListener('click', function(ev){
	hideall();
	svgAlaska.style.display = 'block';
	svgAlaska.setAttribute("viewBox", "80 155 50 150"); 
	svgAlaska.setAttribute("height", "1200"); 
	svgAlaska.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgAlaska.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgAlaska.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgAlaska.setAttribute("width",svgW/1.5)
    svgAlaska.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgAlaska.addEventListener('click', function(ev){
		svgAlaska.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

document.getElementById('AL').addEventListener('click', function(ev){
	hideall();
	svgAlabama.style.display = 'block';
	svgAlabama.setAttribute("viewBox", "80 155 50 150"); 
	svgAlabama.setAttribute("height", "1200"); 
	svgAlabama.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgAlabama.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgAlabama.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgAlabama.setAttribute("width",svgW/1.5)
    svgAlabama.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgAlabama.addEventListener('click', function(ev){
		svgAlabama.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

document.getElementById('AR').addEventListener('click', function(ev){
	hideall();
	svgArkansas.style.display = 'block';
	svgArkansas.setAttribute("viewBox", "80 155 50 150"); 
	svgArkansas.setAttribute("height", "1200"); 
	svgArkansas.setAttribute("width", "1200"); 
	
  	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgArkansas.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgArkansas.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgArkansas.setAttribute("width",svgW/1.5)
    svgArkansas.setAttribute("height",svgH)
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
		myArray2[1] = "q";
		myArray2[2] = "a";
		myArray2[3] = "a";
		myArray2[4] = "a";
		myArray2[5] = "a";
		myArray2[6] = "a";
		myArray2[7] = "a";
		myArray2[8] = "a";
		myArray2[9] = "a";
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
	svgArkansas.addEventListener('click', function(ev){
		svgArkansas.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

document.getElementById('CO').addEventListener('click', function(ev){
	hideall();
	svgColorado.style.display = 'block';
	svgColorado.setAttribute("viewBox", "80 155 50 150"); 
	svgColorado.setAttribute("height", "1200"); 
	svgColorado.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgColorado.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgColorado.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgColorado.setAttribute("width",svgW/1.5)
    svgColorado.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgColorado.addEventListener('click', function(ev){
		svgColorado.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('CT').addEventListener('click', function(ev){
	hideall();
	svgConnecticut.style.display = 'block';
	svgConnecticut.setAttribute("viewBox", "80 155 50 150"); 
	svgConnecticut.setAttribute("height", "1200"); 
	svgConnecticut.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgConnecticut.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgConnecticut.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgConnecticut.setAttribute("width",svgW/1.5)
    svgConnecticut.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgConnecticut.addEventListener('click', function(ev){
		svgConnecticut.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('DE').addEventListener('click', function(ev){
	hideall();
	svgDelaware.style.display = 'block';
	svgDelaware.setAttribute("viewBox", "80 155 50 150"); 
	svgDelaware.setAttribute("height", "1200"); 
	svgDelaware.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgDelaware.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgDelaware.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgDelaware.setAttribute("width",svgW/1.5)
    svgDelaware.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgDelaware.addEventListener('click', function(ev){
		svgDelaware.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('FL').addEventListener('click', function(ev){
	hideall();
	svgFlorida.style.display = 'block';
	svgFlorida.setAttribute("viewBox", "80 155 50 150"); 
	svgFlorida.setAttribute("height", "1200"); 
	svgFlorida.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgFlorida.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgFlorida.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgFlorida.setAttribute("width",svgW/1.5)
    svgFlorida.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgFlorida.addEventListener('click', function(ev){
		svgFlorida.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

document.getElementById('GA').addEventListener('click', function(ev){
	hideall();
	svgGeorgia.style.display = 'block';
	svgGeorgia.setAttribute("viewBox", "80 155 50 150"); 
	svgGeorgia.setAttribute("height", "1200"); 
	svgGeorgia.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgGeorgia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgGeorgia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgGeorgia.setAttribute("width",svgW/1.5)
    svgGeorgia.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgGeorgia.addEventListener('click', function(ev){
		svgGeorgia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

document.getElementById('HI').addEventListener('click', function(ev){
	hideall();
	svgHawaii.style.display = 'block';
	svgHawaii.setAttribute("viewBox", "80 155 50 150"); 
	svgHawaii.setAttribute("height", "1200"); 
	svgHawaii.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgHawaii.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgHawaii.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgHawaii.setAttribute("width",svgW/1.5)
    svgHawaii.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgHawaii.addEventListener('click', function(ev){
		svgHawaii.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('ID').addEventListener('click', function(ev){
	hideall();
	svgIdaho.style.display = 'block';
	svgIdaho.setAttribute("viewBox", "80 155 50 150"); 
	svgIdaho.setAttribute("height", "1200"); 
	svgIdaho.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIdaho.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIdaho.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIdaho.setAttribute("width",svgW/1.5)
    svgIdaho.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgIdaho.addEventListener('click', function(ev){
		svgIdaho.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('IL').addEventListener('click', function(ev){
	hideall();
	svgIllinois.style.display = 'block';
	svgIllinois.setAttribute("viewBox", "80 155 50 150"); 
	svgIllinois.setAttribute("height", "1200"); 
	svgIllinois.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIllinois.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIllinois.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIllinois.setAttribute("width",svgW/1.5)
    svgIllinois.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgIllinois.addEventListener('click', function(ev){
		svgIllinois.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('IN').addEventListener('click', function(ev){
	hideall();
	svgIndiana.style.display = 'block';
	svgIndiana.setAttribute("viewBox", "80 155 50 150"); 
	svgIndiana.setAttribute("height", "1200"); 
	svgIndiana.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIndiana.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIndiana.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIndiana.setAttribute("width",svgW/1.5)
    svgIndiana.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgIndiana.addEventListener('click', function(ev){
		svgIndiana.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('IA').addEventListener('click', function(ev){
	hideall();
	svgIowa.style.display = 'block';
	svgIowa.setAttribute("viewBox", "80 155 50 150"); 
	svgIowa.setAttribute("height", "1200"); 
	svgIowa.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIowa.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIowa.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIowa.setAttribute("width",svgW/1.5)
    svgIowa.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgIowa.addEventListener('click', function(ev){
		svgIowa.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('KS').addEventListener('click', function(ev){
	hideall();
	svgKansas.style.display = 'block';
	svgKansas.setAttribute("viewBox", "80 155 50 150"); 
	svgKansas.setAttribute("height", "1200"); 
	svgKansas.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgKansas.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgKansas.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgKansas.setAttribute("width",svgW/1.5)
    svgKansas.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgKansas.addEventListener('click', function(ev){
		svgKansas.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('KY').addEventListener('click', function(ev){
	hideall();
	svgKentucky.style.display = 'block';
	svgKentucky.setAttribute("viewBox", "80 155 50 150"); 
	svgKentucky.setAttribute("height", "1200"); 
	svgKentucky.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgKentucky.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgKentucky.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgKentucky.setAttribute("width",svgW/1.5)
    svgKentucky.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgKentucky.addEventListener('click', function(ev){
		svgKentucky.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('ME').addEventListener('click', function(ev){
	hideall();
	svgMaine.style.display = 'block';
	svgMaine.setAttribute("viewBox", "80 155 50 150"); 
	svgMaine.setAttribute("height", "1200"); 
	svgMaine.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMaine.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMaine.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMaine.setAttribute("width",svgW/1.5)
    svgMaine.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMaine.addEventListener('click', function(ev){
		svgMaine.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MD').addEventListener('click', function(ev){
	hideall();
	svgMaryland.style.display = 'block';
	svgMaryland.setAttribute("viewBox", "80 155 50 150"); 
	svgMaryland.setAttribute("height", "1200"); 
	svgMaryland.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMaryland.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMaryland.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMaryland.setAttribute("width",svgW/1.5)
    svgMaryland.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMaryland.addEventListener('click', function(ev){
		svgMaryland.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MA').addEventListener('click', function(ev){
	hideall();
	svgMassachusetts.style.display = 'block';
	svgMassachusetts.setAttribute("viewBox", "80 155 50 150"); 
	svgMassachusetts.setAttribute("height", "1200"); 
	svgMassachusetts.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMassachusetts.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMassachusetts.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMassachusetts.setAttribute("width",svgW/1.5)
    svgMassachusetts.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMassachusetts.addEventListener('click', function(ev){
		svgMassachusetts.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MI').addEventListener('click', function(ev){
	hideall();
	svgMichigan.style.display = 'block';
	svgMichigan.setAttribute("viewBox", "80 155 50 150"); 
	svgMichigan.setAttribute("height", "1200"); 
	svgMichigan.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMichigan.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMichigan.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMichigan.setAttribute("width",svgW/1.5)
    svgMichigan.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMichigan.addEventListener('click', function(ev){
		svgMichigan.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MN').addEventListener('click', function(ev){
	hideall();
	svgMinnesota.style.display = 'block';
	svgMinnesota.setAttribute("viewBox", "80 155 50 150"); 
	svgMinnesota.setAttribute("height", "1200"); 
	svgMinnesota.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMinnesota.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMinnesota.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMinnesota.setAttribute("width",svgW/1.5)
    svgMinnesota.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMinnesota.addEventListener('click', function(ev){
		svgMinnesota.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MS').addEventListener('click', function(ev){
	hideall();
	svgMississippi.style.display = 'block';
	svgMississippi.setAttribute("viewBox", "80 155 50 150"); 
	svgMississippi.setAttribute("height", "1200"); 
	svgMississippi.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMississippi.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMississippi.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMississippi.setAttribute("width",svgW/1.5)
    svgMississippi.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMississippi.addEventListener('click', function(ev){
		svgMississippi.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MO').addEventListener('click', function(ev){
	hideall();
	svgMissouri.style.display = 'block';
	svgMissouri.setAttribute("viewBox", "80 155 50 150"); 
	svgMissouri.setAttribute("height", "1200"); 
	svgMissouri.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMissouri.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMissouri.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMissouri.setAttribute("width",svgW/1.5)
    svgMissouri.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMissouri.addEventListener('click', function(ev){
		svgMissouri.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('MT').addEventListener('click', function(ev){
	hideall();
	svgMontana.style.display = 'block';
	svgMontana.setAttribute("viewBox", "80 155 50 150"); 
	svgMontana.setAttribute("height", "1200"); 
	svgMontana.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMontana.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMontana.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMontana.setAttribute("width",svgW/1.5)
    svgMontana.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgMontana.addEventListener('click', function(ev){
		svgMontana.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NE').addEventListener('click', function(ev){
	hideall();
	svgNebraska.style.display = 'block';
	svgNebraska.setAttribute("viewBox", "80 155 50 150"); 
	svgNebraska.setAttribute("height", "1200"); 
	svgNebraska.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNebraska.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNebraska.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNebraska.setAttribute("width",svgW/1.5)
    svgNebraska.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNebraska.addEventListener('click', function(ev){
		svgNebraska.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NV').addEventListener('click', function(ev){
	hideall();
	svgNevada.style.display = 'block';
	svgNevada.setAttribute("viewBox", "80 155 50 150"); 
	svgNevada.setAttribute("height", "1200"); 
	svgNevada.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNevada.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNevada.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNevada.setAttribute("width",svgW/1.5)
    svgNevada.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNevada.addEventListener('click', function(ev){
		svgNevada.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NH').addEventListener('click', function(ev){
	hideall();
	svgNewhampshire.style.display = 'block';
	svgNewhampshire.setAttribute("viewBox", "80 155 50 150"); 
	svgNewhampshire.setAttribute("height", "1200"); 
	svgNewhampshire.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewhampshire.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewhampshire.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewhampshire.setAttribute("width",svgW/1.5)
    svgNewhampshire.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNewhampshire.addEventListener('click', function(ev){
		svgNewhampshire.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NJ').addEventListener('click', function(ev){
	hideall();
	svgNewjersey.style.display = 'block';
	svgNewjersey.setAttribute("viewBox", "80 155 50 150"); 
	svgNewjersey.setAttribute("height", "1200"); 
	svgNewjersey.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewjersey.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewjersey.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewjersey.setAttribute("width",svgW/1.5)
    svgNewjersey.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNewjersey.addEventListener('click', function(ev){
		svgNewjersey.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NM').addEventListener('click', function(ev){
	hideall();
	svgNewmexico.style.display = 'block';
	svgNewmexico.setAttribute("viewBox", "80 155 50 150"); 
	svgNewmexico.setAttribute("height", "1200"); 
	svgNewmexico.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewmexico.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewmexico.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewmexico.setAttribute("width",svgW/1.5)
    svgNewmexico.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNewmexico.addEventListener('click', function(ev){
		svgNewmexico.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NY').addEventListener('click', function(ev){
	hideall();
	svgNewyork.style.display = 'block';
	svgNewyork.setAttribute("viewBox", "80 155 50 150"); 
	svgNewyork.setAttribute("height", "1200"); 
	svgNewyork.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewyork.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewyork.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewyork.setAttribute("width",svgW/1.5)
    svgNewyork.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNewyork.addEventListener('click', function(ev){
		svgNewyork.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('NC').addEventListener('click', function(ev){
	hideall();
	svgNorthcarolina.style.display = 'block';
	svgNorthcarolina.setAttribute("viewBox", "80 155 50 150"); 
	svgNorthcarolina.setAttribute("height", "1200"); 
	svgNorthcarolina.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNorthcarolina.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNorthcarolina.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNorthcarolina.setAttribute("width",svgW/1.5)
    svgNorthcarolina.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgNorthcarolina.addEventListener('click', function(ev){
		svgNorthcarolina.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('OH').addEventListener('click', function(ev){
	hideall();
	svgOhio.style.display = 'block';
	svgOhio.setAttribute("viewBox", "80 155 50 150"); 
	svgOhio.setAttribute("height", "1200"); 
	svgOhio.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgOhio.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgOhio.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgOhio.setAttribute("width",svgW/1.5)
    svgOhio.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgOhio.addEventListener('click', function(ev){
		svgOhio.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('OK').addEventListener('click', function(ev){
	hideall();
	svgOklahoma.style.display = 'block';
	svgOklahoma.setAttribute("viewBox", "80 155 50 150"); 
	svgOklahoma.setAttribute("height", "1200"); 
	svgOklahoma.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgOklahoma.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgOklahoma.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgOklahoma.setAttribute("width",svgW/1.5)
    svgOklahoma.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgOklahoma.addEventListener('click', function(ev){
		svgOklahoma.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('OR').addEventListener('click', function(ev){
	hideall();
	svgOregon.style.display = 'block';
	svgOregon.setAttribute("viewBox", "80 155 50 150"); 
	svgOregon.setAttribute("height", "1200"); 
	svgOregon.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgOregon.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgOregon.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgOregon.setAttribute("width",svgW/1.5)
    svgOregon.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgOregon.addEventListener('click', function(ev){
		svgOregon.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('PA').addEventListener('click', function(ev){
	hideall();
	svgPennsylvania.style.display = 'block';
	svgPennsylvania.setAttribute("viewBox", "80 155 50 150"); 
	svgPennsylvania.setAttribute("height", "1200"); 
	svgPennsylvania.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgPennsylvania.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgPennsylvania.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgPennsylvania.setAttribute("width",svgW/1.5)
    svgPennsylvania.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgPennsylvania.addEventListener('click', function(ev){
		svgPennsylvania.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('RI').addEventListener('click', function(ev){
	hideall();
	svgRhodeisland.style.display = 'block';
	svgRhodeisland.setAttribute("viewBox", "80 155 50 150"); 
	svgRhodeisland.setAttribute("height", "1200"); 
	svgRhodeisland.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgRhodeisland.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgRhodeisland.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgRhodeisland.setAttribute("width",svgW/1.5)
    svgRhodeisland.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgRhodeisland.addEventListener('click', function(ev){
		svgRhodeisland.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('SC').addEventListener('click', function(ev){
	hideall();
	svgSouthcarolina.style.display = 'block';
	svgSouthcarolina.setAttribute("viewBox", "80 155 50 150"); 
	svgSouthcarolina.setAttribute("height", "1200"); 
	svgSouthcarolina.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgSouthcarolina.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgSouthcarolina.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgSouthcarolina.setAttribute("width",svgW/1.5)
    svgSouthcarolina.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgSouthcarolina.addEventListener('click', function(ev){
		svgSouthcarolina.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('SD').addEventListener('click', function(ev){
	hideall();
	svgSouthdakota.style.display = 'block';
	svgSouthdakota.setAttribute("viewBox", "80 155 50 150"); 
	svgSouthdakota.setAttribute("height", "1200"); 
	svgSouthdakota.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgSouthdakota.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgSouthdakota.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgSouthdakota.setAttribute("width",svgW/1.5)
    svgSouthdakota.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgSouthdakota.addEventListener('click', function(ev){
		svgSouthdakota.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('TN').addEventListener('click', function(ev){
	hideall();
	svgTennessee.style.display = 'block';
	svgTennessee.setAttribute("viewBox", "80 155 50 150"); 
	svgTennessee.setAttribute("height", "1200"); 
	svgTennessee.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgTennessee.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgTennessee.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgTennessee.setAttribute("width",svgW/1.5)
    svgTennessee.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgTennessee.addEventListener('click', function(ev){
		svgTennessee.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('UT').addEventListener('click', function(ev){
	hideall();
	svgUtah.style.display = 'block';
	svgUtah.setAttribute("viewBox", "80 155 50 150"); 
	svgUtah.setAttribute("height", "1200"); 
	svgUtah.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgUtah.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgUtah.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgUtah.setAttribute("width",svgW/1.5)
    svgUtah.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgUtah.addEventListener('click', function(ev){
		svgUtah.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('VT').addEventListener('click', function(ev){
	hideall();
	svgVermont.style.display = 'block';
	svgVermont.setAttribute("viewBox", "80 155 50 150"); 
	svgVermont.setAttribute("height", "1200"); 
	svgVermont.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgVermont.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgVermont.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgVermont.setAttribute("width",svgW/1.5)
    svgVermont.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgVermont.addEventListener('click', function(ev){
		svgVermont.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('VA').addEventListener('click', function(ev){
	hideall();
	svgVirginia.style.display = 'block';
	svgVirginia.setAttribute("viewBox", "80 155 50 150"); 
	svgVirginia.setAttribute("height", "1200"); 
	svgVirginia.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgVirginia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgVirginia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgVirginia.setAttribute("width",svgW/1.5)
    svgVirginia.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgVirginia.addEventListener('click', function(ev){
		svgVirginia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('WA').addEventListener('click', function(ev){
	hideall();
	svgWashington.style.display = 'block';
	svgWashington.setAttribute("viewBox", "80 155 50 150"); 
	svgWashington.setAttribute("height", "1200"); 
	svgWashington.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWashington.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWashington.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWashington.setAttribute("width",svgW/1.5)
    svgWashington.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgWashington.addEventListener('click', function(ev){
		svgWashington.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('WV').addEventListener('click', function(ev){
	hideall();
	svgWestvirginia.style.display = 'block';
	svgWestvirginia.setAttribute("viewBox", "80 155 50 150"); 
	svgWestvirginia.setAttribute("height", "1200"); 
	svgWestvirginia.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWestvirginia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWestvirginia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWestvirginia.setAttribute("width",svgW/1.5)
    svgWestvirginia.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgWestvirginia.addEventListener('click', function(ev){
		svgWestvirginia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('WI').addEventListener('click', function(ev){
	hideall();
	svgWisconsin.style.display = 'block';
	svgWisconsin.setAttribute("viewBox", "80 155 50 150"); 
	svgWisconsin.setAttribute("height", "1200"); 
	svgWisconsin.setAttribute("width", "1200"); 
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWisconsin.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWisconsin.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWisconsin.setAttribute("width",svgW/1.5)
    svgWisconsin.setAttribute("height",svgH)
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgWisconsin.addEventListener('click', function(ev){
		svgWisconsin.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
document.getElementById('WY').addEventListener('click', function(ev){
	hideall();
	svgWyoming.style.display = 'block';

	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWyoming.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWyoming.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWyoming.setAttribute("width",svgW/1.5)
    svgWyoming.setAttribute("height",svgH)
	
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
		myArray2[1] = "";
		myArray2[2] = "";
		myArray2[3] = "";
		myArray2[4] = "";
		myArray2[5] = "";
		myArray2[6] = "";
		myArray2[7] = "";
		myArray2[8] = "";
		myArray2[9] = "";
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
	svgWyoming.addEventListener('click', function(ev){
		svgWyoming.style.display = 'none';
		svg1.style.display = 'block';
		return;
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
