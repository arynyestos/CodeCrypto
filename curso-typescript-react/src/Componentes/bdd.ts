export interface IPersona{
    nombre:string
}

export interface IOrder{
    fecha:Date
    orderId:number
    customerId:number
    details:IOrderDetails[]
}

export interface IOrderDetails{
    orderId:number
    productId:number
    quantity:number
    price:number
}

