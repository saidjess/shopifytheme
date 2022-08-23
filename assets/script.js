window.onload = function() {
  const token = "IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD";
  const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,caption,permalink";

  var myHeaders = new Headers();
  
  fetch("https://graph.instagram.com/me/media?access_token=IGQVJVUHdEeEJySno0NjQ1TVBXYlZAjbjRKUkFucVVIcllJb2tjNVlSdWNvYzZAKajZAodFB1cHZAUZAjhZAZAHhkdFNCVXNBeXlPOHlYcVpJQkc5RWVKcHVxbDIwN1EwSVV5anhMWXpiVDh4ZAjNlelFvT1ZAiSwZDZD&fields=media_url,caption,permalink",
        { method: 'GET', headers: myHeaders, mode: 'cors'}
       )
  .then(function(res) {
    console.log(res);
  })
  .catch(function(res) {
    console.log(res);
  });
};