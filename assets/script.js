jQuery(document).ready(function(){
  const token = "IGQVJVM2FOYlB3ZAUd0SW9hYTd6bDBpRHFGWGgzbEFydEZA2MTN0Nzc3bnpiTFBpcGg0LWRLaVRvOFBPX2QyamhJQ1FwbDRjeGY0dTFOUGRlWmNmUVRzS280RndBaDRPdG1FSnpuUHd4VUw4QzY0UGptQgZDZD";
  const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink";

  jQuery('#instagram .box-insta').html("");
  
  fetch(url)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(res) {
    console.log(res);
  });
})