import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  Products: Product[] = [
    { category: 'men', name: 'Beige & Cream Suit', img: 'https://a3655836d5c58a086ac2-4e8d43a89f100386d472e9f1a1dc59ca.ssl.cf3.rackcdn.com/images/original/966347169_01.jpg', price: '650', description: 'Summer wedding looks with beige and cream colored suits. This look is effortlessly stylish and sophisticated' },
    { category: 'men', name: 'Black Suit', img: '../../assets/img/img_fashion/menSutits/black_suit.jpg', price: '680', description: 'This unlisted tailored suit has a 2 button notch lapel, side vents, and angled double besom pockets with flaps.' },
    { category: 'men', name: 'Blue Suit', img: 'https://static.theblacktux.com/products/suits/blue-suit/1_161129_TBT_Ecom_Royal_Navy_Suit_2_0586_w1_1812x1875.jpg?impolicy=PDPdesktop', price: '700', description: 'Elegant Design 3-piece Suit,Suitable for Party,Wedding,Prom,Date,Work and other Formal Occasions.' },
    { category: 'men', name: 'Grey Suit', img: 'https://static.theblacktux.com/products/outfits/the-hemingway-outfit/1_17_CLAILGS_7004_Ext_F_1812x1875.jpg?impolicy=PDPdesktop', price: '600', description: 'This tuxedo suit with full shoulder design and slim cut with 3D draping. Slim fit suits little tighter than a regular fit suit. When you put on it make you slimmer and sharp. And looks modern and handsome.' },
    { category: 'men', name: 'Purple Suit', img: 'https://ae01.alicdn.com/kf/HTB14EMnQXXXXXXwXXXXq6xXFXXX5/230434890/HTB14EMnQXXXXXXwXXXXq6xXFXXX5.jpg?width=870&height=1110&size=132915&hash=134895', price: '860', description: 'These suit will satisfy your wardrobe requirements for many of your scenes,such as work,clients,dates,parties,etc.They will all be more gentlemanly and elegant.Good Gift Choice for your Father,Boyfriend and friends.' },
    { category: 'men', name: 'White Suit', img: 'https://image.goxip.com/LiumNH8tIkLfyq7pJ0veVg14lw8=/fit-in/400x400/filters:format(jpeg):quality(80)/aff_images/asos-design-wedding-skinny-suit-jacket-in-stretch-cotton-in-white-white-12471551.jpg', price: '750', description: 'SLIM FIT-This suit with full shoulder design and slim cut with 3D draping. Slim fit suits little tighter than a regular fit suit.' },
    { category: 'women', name: 'Black Friday Dress', img: 'https://www.lulus.com/images/product/xlarge/2887130_575882.jpg', price: '700', description: 'Eyelashes lace,Slimming Sheath Style, Full Lace Short Midi Dress, Full Zip BackSuit for Night date,Cocktail Party, Prom, Wedding, Formal Occasions, Casual Wear, etc' },
    { category: 'women', name: 'Elegant Evening Dress', img: 'https://images-na.ssl-images-amazon.com/images/I/71dzJiJyYYL._UL1500_.jpg', price: '900', description: 'This A line flowy Chiffon dress is with Sheer Tulle Boat Neck,embellished by Lace Appliques and sparkly Crystal Rhinestones.' },
    { category: 'women', name: 'Green Smile Dress', img: 'https://img1.junaroad.com/uiproducts/14915212/zoom_4-1520578283.jpg', price: '570', description: 'Women A-line Green Dress' },
    { category: 'women', name: 'Happy Monday Dress', img: 'https://i.pinimg.com/originals/62/14/80/621480b16f75bce398f263889aa356d7.jpg', price: '690', description: 'Mumu Sienna Swing Dress Happy Henna' },
    { category: 'women', name: 'High Collar Dress', img: 'https://cdn.shopify.com/s/files/1/0246/7229/products/1_aca3e9e0-12d5-4e8c-a0d5-8ec8c136c66a.jpg?v=1481578327', price: '800', description: 'Black Dress with High Collar and Lace' },
    { category: 'women', name: 'Long White Dress', img: 'https://www.lulus.com/images/product/xlarge/2647892_419472.jpg', price: '640', description: 'The Lulus Forever and Always White Lace Dress is our go-to stunner' },
    { category: 'shoes', name: 'Rosed Pink Shoes', img: 'https://ae01.alicdn.com/kf/HTB1HkhGjlcHL1JjSZFBq6yiGXXaQ/Borduurwerk-Bloemen-Mocassins-Vrouwen-Witte-schoenen-Vrouwelijke-Zachte-Ademende-Casual-Schoenen-PU-Leer-Studenten-Platte-schoenen.jpg', price: '230', description: 'Leather Sneakers Women Shoes Flat Casual Shoes Embroidery Rose pink.' },
    { category: 'shoes', name: 'White Shoes Zipper', img: 'https://ae01.alicdn.com/kf/HTB1tziuX79WBuNjSspeq6yz5VXaC/Sneakers-women-shoes-2018-fashion-zipper-wedge-women-canvas-shoes-High-help-solid-color-white-ladies.jpg', price: '260', description: 'The high top features zipper closure for convenient entry and added interest.' },
    { category: 'shoes', name: 'Galaxy Shoes', img: 'https://m.media-amazon.com/images/I/61x3BGrkfML._SR500,500_.jpg', price: '250', description: 'High Top and Lace-up classic style casual canvas shoes-fashion comfortable sneakers for outdoor walking.' },
    { category: 'shoes', name: 'Masked Shoes', img: 'http://cdn.shopify.com/s/files/1/1225/1782/products/PH212_1_e17fa7ac-a092-46db-bb8c-0b5a19a42981_800x.jpg?v=1562764845', price: '220', description: 'Cartoon Patchwork Inspired Hearts Engagement Party Theme Image Bootie for Girls ladis Womens.' },
    { category: 'shoes', name: 'Orange Shoes', img: 'https://rukminim1.flixcart.com/image/714/857/jmz7csw0/shoe/3/b/g/honey-765-11-zixer-carrot-orange-original-imaf595g5xsmn9gn.jpeg?q=50', price: '265', description: 'Dancing Shoes For All.' },
    { category: 'shoes', name: 'Trendy white Shoe', img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/Q/125687_1569715723.jpg', price: '300', description: 'Unisex White Trendy Sneakers.' },
    { category: 'men', name: 'Trendy Purple Suit', img: '../../assets/img/img_fashion/menSutits/purple_suit.jpg', price: '300', description: 'Unisex White Trendy Sneakers.' },
  ]
  items:Product[] = [];
  countItem:number=0;
  
  addToCart(product: Product) {
    this.items.push(product);
    this.countItem+=1;
  }
  getItems() {
    console.log("jjjj"+this.items)
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  constructor(private firestore: AngularFirestore) { }
  getProducts() {
    return this.firestore.collection('newArrivals').snapshotChanges();
}
createProduct(product: Product){
  return this.firestore.collection('newArrivals').add(product);
}
updateProduct(product: any){
  this.firestore.doc('newArrivals/' + product.id).update(product);
}
deleteProduct(productName: string){
  this.firestore.doc('newArrivals/' + productName).delete();
}
}
