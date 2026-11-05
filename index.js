function alterarimagem() {
    var imagemjpg = document.getElementById("imagemjpg");
    imagemjpg.style.height = "220px";
    imagemjpg.style.objectFit = "contain";

    var imagemsvg = document.getElementById("imagemsvg");
    imagemsvg.style.height = "150px";
    imagemsvg.style.width = "150px";

    var imagempng = document.getElementById("imagempng");
    imagempng.style.height = "220px";
    imagempng.style.backgroundColor = "blue";

    var imagemgif = document.getElementById("imagemgif");
    imagemgif.style.height = "180px";
   
    }