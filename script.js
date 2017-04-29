var myTextArea = document.getElementById("LC_editxmltext");
if (myTextArea) {
  var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
    mode: {
      name: "htmlmixed",
      tags: {
        script: [["type", /^loncapa\/perl$/, "text/x-perl"]]
      }
    },
    lineNumbers: true,
    lineWrapping: true,
  });
}
