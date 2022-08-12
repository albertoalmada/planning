function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexdto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("mais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline;";
        maisTexdto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none;";
        maisTexdto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }

}
