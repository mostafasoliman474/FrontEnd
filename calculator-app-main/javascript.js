   function changeColor() {
            let input=document.getElementById('ranger').value;
            if (input==0) {
                document.body.style.backgroundColor="var(--Very-dark-desaturated-blue1)";
                document.getElementById('result__area').style.backgroundColor=" var(--Very-dark-desaturated-blue3)";
                document.getElementById('result__area').style.color="var(--Light-grayish-orange)";
                document.getElementById('ranger').style.backgroundColor="var(--Very-dark-desaturated-blue3)";
                document.getElementById('pad').style.backgroundColor="var(--Very-dark-desaturated-blue2)";

                var element1=document.getElementsByClassName('rest__delete');
                for (var i = 0; i<element1.length; i++) {
                    element1[i].style.backgroundColor="var(--Desaturated-dark-blue1)";
                    element1[i].style.boxShadow=" 0 5px 0 0 var(--Desaturated-dark-blue2)";
                    element1[i].style.color="white";
                }
                document.getElementById('equel').style.backgroundColor="var(--Red)";
                document.getElementById('equel').style.boxShadow=" 0 5px 0 0 var(--Dark-red)";
                document.getElementById('equel').style.color="var(--Light-grayish-orange)";

                var element2=document.getElementsByClassName('number__operator');
                for (var i = 0; i <element2.length; i++) {
                    element2[i].style.backgroundColor="var(--Light-grayish-orange)";
                    element2[i].style.boxShadow="0 5px 0 0 var(--Grayish-orange)";
                    element2[i].style.color="var(--Very-dark-grayish-blue)";
                }
                var element3=document.getElementsByClassName('clac');
                for (var i =0; i <element3.length; i++) {
                    element3[i].style.color="var(--Light-grayish-orange)";
                }
                var style = document.querySelector('[data="test"]');
                style.innerHTML = ".slider::-webkit-slider-thumb { background: var(--Red); }";


            }
            else if (input==1) {
                document.body.style.backgroundColor="var(--Light-gray)";
                document.getElementById('result__area').style.backgroundColor="var(--Very-light-gray)";
                document.getElementById('result__area').style.color="var(--Very-dark-grayish-blue)";
                document.getElementById('pad').style.backgroundColor="var(--Grayish-red)";

                element4=document.getElementsByClassName('rest__delete');
                for (var i = 0; i <element4.length; i++) {
                    element4[i].style.backgroundColor="var(--Dark-moderate-cyan)";
                    element4[i].style.boxShadow="0 5px 0 0 var(--Very-dark-cyan)";
                }

                document.getElementById('equel').style.backgroundColor="var(--Orange)";
                document.getElementById('equel').style.boxShadow=" 0 5px 0 0 var(--Dark-orange)";
                document.getElementById('equel').style.color="var(--Light-grayish-orange)";

                document.getElementById('ranger').style.backgroundColor="var(--Grayish-red)";
                var element5=document.getElementsByClassName('number__operator');
                
                for (var i =0; i <element5.length; i++) {
                    element5[i].style.backgroundColor="var(--Light-grayish-yellow)";
                    element5[i].style.boxShadow="0 5px 0 0 var(--Dark-grayish-orange)";
                    element5[i].style.color="var(--Very-dark-grayish-blue)";
                }
                var element6=document.getElementsByClassName('clac');
                for (var i =0; i <element6.length; i++) {
                    element6[i].style.color="var(--Very-dark-grayish-blue)";
                }


                var style = document.querySelector('[data="test"]');
                style.innerHTML = ".slider::-webkit-slider-thumb { background: var(--Orange); }";





            }
            else if (input==2) {
                document.body.style.backgroundColor="var(--Very-dark-violet)";
                document.getElementById('result__area').style.backgroundColor="var(--Very-dark-violet1)";
                document.getElementById('pad').style.backgroundColor="var(--Very-dark-violet1)";
                var element7=document.getElementsByClassName('rest__delete');
                for (var i = 0; i<element7.length; i++) {
                    element7[i].style.backgroundColor="var(--Dark-violet)";
                    element7[i].style.boxShadow="0 5px 0 0 var(--Vivid-magenta)";
                    element7[i].style.color="white";
                }
                document.getElementById('equel').style.backgroundColor="var(--Pure-cyan)";
                document.getElementById('equel').style.boxShadow=" 0 5px 0 0 var(--Soft-cyan)";
                document.getElementById('equel').style.color="var(--Very-dark-blue)";
                var element8=document.getElementsByClassName('number__operator');
                for (var i = 0; i <element8.length; i++) {
                    element8[i].style.backgroundColor="var(--Very-dark-violet2)";
                    element8[i].style.boxShadow="0 5px 0 0 var(--Dark-magenta)";
                    element8[i].style.color="var(--Light-yellow)";
                }
                var element9=document.getElementsByClassName('clac');
                for (var i =0; i <element9.length; i++) {
                    element9[i].style.color="var(--Light-yellow)";
                }
                document.getElementById('result__area').style.color="var(--Light-yellow)";
                document.getElementById('ranger').style.backgroundColor="var(--Very-dark-violet1)";
                var style = document.querySelector('[data="test"]');
                style.innerHTML = ".slider::-webkit-slider-thumb { background: var(--Pure-cyan); }";

            }
            
        }
    document.getElementById('ranger').addEventListener('input',changeColor);


    function display(value) {
       document.getElementById('result').innerHTML+=value;
    }

    document.getElementById('reset').onclick=function () {
        document.getElementById('result').innerHTML='';
    }

    function solve()
    {
        let x = document.getElementById("result").innerHTML;
        let y = eval(x);
        document.getElementById("result").innerHTML = y;
    }
    
    document.getElementById('DELETE').onclick=function () {
        let resultBoxNewValue=document.getElementById('result').innerHTML.slice(0,-1);
        document.getElementById('result').innerHTML=resultBoxNewValue;
    }
