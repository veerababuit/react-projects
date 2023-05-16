const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true

    },
    richDescription: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 1,
        max: 150
    },
    rating: {
        type: Number,
    }
})
module.exports = mongoose.model('product', productSchema);
/*
{
    "name": "Redmi Note 7 Pro (Moonlight White, 64 GB)  (4 GB RAM)" ,
    "description": "Whether it’s work or entertainment, the Redmi Note 7 Pro challenges all odds and provides a truly immersive and enriched smartphone experience. Its 2.0 GHz Qualcomm Snapdragon 675 processor makes multitasking easy and it also comes with a (48 MP + 5 MP) dual-rear camera and a 13 MP front camera which let you click truly beautiful pictures. What’s more, the Face Unlock features makes unlocking this phone a piece of cake.",
    "richDescription": "Product DescriptionIt's time to go big with the Redmi Note 7 Pro's 16-cm (6.3) FHD+ Dot Notch display. Powered by a 2.0 GHz Qualcomm Snapdragon 675 processor and 4 GB of RAM, this smartphone lets you experience the next level of performance and control. With a (48 MP + 5 MP) dual-rear camera, a 13 MP front camera, and features such as Face Unlock and 4K Video Recording, the Redmi Note 7 Pro truly puts a new spin on your smartphone experience.Powerful PerformanceEnjoy a seamless and efficient smartphone experience, thanks to the powerful 2.0 GHz Qualcomm Snapdragon 675 processor. Whether you're playing games, watching videos, or browsing the Internet, the Redmi Note 7 Pro delivers a super-fast performance. It also comes with 64 GB of storage capacity, so you can store all your pictures and music with ease." ,
    "image":"https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile-refurbished/p/6/z/redmi-note-7-pro-64-d-mzb8005in-mi-4-original-imafj36gfh9gfr7g.jpeg?q=70",
    "brand":  "RedMI",
    "price": 15999,
    "category": "Mobiles",
    "countInStock":10,
    "rating": 4 
}



*/