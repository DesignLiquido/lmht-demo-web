const editorLmht = window.monaco.editor.create(document.getElementById("containerLmht"), {
    value: "<lmht>\n\t<cabeça>\n\t\t<titulo>Olá mundo</titulo>\n\t</cabeça>\n\t<corpo>\n\t\t<p>Olá mundo</p>\n\t</corpo>\n</lmht>",
    language: "lmht"
});
const modeloEditorLmht = editorLmht.getModel();

window.serializadorXml = new XMLSerializer();

const transformacaoInicial = SaxonJS.transform({ 
    stylesheetLocation: "lmht.sef.json",
    sourceText: modeloEditorLmht.getValue()
});

const editorHtml = window.monaco.editor.create(document.getElementById("containerHtml"), {
    value: window.serializadorXml.serializeToString(transformacaoInicial.principalResult),
    language: "html"
});
const modeloEditorHtml = editorHtml.getModel();

modeloEditorLmht.onDidChangeContent(() => {
    const transformacao = SaxonJS.transform({ 
        stylesheetLocation: "lmht.sef.json",
        sourceText: modeloEditorLmht.getValue()
    });

    modeloEditorHtml.setValue(
        window.serializadorXml.serializeToString(transformacao.principalResult)
    );
});

