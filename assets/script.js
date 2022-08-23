window.onload = function() {
  cats();
  
  async function cats(){
    await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(function(response) {
        const data = response.json();
        
        data.then(function(res) {
            console.log(res)
        })
      })
      .catch(function(res) {
        console.log(res);
      });
  }

    

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
                var template = `
                  <div class="item">
                    <a href="{LINK}">
                      <div class="imagem" style="background-image: url({IMAGEM});"></div>
                    </a>
                  </div>
                  `;

                let html = "";

                res.data.forEach(function(item, index){
                      const montaEstrutura = template.replace("{IMAGEM}", imagem).replace("{LINK}", link);
                      html +='<div class="item"><a href="'+item.permalink+'""><div class="imagem" style="background-image: url('+item.media_url+');"></div></a></div>';

                });
              
                document.getElementById("instagramPosts").innerHTML = html;
            })
          })
        } catch (error) {
          console.log(error)
        }
    }
};