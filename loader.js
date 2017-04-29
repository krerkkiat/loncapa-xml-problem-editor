// http://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
var style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = chrome.extension.getURL('lib/codemirror.min.css');
(document.head || document.documentElement).appendChild(style);

var style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = chrome.extension.getURL('fix.css');
(document.head || document.documentElement).appendChild(style);

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.min.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
