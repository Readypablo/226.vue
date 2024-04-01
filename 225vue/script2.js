


var app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        product:[
            {
                id:0,
                name:"gray",
                link:"1.jpg",
                image:"1.jpg",
                inStock: true,
                onSale: true,
                variants: [
                    {
                      variantId: 0,
                      variantColor: "blue",
                      variantImage: "2.jpg"    
                    } ,
                     {
                        variantId: 1,
                        variantColor: "gray",
                        variantImage: "1.jpg" 
                      },]
            },
            {
                id:1,
                name:"blue",
                link:"2.jpg",
                image:"2.jpg",
                inStock: false,
                onSale: true,
                variants: [
                    {
                        variantId: 0,
                        variantColor: "blue",
                        variantImage: "2.jpg"    
                      } ,
                       {
                          variantId: 1,
                          variantColor: "gray",
                          variantImage: "1.jpg" 
                        },]
            },
            {
                id:2,
                name:"green",
                link:"3.jpg",
                image:"3.jpg",
                inStock: false,
                onSale: true,
                variants: [
                    {
                        variantId: 0,
                        variantColor: "blue",
                        variantImage: "2.jpg"    
                      } ,
                       {
                          variantId: 1,
                          variantColor: "gray",
                          variantImage: "1.jpg" 
                        },]
       
            }
        ],

        sizes:[
            {
                id:0,
                razmer: 'S',
            },
            {
                id:1,
                razmer: 'M', 
            },
            {
                id:2,
                razmer: 'L',
            },
            {
                id:3,
                razmer: 'XL', 
            },
            {
                id:4,
                razmer: 'XXL',
            },
            {
                id:5,
                razmer: 'XXXL',
            },
           
           
            

            
        ]


     
     


    },
    methods: {
        addToCart() {
          this.cart += 1
        },
        minToCart() {
            if(this.cart >0){
                this.cart -= 1
            }
          },
          
          updateProduct(variantImage,id) {
            this.product[id].image = variantImage
          }

          
      }
      
  
});

// app.product[id].inStock = false