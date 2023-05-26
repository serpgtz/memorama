let imagenes = ["messi1","gael2","gaelMessi","messi2","messi3","messi4","messi6","messi7","messi8","messi5","messi1","messi2","messi3","messi4","messi6","messi7","messi8","messi5","gael2","gaelMessi"]

let sonidos = ["aleluya","aplausos_4",]

let numPareja=0;
let parejas = 0;
let intervalo;
let ramdom=0;


var pareja = []
var timeStar = new Date();

$(document).ready(function(){
    
    intervalo = window.setInterval(incrementa,1000)
    $(".audio0")[0].play();
    asignarImagenes();
    asignarSonido();

    $(".caja").click(function(){
        $(".audio")[ramdom].pause();
        $(".audio0")[0].pause();
        if($(this).css("opacity")==="0"){
            $(this).css("opacity","1.0");
            pareja[numPareja] = $(this).attr("id")
            if (numPareja===0){
                numPareja++;
            }else{
                setTimeout(compruebaPareja,500);
            }
        }
    })


})

/*-----------------------------fucnciones---------------------------------------------*/
function asignarImagenes(){

    imagenes.sort(function(){
        return Math.random()-0.5
    })

    let cajas = $(".caja")
    
    $(cajas).each(function(i){
        $(cajas[i]).attr("src","img/"+imagenes[i]+".jpg");
        $(cajas[i]).css("opacity","0")
    })
}

function compruebaPareja(){

    let imagen1 = $("#"+pareja[0]).attr("src");
    let imagen2 = $("#"+pareja[1]).attr("src");
    if(imagen1 === imagen2){
        parejas++;
        $("#numParejas").text(parejas);
        $(".audio")[ramdom].play();

        if(parejas == 10){
            $(".audio").attr("src","sonidos/gol-messi"+".mp3")
            $(".audio")[ramdom].play();


          

            clearInterval(intervalo);
            // $("#cronometro").ccs("color","red")
        }
       

    }else{
        $("#"+pareja[0]).css("opacity","0")
        $("#"+pareja[1]).css("opacity","0")
    }
    numPareja=0;
    
}
function asignarSonido(){
    sonidos.sort(function(){
        return Math.random()-0.5
    })
    $(".audio").attr("src","sonidos/"+sonidos[ramdom]+".mp3")
}

function incrementa(){
    let actual = new Date()
    let cro = actual -timeStar
    let cr = new Date();
    cr.setTime(cro)
    let cs = cr.getMilliseconds;
    cs = cs/10;//para obtener los segundos
    cs = Math.round(cs)
    let sg = cr.getSeconds();
    let mn = cr.getMinutes();
    let ho = cr.getHours()-16;

    if (cs < 10){
        cs = "0"+cs
    }
    if (sg < 10){
        sg="0"+sg
    }
    if (mn < 10){
        mn="0"+mn
    }
    
    $("#cronometro").text(ho+" : "+mn+" : "+sg)

}



