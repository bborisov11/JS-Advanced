function addSticker() {
    let title = $(".title").val();
    let content = $(".content").val();

    if(title !== "" && content !== "") {
        let li = $("<li class='note-content'>");
        let button = $("<a class='button'>x</a>");
        let h2Title = $(`<h2>${title}</h2>`);
        let hr = $("<hr>");
        let p = $(`<p>${content}</p>`);
        li.append(button).append(h2Title).append(hr).append(p);
        $("#sticker-list").append(li);
        $(".title").val("");
        $(".content").val("");
    }

    $("ul li .button").on("click", function () {
        $(this).parent().remove();
    })
}