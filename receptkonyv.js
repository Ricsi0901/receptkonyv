const receptek=[];

$(function(){
    
    $.ajax(
        {url: "etelek.json",
     success: function(result){
        console.log(result);
        for (let i = 0; i < result.receptkonyv.length; i++) {           
            receptek.push(result.receptkonyv[i]);            
        }
        
        console.log(receptek);
            megjelenit();
        
      }});
$("#bal").on("click",balra);
$("#jobb").on("click",jobbra);

});
function megjelenit(){
    $("article").append("<table>");
    var txt="<tr id='fejlec'><th>név</th><th>Elkészitési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>";
    for (let i = 0; i < receptek.length; i++) {
        txt+="<tr id='"+i+"'>";
        for (let item in receptek[i]){
            txt+="<td>"+receptek[i][item]+"</td>";
        }
        txt+="</tr>";
       
        }
        $("article table").append(txt);
    $("article table tr").hover(hatter);
    $("article table tr").on("click",mutasd);
}
function balra(){

}
function jobbra(){

}
function hatter(){
$(this).toggleClass("hattere");
}
function mutasd(){
    console.log($(this).attr("id"));
if($(this).attr("id")!=="fejlec"){
    sorId=Number($(this).attr("id"));
    console.log(receptek[sorId].kep);
    $("#kep img").attr("src",receptek[sorId].kep);

    $("#kep img").attr("alt",receptek[sorId].nev);
    let recept="";
    for(let item in receptek[sorId]){
        recept+=receptek[sorId][item]+" ";
    }

    $("#kep p").text(recept);
}


   

}
