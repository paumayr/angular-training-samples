

export interface Order {
    id : string;
    amountDue : number;
    dateOrdered : Date;
    dateDelivered: Date;
}

export function getOrders() : Order[] {
    return [
        { id: "123", amountDue: 3400.00, dateOrdered: new Date(2016, 5, 10, 10, 30, 10), dateDelivered: new Date(2016, 5, 16, 9, 40, 15) },
        { id: "124", amountDue: 5200.00, dateOrdered: new Date(2016, 5, 13, 10, 30, 10), dateDelivered: new Date(2016, 5, 19, 9, 40, 15) },
        { id: "125", amountDue: 1300.00, dateOrdered: new Date(2016, 5, 15, 10, 30, 10), dateDelivered: new Date(2016, 5, 21, 9, 40, 15) },
    ];
}