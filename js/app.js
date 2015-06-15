$(document).ready (function(){

var printfizz="";
for (var i=1; i<=100;i++)
{
	printfizz="";

	if(i%3==0 && i%5==0)
	{
      printfizz="fizz buzz";
	}
	else if (i%3==0)
	{
		printfizz="fizz";
	}
	else if (i%5==0)
	{
		printfizz="buzz";
	}
	else 
	{
		printfizz=i;
	}

	var html = '<p>' + printfizz + '</p>';
	 $('body').append(html);
}

});