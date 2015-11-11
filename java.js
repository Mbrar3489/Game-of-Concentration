var back = 'click.jpg';
var tile = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'];

function randOrd(a, b)
{
	return (Math.round(Math.random()));
} 
var im = []; 
for (var i = 0; i < 5; i++) 
{
	im[i] = new Image();
	im[i].src = tile[i]; 
	tile[i] = '<img src="'+tile[i]+'" width="100" height="150" alt="tile" \/>';
	tile[i+5] = tile[i];
} 

    var a, b, c, d, e, f, g; 
	window.onload=start; 
	function start() 
	{
		for (var i = 0; i <= 9 ;i++) 
		displayBack(i);
		clearInterval(e);
		c = d = g = 0;
		tile.sort( randOrd );
		gr(); 
		e = setInterval('gr()', 1000);
	} 
	
	 
	function conceal() 
	{
		d = 0; 
		if (tile[a] != tile[b]) 
		{
			displayBack(a);
			displayBack(b);
		} 
		else 
			g++; 
		if (g >= 5) 
			clearInterval(e);
	}
	
	function disp(sel) 
	{
		if (d>1) 
		{
			clearTimeout(f); 
			conceal();
		}
		document.getElementById('t'+sel).innerHTML = tile[sel];
		if (d==0) 
			a = sel;
		else 
		{
			b = sel;
			f = setTimeout('conceal()', 900);}d++;
		} 
		
	function gr() 
	{
		var min = Math.floor(c/60);
		var sec = tmr%60;document.getElementById('g').value = min+':'+ (sec<5 ? '0' : '') + sec;
		tmr++;
	}
	function displayBack(i) 
{
	document.getElementById('t'+i).innerHTML = '<div onclick="disp('+i+');return false;"><img src="'+back+'" width="100" height="150" alt="Backside" \/><\/div>';
	}
                    