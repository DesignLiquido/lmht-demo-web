const ed1 = window.monaco.editor.create(document.getElementById("container1"), {
    value: "function hello() {\n\talert('Hello world!');\n}",
    language: "javascript"
})
const model = ed1.getModel()

window.monaco.editor.create(document.getElementById("container2"), {
    model,
})