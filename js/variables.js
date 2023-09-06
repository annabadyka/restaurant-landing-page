//variables
const regExpEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const menu_cats =[
    {nid_cat: 1, alias: 'Salads'},
    {nid_cat: 2, alias: 'Meat'},
    {nid_cat: 3, alias: 'Fish'},
    {nid_cat: 4, alias: 'Deserts'}
];
const menu_items =[
    {nid: '1', nid_cat: '1', price: '$3.00', titulo: 'Salad', descrip: 'Tomato salad', img_portada: 'imgs/img-menu-1.jpg', stars: 4},
    {nid: '2', nid_cat: '1', price: '$5.00', titulo: 'Salad', descrip: 'Avocado salad', img_portada: 'imgs/img-menu-2.jpg', stars: 4},
    {nid: '3', nid_cat: '2', price: '$6.00', titulo: 'Meat', descrip: 'Meat with broccoli', img_portada: 'imgs/img-menu-3.jpg', stars: 5},
    {nid: '4', nid_cat: '3', price: '$6.50', titulo: 'Fish', descrip: 'Fish soup', img_portada: 'imgs/img-menu-4.jpg', stars: 4},
    {nid: '5', nid_cat: '4', price: '$6.50', titulo: 'Dessert', descrip: 'Pancakes and berries', img_portada: 'imgs/img-menu-5.jpg', stars: 4},
    {nid: '6', nid_cat: '4', price: '$4.50', titulo: 'Dessert', descrip: 'Waffles and berries', img_portada: 'imgs/img-menu-6.jpg', stars: 5}
];
const testimonials_items =[
    {nid: '1', pic: 'imgs/img1_testimonials-1.jpg', name: 'Arkell Charles', job: 'PR manager', text: '&ldquo;Wonderful food and wonderful service. I will come back for sure.&rdquo;'}, 
    {nid: '2', pic: 'imgs/img2_testimonials-2.jpg', name: 'Xu Jianhong', job: 'Secretary', text: '&ldquo;Good food and central location. Spend time with your family.&rdquo;'}, 
    {nid: '3', pic: 'imgs/img3_testimonials-3.jpg', name: 'Will Williams', job: 'Web developer', text: '&ldquo;For all who likes good food in the center of the city.&rdquo;'} 
];