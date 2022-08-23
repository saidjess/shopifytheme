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
    const res = "";
    async function posts(){
        
        try {
          await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }).then(function(response) {

            const data = await response.json();
            if (response.ok) {
              res.json(data);
            }
      
            return res;
          })
        } catch (error) {
          console.log(error)
        }
    }

    var p1 = new Promise(
      function(resolve, reject) {
        return fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }).then(function(response) {
                return response.json();
      }
    )

    console.log(p1);
        console.log(resolve);
  })
};