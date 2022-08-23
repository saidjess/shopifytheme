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
    async function posts(){
        

        try {
          await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }).then(function(response) {
                console.log(response.json());
                const promise = response.json();

                promise.then(function(json) {
                  console.log(json)
                });
              
              console.log(response);
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
                console.log(response.json());
                const promise = response.json();

                promise.then(function(json) {
                  console.log(json)
                });

        console.log(resolve);
      }
    )

    console.log(p1);
  })
};