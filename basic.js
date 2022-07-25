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

function randombgandtitle(){
	var subtitlearr = ['Buried cities edition', 'Mantle streets edition', 'And then they had sex edition', 'Black edition', 'Hate crimed edition', 'Bonfire lit edition', 'Please god kiss in V9 edition', 'Happy Never After edition', 'Starved edition', 'Dangerous criminals edition', 'Someone drew this edition', 'Moonslice OP edition', 'Kinda sorta not really an AU edition', 'Gay lizard edition', 'The road to hell edition', 'Post-mortem edition', 'Arkos Forever edition', 'Purest Ship edition', 'ORJY edition', 'Free candy edition', 'Protector of mantle edition', 'Self vs self edition', 'fifth stage of grief edition', 'Chaos incarnate edition', 'Red Trailer 2.0 edition', 'BOO! edition', 'The enemy of my enemy edition', 'Come sweet death edition', 'Looks better in fanart edition', 'R̵̯̥͖̓͐̏̂̏̀̈́̌͝ử̸̧̳̲̻̜̰̬̘̤̄̿̊͒̅̀̚͜͝n̶̞̘͝.̸̼̻͍̟̎̿̏͌͂̊̚ edition', 'Read the books edition', 'Calm fury edition' ]
    var bgm = ['bg/atlas.jpg', 'bg/atlasaid.png', 'bg/adam.png', 'bg/blake.jpg', 'bg/blake4ch.png', 'bg/blakeasleep.png', 'bg/bmblb.jpg','bg/cinderrhodes.jpg', 'bg/cindervpenny.jpg', 'bg/crimes.png', 'bg/cursed.jpg', 'bg/everyone.png', 'bg/icequeendom.jpg', 'bg/ilia.png', 'bg/ironwood.jpg', 'bg/jaunedisgust.jpg', 'bg/markos.jpg', 'bg/nnd.jpg', 'bg/orjy.jpg', 'bg/pedo.png', 'bg/penny.jpg', 'bg/pennyhacked.jpg', 'bg/pennysmile.png', 'bg/robyn.png', 'bg/ruby.jpg', 'bg/salem.jpg', 'bg/spicecream.jpg', 'bg/evangelion.jpg', 'bg/weiss.png', 'bg/weissbreach.png', 'bg/velvet.jpg', 'bg/war.jpg'];
    var x = Math.floor(Math.random() * bgm.length)
    $('html').css({
        'background' : 'url('+ bgm[x] + ') no-repeat', 'background-size' : 'cover',
    });
    $('#ed').html(subtitlearr[x]);
}
