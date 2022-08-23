window.onload = function() {
  const token = "IGQVJWUEhzQTlPS2dUUDRsbEJJcUQtUURiVXpDNndHQzFyTk5KNkVpQTFpb3ZAJNTNIUWlfMWVUOXZA6QmRONFRIaVlBUk1SQXdqNDUyeGtBYm56NjdhSEkzZA3RISFdkWUpkd3Y1SEQ4R1ZAaam16d0tlZAwZDZD";
  const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";

  console.log(url);
  
  fetch(url,
        { method: 'GET',}
       )
  .then(function(res) {
    console.log(res);

    res.forEach(function(item){
      console.log(item);
    });
  })
  .catch(function(res) {
    console.log(res);
  });
};