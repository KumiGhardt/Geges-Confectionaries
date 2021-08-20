//an array of the menulist to be used in the pages
import birthdaycake from '../media/birthdaycake.jpeg';
import Cupcakes from '../media/cupcakes.jpeg';
import angelcake from '../media/angelcake.jpeg';
import Cookies from '../media/cookies.jpeg';
import Gifts from '../media/Gifts.jpeg';
import Garlicbread from '../media/garlicbread.jpeg';
import Pizza from '../media/pizza.jpeg';
import raspberrycheesecake from '../media/raspberrycheesecake.png';


const sweet = "sweet";
const savory = "savory";
const craving = "craving"

export const menuList = [
{
    _id: "sweet1",
    category: sweet,
    item: "Birthday cake" ,
    image: angelcake,
    description: "This a vanilla angel cake",
    price: 50
},

{
    _id: "sweet2",
    category: sweet,
    item: "Cupcakes",
    image: Cupcakes,
    description: "These are cupcakes",
    price: 45
},
{
    _id: "sweet3",
    category: sweet,
    item: "Raspberry Cake",
    image: birthdaycake,
    description: "This raspberrycake",
    price: 65,
},
{
    _id: "sweet4",
    category: sweet,
    item: "Cookies",
    image: Cookies,
    description: "These are vanilla cookies",
    price: 12.99
},
{
    _id: "sweet5",
    category: sweet,
    item: "Cupcake Messages",
    image: Gifts,
    description: "These are cupcakes arranges as a bouquet of roses",
    price: 75
},
{
    _id: "savory1",
    category: savory,
    item: "Garlic Bread",
    image: Garlicbread,
    description: "This is garlicbread with cheese",
    price: 75
},
{
    _id: "savory2",
    category: savory,
    item: "Pizza",
    image: Pizza,
    description: "This salami pizza",
    price: 69
},
{
    _id: "craving1",
    category: craving,
    item: "Raspberry cheesecake" ,
    image: raspberrycheesecake,
    description: "This is a raspberry and cheesecake slice",
    price: 10
},
]

export default menuList;