function _resetMirror(){return AreaDeResposta.setValue("")}let AreaDeResposta=null;function _init(){AreaDeResposta=CodeMirror.fromTextArea(document.getElementById("div-resposta"),{theme:"darcula",lineNumbers:!0,matchBrackets:!0,autoCloseBrackets:!0,mode:"application/ld+json",lineWrapping:!0,indentUnit:4})}window.onload=_init();