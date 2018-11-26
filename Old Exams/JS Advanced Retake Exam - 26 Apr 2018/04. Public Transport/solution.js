class PublicTransportTable {
    constructor(name) {
        this.name = name;
    }

    addVehicle(obj) {
        let newTr = $(`<tr>
                              <td>${obj.type}</td>
                              <td>${obj.name}</td>
                              <td><button>More Info</button></td>
                         </tr>`);
        $(".vehicles-info").append(newTr);

        $($(newTr).find("button")).on("click", function () {
            let additionalInfo;
            if ($(this).text() === "More Info") {
                $(this).text("Less Info");
                additionalInfo = $(`<tr class="more-info">
                                        <td colspan="3">
                                            <table>
                                                <tr><td>Route: ${obj.route}</td></tr>
                                                <tr><td>Price: ${obj.price}</td></tr>
                                                <tr><td>Driver: ${obj.driver}</td></tr>
                                            </table>
                                        </td>
                                    </tr>`);
                $(additionalInfo).insertAfter($(this).closest('tr'));
            } else {
                $(this).text("More Info");
                $(this).parent().parent().next().remove();
            }
        });
        let type = $($($("thead").find("tr")[1]).find("td")[0]).find("input");
        $(type).on("input", function () {
            $($(".vehicles-info tr").find("td")[0]).forEach(x => console.log($(x).text()));
           // console.log($($(".vehicles-info tr").find("td")[0])
           //     .filter(x => $(x).text().indexOf($(type).text()) > -1));
        })

    }
}