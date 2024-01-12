import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import { Product } from '../Model/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, TopHeaderComponent, FormsModule, CommonModule, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  products = [
    {
      id: 1,
      name: 'Nike React Infinity Run Flyknit',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [7, 8, 9, 10],
      colors: ['White', 'Blue', 'Black'],
      price: 160,
      isInInventory: true,
      itemsLeft: 3,
      imageUrl: 'https://th.bing.com/th/id/OIP.6Fz6KRzDAiWe--P9HslDtwHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'ADIDAS',
      gender: 'MEN',
      category: 'RUNNING',
      size: [8, 9, 10, 11],
      colors: ['Black', 'Gray', 'Red'],
      price: 180,
      isInInventory: false,
      itemsLeft: 5,
      imageUrl: 'https://th.bing.com/th/id/OIP.0uW81B57FnOuBzqQMk_zUwHaE7?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      name: 'Puma Ignite Limitless',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'PUMA',
      gender: 'MEN',
      category: 'RUNNING',
      size: [9, 10, 11, 12],
      colors: ['White', 'Green', 'Yellow'],
      price: 120,
      isInInventory: true,
      itemsLeft: 8,
      imageUrl: 'https://th.bing.com/th/id/OIP.HtwSMlZQNQXHIYFd3nSUzAHaHa?rs=1&pid=ImgDetMain',
    },

    {
      id: 7,
      name: 'Salomon Speedcross 5',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'SALOMON',
      gender: 'MEN',
      category: 'TRAIL RUNNING',
      size: [8, 9, 10, 11],
      colors: ['Black', 'Green', 'Orange'],
      price: 180,
      isInInventory: true,
      itemsLeft: 5,
      imageUrl: 'https://th.bing.com/th/id/R.1d0875b5ed59e9ff11e9ef55b8a7f153?rik=MjOErw1X9UX3UA&pid=ImgRaw&r=0',
    },
    {
      id: 8,
      name: 'Brooks Ghost 13',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'BROOKS',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9],
      colors: ['Pink', 'Gray', 'Black'],
      price: 150,
      isInInventory: true,
      itemsLeft: 8,
      imageUrl: 'https://www.northernrunner.com/images/brooks-adrenaline-gts-18-2e-extra-wide-road-running-shoes-navy-teal-mint-womens-p4280-9224_image.jpg',
    },
    {
      id: 9,
      name: 'Mizuno Wave Rider 24',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'MIZUNO',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [7, 8, 9, 10],
      colors: ['Purple', 'Blue', 'White'],
      price: 170,
      isInInventory: false,
      itemsLeft: 10,
      imageUrl: 'https://th.bing.com/th/id/OIP.F3hKoPyy42xzlXOdgdb9IwHaEh?rs=1&pid=ImgDetMain',
      discount: true
    },

    {
      id: 12,
      name: 'Saucony Kinvara 12',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'SAUCONY',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9],
      colors: ['Pink', 'Green', 'White'],
      price: 140,
      isInInventory: true,
      itemsLeft: 8,
      imageUrl: 'https://th.bing.com/th/id/OIP.HcStZGY5DynzNTqJgGixdgHaEj?rs=1&pid=ImgDetMain',
    },
 
    {
      id: 14,
      name: 'Nike Air Zoom Pegasus 38',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9],
      colors: ['Purple', 'Black', 'White'],
      price: 160,
      isInInventory: true,
      itemsLeft: 12,
      imageUrl: 'https://th.bing.com/th/id/OIP.1lv4kzaSki93dJp1IrzpKAHaFB?rs=1&pid=ImgDetMain',
      discount: true
    },

      {
        id: 16,
        name: 'Adidas Ultraboost 21',
        description: 'Lorem Ipsum is simply dummy text...',
        brand: 'ADIDAS',
        gender: 'UNISEX',
        category: 'RUNNING',
        size: [7, 8, 9, 10],
        colors: ['Gray', 'Red', 'White'],
        price: 180,
        isInInventory: true,
        itemsLeft: 5,
        imageUrl: 'https://static.nike.com/a/images/t_default/228c755e-cc18-4187-89e0-87faaab421e8/court-legacy-lift-womens-shoes-x0B6BB.png',
      },
      {
        id: 17,
        name: 'Puma RS-X3 Puzzle',
        description: 'Lorem Ipsum is simply dummy text...',
        brand: 'PUMA',
        gender: 'MEN',
        category: 'LIFESTYLE',
        size: [9, 10, 11, 12],
        colors: ['Blue', 'Yellow', 'Black'],
        price: 120,
        isInInventory: true,
        itemsLeft: 10,
        imageUrl: 'https://static.nike.com/a/images/t_default/a9301107-1bc4-46ca-8238-1c75bfbaeb34/blazer-mid-77-womens-shoes-NPWfjm.png',
      },
   
  
      {
        id: 21,
        name: 'Saucony Jazz Original',
        description: 'Lorem Ipsum is simply dummy text...',
        brand: 'SAUCONY',
        gender: 'WOMEN',
        category: 'LIFESTYLE',
        size: [6, 7, 8, 9],
        colors: ['Gray', 'Orange', 'White'],
        price: 100,
        isInInventory: true,
        itemsLeft: 9,
        imageUrl: 'https://www.shopmyexchange.com/products/images/xlarge/2682086_3550.jpg',
      },
      {
        
        id: 23,
        name: 'Converse Chuck Taylor All Star',
        description: 'Lorem Ipsum is simply dummy text...',
        brand: 'CONVERSE',
        gender: 'UNISEX',
        category: 'LIFESTYLE',
        size: [7, 8, 9, 10],
        colors: ['White', 'Black', 'Red'],
        price: 80,
        isInInventory: true,
        itemsLeft: 18,
        imageUrl: 'https://i.pinimg.com/originals/d6/5f/a6/d65fa6bacecd238d051799aa9775697d.jpg',
      },
      {
        id: 24,
        name: 'Mizuno Wave Rider 24',
        description: 'Lorem Ipsum is simply dummy text...',
        brand: 'MIZUNO',
        gender: 'MEN',
        category: 'RUNNING',
        size: [9, 10, 11, 12],
        colors: ['Blue', 'Yellow', 'Black'],
        price: 150,
        isInInventory: true,
        itemsLeft: 11,
        imageUrl: 'https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dw76729982/images/SSFV0322WHTW/WHITE-WOMENS-FOOTWEAR-ADIDAS-SNEAKERS-SSFV0322WHTW_5.JPG',
      },
      {
        id: 25,
        name: 'New Balance Fresh Foam 1080v11',
        description: 'Lorem Ipsum is simply dummy text...',
        brand: 'NEW BALANCE',
        gender: 'WOMEN',
        category: 'RUNNING',
        size: [6, 7, 8, 9],
        colors: ['Pink', 'Gray', 'White'],
        price: 170,
        isInInventory: false,
        itemsLeft: 0,
        imageUrl: 'https://static.nike.com/a/images/t_default/228c755e-cc18-4187-89e0-87faaab421e8/court-legacy-lift-womens-shoes-x0B6BB.png',
    },
    {
      id: 26,
      name: 'New Balance Fresh Foam 1080v11',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'NEW BALANCE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9],
      colors: ['Blue', 'Red', 'Yellow'],
      price: 110,
      isInInventory: true,
      itemsLeft: 5,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91sJa3EaMuL.jpg',
  },
  {
      id: 27,
      name: 'Nike Air Zoom Pegasus 38',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [8, 9, 10, 11],
      colors: ['Black', 'Gray', 'White'],
      price: 160,
      isInInventory: true,
      itemsLeft: 3,
      imageUrl: 'https://th.bing.com/th/id/R.a20287bf923cdfbbb8541819d64fa60d?rik=78tJqNzoT0cJZQ&riu=http%3a%2f%2ffashionthirsty.com%2famazon%2fR1208_S3.jpg&ehk=cT8%2bXfgpPkrAknDjNqFzDvHsCOc1AWOMBGDB8yqFLPM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
      id: 28,
      name: 'Adidas Ultraboost 21',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'ADIDAS',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [7, 8, 9, 10],
      colors: ['Purple', 'Pink', 'White'],
      price: 140,
      isInInventory: false,
      itemsLeft: 0,
      imageUrl: 'https://th.bing.com/th/id/R.578032428ce5bf2323f18b593574b2d0?rik=7y7SwW7%2brbMyAA&riu=http%3a%2f%2fwww.amcshoes.com%2fuploadfile%2f2017%2f0719%2f20170719034352438.jpg&ehk=ieD%2fLqvcPE8e3mzhD3%2fcrps097CvH7LqoYt3QRAlQRo%3d&risl=&pid=ImgRaw&r=0',
  },
  {
      id: 29,
      name: 'Brooks Ghost 14',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'BROOKS',
      gender: 'MEN',
      category: 'RUNNING',
      size: [8, 9, 10, 11],
      colors: ['Green', 'Black', 'Gray'],
      price: 130,
      isInInventory: true,
      itemsLeft: 8,
      imageUrl: 'https://i5.walmartimages.com/asr/17879662-2a2a-406a-b28e-3d95e7578961_1.e6fc00b4646ba1eda7160ac93f86a252.jpeg',
  },
  {
      id: 30,
      name: 'Asics Gel-Nimbus 24',
      description: 'Lorem Ipsum is simply dummy text...',
      brand: 'ASICS',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9],
      colors: ['Blue', 'Red', 'White'],
      price: 120,
      isInInventory: true,
      itemsLeft: 5,
      imageUrl: 'https://s3-eu-west-1.amazonaws.com/img.frmoda.com/scarpe/philippemodel/abld/ABLDML04nero-01.jpg',
  },

{
  id: 31,
  name: 'Under Armour HOVR Sonic 4',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'UNDER ARMOUR',
  gender: 'MEN',
  category: 'RUNNING',
  size: [8, 9, 10, 11],
  colors: ['Black', 'Gray', 'White'],
  price: 150,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://cdn.sneakerbaron.nl/uploads/2020/02/23145524/reebok-classic-leather-rc-10-white--dv8299.png',
},
{
  id: 32,
  name: 'Reebok Nano X1',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'REEBOK',
  gender: 'WOMEN',
  category: 'CROSSFIT',
  size: [6, 7, 8, 9],
  colors: ['Pink', 'Gray', 'White'],
  price: 125,
  isInInventory: true,
  itemsLeft: 6,
  imageUrl: 'https://th.bing.com/th/id/OIF.NzDcEdmZRhvUVCHxhyWpWQ?rs=1&pid=ImgDetMain',
},
{
  id: 33,
  name: 'Puma Future Rider Twofold',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'PUMA',
  gender: 'MEN',
  category: 'CASUAL',
  size: [8, 9, 10, 11],
  colors: ['Black', 'Red', 'White'],
  price: 140,
  isInInventory: true,
  itemsLeft: 4,
  imageUrl: 'https://static.nike.com/a/images/t_default/96c7ba70-2ee2-48d6-895f-a712c19b5176/zegama-womens-trail-running-shoes-FWN4lV.png',
},

{
  id: 34,
  name: 'Nike Dunk Low',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'NIKE',
  gender: 'WOMEN',
  category: 'BASKETBALL',
  size: [6, 7, 8, 9],
  colors: ['Blue', 'Purple', 'White'],
  price: 165,
  isInInventory: true,
  itemsLeft: 7,
  imageUrl: 'https://static.nike.com/a/images/t_default/5da3d115-b8a0-421c-80df-9bbf2fdfe963/dunk-low-womens-shoes-p0hGKg.png',
},
{
  id: 35,
  name: 'Adidas Ultraboost 21',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'ADIDAS',
  gender: 'MEN',
  category: 'RUNNING',
  size: [8, 9, 10, 11],
  colors: ['Green', 'Black', 'White'],
  price: 110,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://static.nike.com/a/images/t_default/4baddae5-f590-43e8-894c-5bec545f7561/court-vision-low-womens-shoes-KPB597.png',
},
{
  id: 36,
  name: 'New Balance Fresh Foam 1080v11',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'NEW BALANCE',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Pink', 'Gray', 'White'],
  price: 120,
  isInInventory: true,
  itemsLeft: 5,
  imageUrl: 'https://static.nike.com/a/images/t_default/81c1f881-8cd0-4ed1-a433-c82dfd85699b/dunk-high-womens-shoes-LwCxXJ.png',
},
{
  id: 37,
  name: 'ASICS Gel-Nimbus 23',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'ASICS',
  gender: 'MEN',
  category: 'RUNNING',
  size: [8, 9, 10, 11],
  colors: ['Black', 'Red', 'White'],
  price: 130,
  isInInventory: true,
  itemsLeft: 3,
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91sJa3EaMuL.jpg',
},
{
  id: 38,
  name: 'Saucony Triumph 18',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'SAUCONY',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Blue', 'Purple', 'White'],
  price: 140,
  isInInventory: true,
  itemsLeft: 8,
  imageUrl: 'https://th.bing.com/th/id/R.a20287bf923cdfbbb8541819d64fa60d?rik=78tJqNzoT0cJZQ&riu=http%3a%2f%2ffashionthirsty.com%2famazon%2fR1208_S3.jpg&ehk=cT8%2bXfgpPkrAknDjNqFzDvHsCOc1AWOMBGDB8yqFLPM%3d&risl=&pid=ImgRaw&r=0',
},
{
  id: 39,
  name: 'Brooks Ghost 13',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'BROOKS',
  gender: 'MEN',
  category: 'RUNNING',
  size: [8, 9, 10, 11],
  colors: ['Green', 'Black', 'White'],
  price: 160,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://th.bing.com/th/id/R.578032428ce5bf2323f18b593574b2d0?rik=7y7SwW7%2brbMyAA&riu=http%3a%2f%2fwww.amcshoes.com%2fuploadfile%2f2017%2f0719%2f20170719034352438.jpg&ehk=ieD%2fLqvcPE8e3mzhD3%2fcrps097CvH7LqoYt3QRAlQRo%3d&risl=&pid=ImgRaw&r=0',
},
{
  id: 40,
  name: 'Hoka One One Bondi 7',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'HOKA ONE ONE',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Black', 'Gray', 'White'],
  price: 180,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://i5.walmartimages.com/asr/17879662-2a2a-406a-b28e-3d95e7578961_1.e6fc00b4646ba1eda7160ac93f86a252.jpeg',
},
// ... Previous entries

{
  id: 41,
  name: 'Nike Air Zoom Pegasus 38',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'NIKE',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Blue', 'Pink', 'White'],
  price: 200,
  isInInventory: true,
  itemsLeft: 10,
  imageUrl: 'https://th.bing.com/th/id/OIP.RpDvVx9qIxv8W1e9rq4DegHaIt?w=2981&h=3504&rs=1&pid=ImgDetMain',
},
{
  id: 42,
  name: 'Adidas Ultraboost 21',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'ADIDAS',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [7, 8, 9, 10],
  colors: ['Black', 'Gray', 'White'],
  price: 180,
  isInInventory: true,
  itemsLeft: 8,
  imageUrl: 'https://th.bing.com/th/id/R.fe59b0ed2ca1bd5f536285dbd54ffe1d?rik=AL9Txkm3je%2bDNw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwomen_shoes%2fwomen_shoes_PNG7450.png&ehk=jIxSm8nRyiOnx47rL2BlMT3z7x2moVIfkbjVLCL42Qg%3d&risl=&pid=ImgRaw&r=0',
},
{
  id: 43,
  name: 'New Balance Fresh Foam 1080v11',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'NEW BALANCE',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Pink', 'Gray', 'White'],
  price: 220,
  isInInventory: true,
  itemsLeft: 12,
  imageUrl: 'https://purepng.com/public/uploads/large/purepng.com-pink-women-shoewomen-shoesfootdesignfoot-wearwomenladiescasualleatherpink-1421526428123tgxwg.png',
},
{
  id: 44,
  name: 'ASICS Gel-Kayano 28',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'ASICS',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [7, 8, 9, 10],
  colors: ['Purple', 'Turquoise', 'White'],
  price: 190,
  isInInventory: true,
  itemsLeft: 9,
  imageUrl: 'https://www.pngmart.com/files/1/Women-Shoes-PNG-File.png',
},
{
  id: 45,
  name: 'Skechers GoRun Razor Excess',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'SKECHERS',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Black', 'Yellow', 'White'],
  price: 150,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://th.bing.com/th/id/OIP.UhULneI4Kixa4iRPJHe_kAHaHa?w=1500&h=1500&rs=1&pid=ImgDetMain',
},
{
  id: 46,
  name: 'Brooks Glycerin 19',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'BROOKS',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Blue', 'Pink', 'White'],
  price: 210,
  isInInventory: true,
  itemsLeft: 11,
  imageUrl: 'https://pngimg.com/uploads/women_shoes/women_shoes_PNG7459.png',
},
{
  id: 47,
  name: 'Under Armour HOVR Machina',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'UNDER ARMOUR',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [7, 8, 9, 10],
  colors: ['Red', 'Gray', 'White'],
  price: 170,
  isInInventory: true,
  itemsLeft: 7,
  imageUrl: 'https://pngimg.com/uploads/women_shoes/women_shoes_PNG7447.png',
},
{
  id: 48,
  name: 'Mizuno Wave Rider 25',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'MIZUNO',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Green', 'Purple', 'White'],
  price: 200,
  isInInventory: true,
  itemsLeft: 10,
  imageUrl: 'https://th.bing.com/th/id/OIP.9wGdAxzbwOjjQ7o1eA3iTgHaHz?w=1544&h=1626&rs=1&pid=ImgDetMain',
},
{
  id: 49,
  name: 'Reebok Nano X1',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'REEBOK',
  gender: 'WOMEN',
  category: 'CROSS TRAINING',
  size: [6, 7, 8, 9],
  colors: ['Gray', 'Black', 'White'],
  price: 180,
  isInInventory: true,
  itemsLeft: 8,
  imageUrl: 'https://pngimg.com/uploads/women_shoes/women_shoes_PNG7470.png',
},
{
  id: 50,
  name: 'Puma Calibrate Runner',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'PUMA',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Pink', 'Blue', 'White'],
  price: 160,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://www.freepnglogos.com/uploads/women-shoes-png/download-women-shoes-png-image-png-image-pngimg-2.png',
},
{
  id: 51,
  name: 'Vans Classic Slip-On',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'VANS',
  gender: 'WOMEN',
  category: 'CASUAL',
  size: [6, 7, 8, 9],
  colors: ['Black', 'Gray', 'White'],
  price: 120,
  isInInventory: false,
  itemsLeft: 0,
  imageUrl: 'https://pngimg.com/uploads/women_shoes/women_shoes_PNG7444.png',
},
{
  id: 52,
  name: 'Converse Chuck Taylor All Star',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'CONVERSE',
  gender: 'WOMEN',
  category: 'CASUAL',
  size: [6, 7, 8, 9],
  colors: ['White', 'Red', 'Blue'],
  price: 130,
  isInInventory: true,
  itemsLeft: 5,
  imageUrl: 'https://www.pngall.com/wp-content/uploads/2016/05/Women-Shoes-Free-Download-PNG.png',
},
{
  id: 53,
  name: 'Saucony Triumph 19',
  description: 'Lorem Ipsum is simply dummy text...',
  brand: 'SAUCONY',
  gender: 'WOMEN',
  category: 'RUNNING',
  size: [6, 7, 8, 9],
  colors: ['Blue', 'Purple', 'White'],
  price: 190,
  isInInventory: true,
  itemsLeft: 9,
  imageUrl: 'https://pngimg.com/uploads/women_shoes/women_shoes_PNG7438.png',
},
];

addToCart(): void {
  // Placeholder logic for adding the product to the cart
  console.log(`Added ${''} to the cart`);
  // Implement your actual cart logic here, such as calling a service or emitting an event.
}

isHovered(product: any): boolean {
  // Replace this logic with your actual hover condition
  // For example, check if the product's name contains the word 'hover'
  return product.name.toLowerCase().includes('hover');
}

}
