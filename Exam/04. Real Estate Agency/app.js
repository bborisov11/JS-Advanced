function realEstateAgency () {
    let rentPrice = $("[name='apartmentRent']");
    let apartmentType = $("[name='apartmentType']");
    let comissionRate = $("[name='agencyCommission']");

    let offers = [];
    let profit = 0;

        $("[name='regOffer']").on("click", function () {
            if(typeof +rentPrice.val() === "number" && +rentPrice.val() > 0 &&
                typeof +comissionRate.val() === "number" && +comissionRate.val() >= 0 &&
                +comissionRate.val() <= 100 && apartmentType.val() !== "" &&
                apartmentType.val().indexOf(":") <= -1) {
                let infoToAdd = $(`<div class='apartment'>
                                        <p>Rent: ${rentPrice.val()}</p>
                                        <p>Type: ${apartmentType.val()}</p>
                                        <p>Comission: ${comissionRate.val()}</p>
                                   </div>`);
                $("#building").append(infoToAdd);

                offers.push({
                   rentPrice: rentPrice.val(),
                   apartmentType: apartmentType.val(),
                   comissionRate: comissionRate.val()
                });

                $("#message").text("Your offer was created successfully.");

            } else {
                $("#message").text("Your offer registration went wrong, try again.");
            }
            rentPrice.val('');
            apartmentType.val('');
            comissionRate.val('');
        });

    let familyBudget = $("[name='familyBudget']");
    let familyApartmentType = $("[name='familyApartmentType']");
    let familyName = $("[name='familyName']");

    $("[name='findOffer']").on("click",function () {
        let homeNotFounded = true;
        if(+familyBudget.val() > 0 && familyApartmentType.val() !== "" && familyName.val() !== "") {
            let foundedOffer;
            for (let i = 0; i < offers.length; i++) {
                if(offers[i].apartmentType === familyApartmentType.val()) {
                 foundedOffer = offers[i];
                }
            }
            if(foundedOffer !== undefined) {
                if (+familyBudget.val() >= +foundedOffer.rentPrice +
                    +foundedOffer.rentPrice % +foundedOffer.comissionRate) {
                    homeNotFounded = false;
                    let infoToAdd = $(`<div class="apartment" style="border: 2px solid red;">
                                        <p>${familyName.val()}</p>
                                        <p>${familyApartmentType.val()}</p>
                                        <button>MoveOut</button>
                                   </div>`);

                    $("#building").append(infoToAdd);

                    $('.apartment button').on("click", function () {
                        $(".apartment button").closest('div').remove();
                        $("#message").text(`They had found cockroaches in ${familyName.val()}'s apartment`);

                    });
                    profit+= +foundedOffer.rentPrice;
                    $("#roof h1").text(`Agency profit: ${profit} lv.`);
                    $("#message").text("Enjoy your new home! :))");
                }
            }
        }
        if(homeNotFounded) {
            $("#message").text("We were unable to find you a home, so sorry :(");
        }
        familyBudget.val('');
        familyApartmentType.val('');
        familyName.val('');
    });
}