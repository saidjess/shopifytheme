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

                res.data.forEach(function(item, index){
                  console.log(item)
                })
            })
          })

          
        } catch (error) {
          console.log(error)
        }
    }
  
};