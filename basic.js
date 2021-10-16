function show_hide()
{
	var next = event.target.nextElementSibling;
	if(next.style.display == "block")
	{
		next.style.display="none";
	}
	else
	{
		next.style.display="block"
	}
}