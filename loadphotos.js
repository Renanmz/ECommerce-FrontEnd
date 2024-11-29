function loadPhotos() {
    const http = new XMLHttpRequest();
    http.onload = function() {
        const photos = JSON.parse(this.response);
        const FotosLista = document.getElementById("FotosLista");
        const footerspan = document.getElementById("idfooter");
        var i = 0;
        let dados = "";
        photos.forEach ( u => dados += "<div class='foto'><img src='" + u.url + "' title='" + u.description + "'><span>Produto : "+u.nome+"</span><br><span>Preço : "+u.preco+"</span></div>");
        FotosLista.innerHTML = dados
        photos.forEach(p => i += 1)
        footerspan.innerHTML = "Quantidade de fotos : " + i;
    }
    var order = document.getElementById("Order").value;
    var httplong = 'http://localhost:8080/produto?order=' + order;
    http.open('GET', httplong);
    http.send();
}