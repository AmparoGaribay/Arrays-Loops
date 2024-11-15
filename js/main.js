let button= document.getElementById("btnSubmit");
let varA= document.getElementById("variableA");
let varB= document.getElementById("variableB");
let varC= document.getElementById("variableC");

let alertResul=document.getElementById("alertResultado");//si no existe elid tedevolvera un null 
let alertResul2=document.getElementById("alertResultado2");//si no existe elid tedevolvera un null 

///const  marcas = ["HP","Dell","Lenovo","Toshiba","Acer","Asus"];

//Hay tres personas esperando al banco. Sus 
//nombres, en orden, son Sofía, David y Juan. 
//Cree una matriz que tenga estos tres nombres en orden.


//https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
let banco =['Sofia', 'David', 'Juan'];

button.addEventListener("click", function(event){

    event.preventDefault();// previene que no se ejecute lo que tiene que hacer en html o un evento determinado
        
    
    //EJECUTA los ciclos dentro cuando presiones el boton si no se tabra la maquina

    console.log(banco);
    banco.push('Sara','Agustin');
    console.log(banco);
    banco.shift();
    console.log(banco);
    banco.splice(1,0,'Renata'); 
    console.log(banco);
    banco.push('Elena');
    console.log(banco);

    //ejercicio #2
    
    let asterisc;
    const max=10;
    const c="*";
    for(let ren=1; ren <=max; ren++){
        asterisc="";
        for(let col=0;col <ren;col++){
            asterisc+=c; 
        }
        console.log(asterisc);
    }

    let x =3;
    while(x<=0){
        console.log(x);
        x=0.5
    }

    let conta=0;
    while(conta<=100){
        if ((conta%2)!=0){
            console.log(conta);
        }
        conta++

    }
    let n=6
    contador =1
    while (contador<=n){
        //'[${contador}]' template
        console.log("[",contador,"]");
        contador++;

    }


    n=5;
    contador=0;
    let total=0
    while(contador<=n){
        total+=contador;
        contador++
    }
    console.log(total);



 /*    //--
    console.log('for');
    for(let cont=0; cont<100; cont+=1){
        console.log(cont);
    }

    let contador =0;
    while(contador<100){
        console.log(contador);
        contador+=1;
    } */



});   




    /*           
    for (let cont = 0; cont < 100; cont+=5) {
            console.log(cont);
            
        }//for

    console.log("---------while----------"); 
        let cont=0;
        while(cont<100){
            console.log(cont);
            cont+=5

        }//while

        console.log("---------dowhile----------"); 
        cont=0;
        do {
            console.log(cont);
            cont+=5;
        } while (cont<100);

        console.log("------foreach------")
        marcas.forEach(function(element,index) {
            console.log(index+ ".- "+ element.toUpperCase());
        });
    */


