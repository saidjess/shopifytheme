window.onload = function() {

  fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(res) {
      console.log(res);
    });


  getPosts();

  function getPosts(){
    const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
    const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";
  
    var myHeaders = new Headers();
    
    fetch(url,
          { method: 'GET', headers: myHeaders}
         )
    .then(function(response) {
      console.log(response);
      response.blob().then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        console.log(objectURL);
      });
    })
    .catch(function(res) {
      console.log(res);
    });
  }
};