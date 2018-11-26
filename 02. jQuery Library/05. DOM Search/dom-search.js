function domSearch(id, caseSensitive) {
    let container = $(id);
    container.addClass("items-control");
    let enterTextDiv = $("<div>");
    let enterLabel = $("<label>Enter text: <input></label>");
    let enterAnchor = $("<a class='button' style='display: inline-block;'>Add</a>");

    enterTextDiv.addClass("add-controls");
    enterTextDiv.append(enterLabel);
    enterTextDiv.append(enterAnchor);
    container.append(enterTextDiv);

    let searchDiv = $("<div>");
    searchDiv.addClass("search-controls");
    let searchLabel = $("<label>Search: <input></label>");
    searchDiv.append(searchLabel);
    container.append(searchDiv);

    let resultDiv = $("<div>");
    resultDiv.addClass("result-controls");
    let resultList = $("<ul>");
    resultList.addClass("items-list");
    resultDiv.append(resultList);
    container.append(resultDiv);

    $(".add-controls .button").on("click", function () {
        let li = $("<li class='list-item'>");
        let anchor = $("<a class='button'>X</a>");
        let element = $("<strong>");
        element.text($(".add-controls label input").val());
        li.append(anchor);
        li.append(element);
        resultList.append(li);
    });
    let currentXButton = $(".result-controls .items-list .list-item .button");

    currentXButton.on("click", function () {
        let parentLi = currentXButton.parent();
        let ul = parentLi.parent();
        ul.remove(parentLi);
    });

    let searchField = $(".search-controls label input");
    // let listValues = $(".result-controls .items-list .list-item strong")
    //     .map(x => x.text());
    searchField.on("input", function () {
        let listValues = $(".result-controls .items-list .list-item strong")
            .map(function () {
                return $(this).text();
            });
        let array = Array.from(listValues);
        if (caseSensitive) {
          array = array.filter(x => x.indexOf(searchField.val()) <= -1);

            for (let obj of $(".result-controls .items-list .list-item")) {
                let currentElement = $(obj).find("strong").text();
                if (array.includes(currentElement)) {
                    $(obj).css("display", "none");
                } else {
                    $(obj).css("display", "block");
                }
            }
        } else {
            array = array
                .filter(x => x.toLowerCase()
                    .indexOf(searchField.val().toLowerCase()) <= -1);

            for (let obj of $(".result-controls .items-list .list-item")) {
                let currentElement = $(obj).find("strong").text();
                if (array.includes(currentElement)) {
                    $(obj).css("display", "none");
                } else {
                    $(obj).css("display", "block");
                }
            }
        }
    })
}