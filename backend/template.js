function showTemplate() {
    let catchTemplate = document.querySelector("template");
    let catchTemplateContent = catchTemplate.content.cloneNode(true);
    document.querySelector(".templateContentContainer").appendChild(catchTemplateContent);
}