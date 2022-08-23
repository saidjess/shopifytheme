window.onload = function() {
  const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
  const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";

  console.log(url);
  var myHeaders = new Headers();
  
  fetch(url,
        { method: 'GET', headers: myHeaders, mode: 'cors'}
       )
  .then(function(res) {
    console.log(res);
    console.log(res.data);

    res.forEach(function(item){
      console.log(item);
    });
  })
  .catch(function(res) {
    console.log(res);
  });
};