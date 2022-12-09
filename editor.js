const lmhtWeb = new window.Lmht.LmhtWeb();

window.monaco.editor.create(document.getElementById("containerLmht"), {
    value: "<lmht>\n\t<cabeça></cabeça>\n\t<corpo></corpo>\n\t</lmht>",
    language: "lmht"
});

lmhtWeb.converter("<lmht>\n\t<cabeça></cabeça>\n\t<corpo></corpo>\n\t</lmht>").then(resposta => {
    console.log(resposta)
});


window.monaco.editor.create(document.getElementById("containerHtml"), {
    value: '',
    language: "html"
});