export interface ecomm {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  quantity:number
}

export interface cart {
  id: number,
  userId: 1,
  new(): Date,
  products: []
}

export interface productid {
  id:string;
}