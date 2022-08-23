window.onload = function() {

  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(res) {
      console.log(res);
    });

    const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";

    posts();
    let res;
  
    async function posts(){
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          })

          const data = await response.json();

          if (response.ok) {
            res.json(data);
    
            console.log(response);
          } else {
            res.status(500).json({
              message: "Search campaigns request error.",
            });
          }

          console.log(res);
    
          return res;
        }
        catch (error) {
          console.log(error);
        }
    }
  
};