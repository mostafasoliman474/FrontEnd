const url='https://api.adviceslip.com/advice';
async function getAdvice() {
	const reponse= await fetch(url);
	const data= await reponse.json();
	const {slip}=data;
	document.getElementById('id-num').innerHTML=slip.id;
	document.getElementById('the-advice').innerHTML=slip.advice;
}
getAdvice();