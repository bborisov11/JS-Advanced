function tickets(arr, sortingCriteria) {

    let ticketInfo = [];

    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    for (let input of arr) {
        let data = input.split("|");
        let destination = data[0];
        let price = +data[1];
        let status = data[2];
        let currentTicket = new Ticket(destination, price, status);
        ticketInfo.push(currentTicket);
    }

  return ticketInfo
        .sort((a, b) => {
            if (sortingCriteria === "destination" || sortingCriteria === "status") {
                return a[sortingCriteria].localeCompare(b[sortingCriteria]);
            } else if(sortingCriteria === "price") {
                return a[sortingCriteria] - b[sortingCriteria];
            }
        })
}
//tickets(['Philadelphia|94.20|available',
//    'New York City|95.99|available',
//    'New York City|95.99|sold',
//    'Boston|126.20|departed'],
// 'destination');
tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
);

