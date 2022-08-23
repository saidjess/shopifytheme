window.onload = function() {
  const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
  const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";

  var myHeaders = new Headers();
  
  fetch(url,
        { method: 'GET', headers: myHeaders}
       )
  .then(function(res) {
    console.log(res.ok);
    response.blob().then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      myImage.src = objectURL;
    });
  })
  .catch(function(res) {
    console.log(res);
  });
};