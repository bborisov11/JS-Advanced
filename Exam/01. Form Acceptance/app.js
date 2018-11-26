function acceptance() {
    let companyText = $("[name='shippingCompany']");
    let productName = $("[name='productName']");
    let productQuantity = $("[name='productQuantity']");
    let productScrape = $("[name='productScrape']");

    if(companyText.val() !== "" && productName.val() !== "" &&
        Number.isInteger(+productQuantity.val()) &&  Number.isInteger(+productScrape.val())
    && +productQuantity.val() > 0 && +productQuantity.val() > +productScrape.val()) {

            let infoToAdd = $(`<div>
                                    <p>[${companyText.val()}] ${productName.val()} - ${+productQuantity.val() - +productScrape.val()} pieces</p>
                                    <button type="button">Out of stock</button>
                               </div>`);
            $("#warehouse").append(infoToAdd);
        companyText.val('');
        productName.val('');
        productQuantity.val('');
        productScrape.val('');
    }

    $("#warehouse button").on("click", function () {
        $("#warehouse button").closest("div").remove();
    })
}