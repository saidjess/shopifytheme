window.onload = function() {

  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(res) {
      console.log(res);
    });

    

    posts();
  
    async function posts(){
      const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
      const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";
      
        try {
          await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }).then(function(response) {
            const data = response.json();

            data.then(function(res) {
                console.log(res.data)

                var template = `
                  <div class="item">
                  <a href="{LINK}">
                  <div class="imagem" style="background-image: url({IMAGEM});"></div>
                  <div class="opcoes">
                  <div class="box">
                  <img src="imgs/curtir.svg" alt="Instagram">
                  <img src="imgs/comentar.svg" alt="Instagram">
                  <img src="imgs/compartilhar.svg" alt="Instagram">
                  </div>
                  <div class="box">
                  <img src="imgs/salvar.svg" alt="Instagram">
                  </div>
                  </div>
                  </a>
                  </div>
                  `;

                res.data.forEach(function(item, index){
                  console.log(item);
                      const imagem = item.media_url;
                      const link = item.permalink;
                      const montaEstrutura = template.replace("{IMAGEM}", imagem).replace("{LINK}", link);

                      document.getElementById("instagramPosts").append(montaEstrutura);
                })
            })
          })
        } catch (error) {
          console.log(error)
        }
    }
};