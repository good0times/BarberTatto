window.addEventListener('load', inicio());

function inicio(){

    function Barba(){

        document.querySelectorAll('.HI .caja div').forEach( imag => { //Barber
            //console.log(0);
            imag.addEventListener('click', function () {
                let aux=document.querySelector('.HI').innerHTML;
                var img=this.innerHTML;
                //console.log(img);
                //console.log(aux)
                document.querySelector('.HI').innerHTML=
                '<div style="text-align: left; display: inline; cursor: pointer;" id="back"><i class="fas fa-angle-double-left" ></i></div>'+img;
                //console.log(document.getElementById('back'));
              
                document.querySelector('.HI').classList.add('Haux');
                document.querySelector('.HI').classList.remove('HI');
                
                document.querySelector('#back').addEventListener('click', function(){
                    document.querySelector('#his').classList.add('HI');
                    document.querySelector('#his').classList.remove('Haux');
                    
                    document.querySelector('.HI').innerHTML=aux;
                    Barba();
                });
    
            });
            
        });
    }
    function Tatto(){
        document.querySelectorAll('.HO .caja div').forEach( imag => {
            imag.addEventListener('click', function () {
                let aux=document.querySelector('.HO').innerHTML;
                var img=this.innerHTML;
               // console.log(img);
                document.querySelector('.HO').innerHTML='<div style="text-align: left; display: inline; cursor: pointer" id="back2"><br><i class="fas fa-angle-double-left" ></i></div>'+img;
                //console.log(document.getElementById('back'));
                document.querySelector('.HO').classList.add('Haux');
                document.querySelector('.HO').classList.remove('HO');
                document.querySelector('#back2').addEventListener('click', function(){
                    document.querySelector('#hos').classList.add('HO');
                    document.querySelector('#hos').classList.remove('Haux');
                    
                    document.querySelector('.HO').innerHTML=aux;
                    Tatto();
                });
    
            });
            
        });
    }
    Barba();
    Tatto();

   
}