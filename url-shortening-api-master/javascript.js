var count=0;

function getLink(){
	const inputValue=document.getElementById('textField');
	let url=inputValue.value;
	inputValue.value='';
	getURL(url);
}

const parametar='';
async function getURL(para) {
	const url=`https://api.shrtco.de/v2/shorten?url=${para}`;
	let response = await fetch(url);
  	let {result} = await response.json();
  	let value=result.short_link;
  	
  	count+=1;
	displayLink(para,value,count);
}
function displayLink(para,value,number){


	console.log(number);
	const linkField=
	`
	<span class='link'>
		<p class='longLink'>${para}</p>
		<hr>
		<span class='linkCopy'>
			<a class='shortLink' href='${para}' id="btNum${number}">https://${value}</a>
			<button type='submit' class='button' id="Num${number}">Copy</button>
		</span>
	</span>
	`
	let field=document.getElementById('display-field');
	field.innerHTML+= linkField;
	var x=document.getElementsByClassName('linkCopy');
	for(var i=0;i<x.length;i++){
		x[i].querySelector('.button').addEventListener('click',function(){
			let idValue=this.getAttribute('id');
			let link=document.getElementById(`bt${idValue}`).innerHTML
			navigator.clipboard.writeText(link);
			console.log(link);
			

		});
	}
	
}
function clickSvg(){
	let how=window.getComputedStyle(popUpMenu).display;
	console.log(how);
	if (how=='none') {
		document.getElementById('popUpMenu').style.display='flex';
	}
	else if (how=='flex') {
		document.getElementById('popUpMenu').style.display='none';
	}

	// console.log(document.getElementById('popUpMenu').display);
	// document.getElementById('popUpMenu').style.display='none';
	
	
}