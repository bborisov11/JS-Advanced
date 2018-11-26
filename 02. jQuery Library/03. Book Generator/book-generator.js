function createBook(selector, title, author, isbn) {
    let container = $(selector);
    let div = $("<div></div>");
    let titleParagraph = $(`<p>${title}</p>`);
    let authorParagraph = $(`<p>${author}</p>`);
    let isbnParagraph = $(`<p>${isbn}</p>`);
    let selectButton = $("<button>Select</button>");
    let deselectButton = $("<button>Deselect</button>");

    div.attr("id","book1");
    titleParagraph.addClass("title");
    authorParagraph.addClass("author");
    isbnParagraph.addClass("isbn");

    div.append(titleParagraph);
    div.append(authorParagraph);
    div.append(isbnParagraph);
    div.append(selectButton);
    div.append(deselectButton);

    container.append(div);

    selectButton.on("click", function () {
        div.css("border", "2px solid blue");
    });

    deselectButton.on("click", function () {
       div.css("border", "none");
    });
}