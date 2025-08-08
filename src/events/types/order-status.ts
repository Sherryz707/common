export enum OrderStatus {
  //order created but ticket not reserved yet
  Created = 'created',
  //ticket the order is trying to reserve has already been reserved
  //user has cancelled the order
  //order expires before payment
  Cancelled = 'cancelled',
  //the order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  Complete = 'complete',
}
