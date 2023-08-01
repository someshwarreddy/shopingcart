export interface ecomm {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
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