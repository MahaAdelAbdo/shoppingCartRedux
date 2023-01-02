import * as actionType from './Shopping.Type'

 const INITIAL_STATE = {
   products: [
     {
       id: 1,
       titel: ' Lizard',
       description:
         ' Lizards are a widespread group of squamate reptiles, with over 6,000 species',
       price: 64,
       image:
         'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=800',
     },
     {
       id: 2,
       titel: ' coca',
       description:
         '   with over 6,000 species, ranging across all continents except Antarctica',
       price: 50,
       image:
         'https://media.istockphoto.com/id/458464735/photo/coke.jpg?s=612x612&w=0&k=20&c=YbmiazMmY0DkWh_W8T0pBkOgai2k62hGF1TJn9EC5W0=',
     },
     {
       id: 3,
       titel: ' kocrg',
       description: 'ranging across all continents except Antarctica',
       price: 38,
       image:
         'https://assets.vogue.in/photos/5ce4274989be36a7337cfa42/2:3/w_2560%2Cc_limit/how-to-tell-when-you-need-to-throw-out-your-makeup.jpg',
     }, 
     {
       id: 5,
       titel: 'card',
       description: 'ranging across all continents except Antarctica',
       price: 130,
       image:
         'https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=800',
     },
       {
       id: 6,
       titel: '  syringe',
       description: 'ranging across all continents except Antarctica',
       price: 350,
       image:
         'https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=800',
     },
       {
       id: 7,
       titel: 'pepper',
       description: 'ranging across all continents except Antarctica',
       price: 1000,
       image:
         'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=800',
     },
       {
       id: 8,
       titel: ' ishadow',
       description: 'ranging across all continents except Antarctica',
       price: 100,
       image:
         'https://images.pexels.com/photos/3373724/pexels-photo-3373724.jpeg?auto=compress&cs=tinysrgb&w=800',
     },
       {
       id: 9,
       titel: ' cup',
       description: 'ranging across all continents except Antarctica',
       price: 100,
       image:
         ' https://images.pexels.com/photos/9879553/pexels-photo-9879553.jpeg?cs=srgb&dl=pexels-beyza-efe-9879553.jpg&fm=jpg',
     },
       {
       id: 10,
       titel: 'lemone',
       description: 'ranging across all continents except Antarctica',
       price: 800,
       image:
         ' https://images.pexels.com/photos/4021868/pexels-photo-4021868.jpeg?auto=compress&cs=tinysrgb&w=800',
     },
       {
       id: 11,
       titel: ' carem',
       description: 'ranging across all continents except Antarctica',
       price: 400,
       image:
         'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
     },
   ],
   //  produucts with id , price ,image ,heading
   cart: [],
   //  produucts with id , price ,image ,heading,qry
   currentItem: null,
 }
 const shopRedcer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case actionType.Add_to_cart:
       const item = state.products.find((prod) => prod.id === action.payload.id)
       const inCart=state.cart.find((item)=> item.id ===action.payload.id? true :false)
       return {
         ...state,
         cart: inCart
           ? state.cart.map((item) =>
               item.id === action.payload.id
                 ? { ...item, qty: item.qty+1}
                 : item
            ) : [...state.cart, { ...item, qty: 1 }],
       }
     case actionType.Remove_to_cart:
       return {
         ...state,
         cart:state.cart.filter(item => item.id !== action.payload.id),
       }
     case actionType.ADjust_Qry:
       return {
         ...state,
         cart: state.cart.map((item) =>
           item.id === action.payload.id ? { ...item, qty:+action.payload.qty} : item
         ),
       }
     case actionType.Load_Item:
       return {
         ...state,
         currentItem:action.payload,
       }

     default:
       return state
   }
 }
 export default shopRedcer