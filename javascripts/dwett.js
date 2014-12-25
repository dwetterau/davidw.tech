$(document).ready(function() {
  $("body").css("display", "none").fadeIn(250);

  $("a.transition").click(function(event) {
    event.preventDefault();
    new_url = this.href;
    $("body").fadeOut(250, function() {
        window.location = new_url
    });
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46732198-1', 'dwett.com');
ga('send', 'pageview');
