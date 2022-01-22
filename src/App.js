import './App.css';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import image1 from './images/1.jpg';


function App() {


  const nanpuraData = {
    "Top Street Foods":[
      {
        "name":"Ajay's Takeway Food LLP",
        "description":"The common man's good food option. They server Food that is Good , Affordable and accesible to all. They also server Yummy Burgers, Tasty Pizza and Best in Town.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"Trade House, Sainath Dhosa building, Athugar St. Opp. Alhabad Bank Nanpura Surat Gujarat - 395001"
        },
        {
          "title":"Contact No",
          "info":"+919624864864, +917046211211"
        },
        {
          "title":"Timing",
          "info":"10 AM - 10 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Ajay's",
          "info":"Cold Coffee RS. 20/- Only"
        },
        ],
        "menu":["Cold Coffee RS. 20/-","Shzwan Cheese Burger RS. 40/-","Tandoori Burger RS. 30/-","Shzwan Chesse Pizza RS. 60/-","Corn Cheese Pizza RS. 60/-"]
      },
      {
        "name":"Kailash Dosa & Pav Bhaji",
        "description":"Good Option for South Indian People, Affordable. They are Using best quality butter (Amul Butter), Vegetables, Breads. Serving best south Indian Street Food in Nanpura.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"B-6 Maheshwari Bhavani, Nanpura Surat Gujarat - 395001"
        },
        {
          "title":"Contact No",
          "info":"+917990698490, +918866601398"
        },
        {
          "title":"Timing",
          "info":"09:30 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"3.7 Star"
        },
        {
          "title":"Best of Kailash's",
          "info":"Sp. Spring Roll Dosa RS. 119/-"
        },
        ],
        "menu":["Sp. Spring Roll Dosa RS. 119/-","Paneer Spring Roll Dosa RS. 129/-","Paneer Shezwan Dosa RS. 129/-","Pav Bhaji RS. 100/-","Special Pav Bhaji RS. 120/-"]
      },
      {
        "name":"Coffee King",
        "description":"Serving Delicious mexican, italian food, Authentic Sizzlers and Specialty coffee with great shakes. Arrange family gathering, friends re-unions, Couple dates and corporate meetings. Coffee King provides space for all",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"1,2. Abhinandan Heights, Nr.madhuvan circle, LP Savani Rd, Adajan Gam, Adajan, Surat, Gujarat 395009"
        },
        {
          "title":"Contact No",
          "info":"+917947255174"
        },
        {
          "title":"Timing",
          "info":"11:00 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"3.7 Star"
        },
        {
          "title":"Best of Coffee King's",
          "info":"Sp. Cappuccino Coffee RS. 150/-"
        },
        ],
        "menu":["Cappuccino Coffee RS. 150/-","French Fries RS. 50/-","Mexican Rice RS. 80/-","Sizzling Brownie RS. 180/-","Chocolate Passion RS. 190/-"]
      }
    ],
    "Top Restaurants":[
      {
        "name":"Table 101",
        "description":"Have been there multiple times and almost have had a decent experience. The staff is very courteous but gets flustered when they are at full capacity. Had recently been for their Xmas brunch which was very disappointing. Very less variety for vegetarians. Desserts were below par.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"Ambika Niketan Road, Shri Shakti Nagar Society, Umra Gam, Athwa, Surat, Gujarat 395007"
        },
        {
          "title":"Contact No",
          "info":"+912617117000, +919099919035"
        },
        {
          "title":"Timing",
          "info":"10:00 AM - 11:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Table 101's",
          "info":"Herb and Olive Crusted Wild Caught Scottish Salmon RS. 200/- Only"
        },
        ],
        "menu":["North Indian breakfast RS. 895/-","Stir fry prawns black pepper RS. 955/-","Kung Pao chicken RS. 745/-","Vegan Breakfast  RS. 895/-","Ice tea RS. 325/-"]
      },
      {
        "name":"Gordhan Thal Restaurant",
        "description":"it is bast restaurant for the female. It serve bast thali it also have  lots of variety of thali and other good items.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"G Floor 5/6 President Plaza Opp Vanita Vishram Ground, Old RTO Office, Ring Rd, Surat, Gujarat 395001"
        },
        {
          "title":"Contact No",
          "info":" +919924066627"
        },
        {
          "title":"Timing",
          "info":"06:00 PM - 11:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Gordhan Thal's",
          "info":"full thali RS. 200/- Only"
        },
        ],
        "menu":["Dal baati RS. 200/-","khichadi RS. 90/-","Gujarai Thali RS. 250/-","Veg Paneer  RS. 160/-","Fruit Salad0 RS. 60/-"]
      },
      {
        "name":"Bhai Bhai Omelette Centre",
        "description":"They had wide variety of options to try in egg. For all the egg lovers it's a must visit place location in Surat. All the dish are amazing and unique in taste. we highly recommend you'll to visit there.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"6, Ground Floor, Triveni Apartments, Shop- No 5, Nanpura New Rd, opposite LIC Office, Timaliawad, Nanpura, Surat, Gujarat 395001"
        },
        {
          "title":"Contact No",
          "info":"+919898148740, +919879748740"
        },
        {
          "title":"Timing",
          "info":"12:00 PM - 11:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Bhai Bhai Omelette Centre's",
          "info":"Egg Kachu RS. 200/- Only"
        },
        ],
        "menu":["Egg Chips  RS. 150/-","Kachi Pahari special RS. 210/-","Egg masala RS. 200/-","Spring roll  RS. 150/-","Sahi curry RS. 170/-"]
      }



    ],
    "Top Guest Houses":[
      {
        "name":"OYO Flagship 30564 Ripple Mall",
        "description":"OYO is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"0 Ripple Mall, Dumas Rd, Opposite Arun Motors, Piplod, Surat, Gujarat 395001"
        },
        {
          "title":"Contact No",
          "info":" +912616201615, +919953350145 +917210101503"
        },
        {
          "title":"Timing",
          "info":"24 Hours"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Cost for Average Room: Classic Triple Room",
          "info":"RS 1,180/- (Free cancellation Free Wi-Fi)"
        },
        ],
        "features":["Free cancellation","Free Wi-Fi","Food service"]
      },
      {
        "name":"NEXUS HOTEL",
        "description":"Excellent hotel at good location. They provide good service. Their staff is very good and sincere. Lots of services they provide.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"SHOP NO.301 TO 303,319 TO 321 SILVER PONT,JIVANJYOT CIRCLE, Punagam, Surat, Gujarat 395006"
        },
        {
          "title":"Contact No",
          "info":"+917947383931"
        },
        {
          "title":"Timing",
          "info":"24 Hours"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Cost for Average Room: Classic Triple Room",
          "info":"RS 900/-"
        },
        ],
        "features":["Free cancellation","Free Wi-Fi","Food service","A.C, available","TV, available"]
      }
    ]
  }
  const vesuData = {
    "Top Street Foods":[
      {
        "name":"Chandan the omelet center",
        "description":"This is famous non-vegetarian street food in vesu. The omelet center have many varieties of omelet and other non-veg food.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"kabir house,udhana-magdalla Road, near Bafna marble, city light Town, Surat, Gujarat 395007"
        },
        {
          "title":"Contact No",
          "info":"+917947254985"
        },
        {
          "title":"Timing",
          "info":"5 PM - 11 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Chandan the omelet center's",
          "info":"Omlet Roll Gravy RS. 220/- Only"
        },
        ],
        "menu":["Omlet Roll Gravy RS. 220/-","Biruji rice RS. 140/-","Jira RS. 20/-","Egg Toffani RS. 180/-","Machhi curry RS. 160/-"]
      },
      {
        "name":"Binayak Fast Food",
        "description":"This is famous fast food in vesu. Binayak fast food have many varieties of food like: sandwich, fresh juice, pavBhaji, noodles etc.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"shop No 9, Vasudev complex, parle point road, Dumas road, Surat - 395007(opposite reliance town ship)"
        },
        {
          "title":"Contact No",
          "info":"+917947057937"
        },
        {
          "title":"Timing",
          "info":"10 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Binayak fast food's",
          "info":"Veg. Hakka noodles RS. 75/-"
        },
        ],
        "menu":["Veg. Fried rice RS. 95/-","Veg. Hakka noodles RS. 75/-","veg.Sandwich RS. 40/-","butter pavBhaji RS. 110/-"]
      },
      {
        "name":"MKS food",
        "description":"This is famous in vesu for Chinese and punjabi food. MKS food  have many varieties of Chinese and punjabi food.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"B-4, Smc Food Night Bazar, Piplod, Surat - 395007 (Behind Lakeview Garden"
        },
        {
          "title":"Contact No",
          "info":"+9179472770973"
        },
        {
          "title":"Timing",
          "info":"06 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of MKS food's",
          "info":"Mushroom tikka - RS. 155/-"
        },
        ],
        "menu":["Mushroom tikka RS. 95/-","Manchaw soup  RS. 70/-","Palak paneer  RS. 130/-","Tandoori roll  RS. 150/-"]
      }
    ],
    "Top Restaurants":[
      {
        "name":"Rajhans enjoy Restaurant",
        "description":"This is famous family restaurant in vesu. Rajhans enjoy restaurant have many varieties of Paneer and chef's special dishes",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"4PF9+JPP ,DUMAS, GUJARAT 394550"
        },
        {
          "title":"Contact No",
          "info":"+919824150899"
        },
        {
          "title":"Timing",
          "info":"10 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Rajhans enjoy restaurant's",
          "info":"Paneer Achari RS. 177/-"
        },
        ],
        "menu":["Paneer Achari RS. 95/-","Red velvet orea  RS. 130/-","Shahi paneer  RS. 177/-","Lemonade  RS 150/-","Papad curry RS 15/-"]
      },
      {
        "name":"Jay veeru fast food",
        "description":"This is famous veg restaurant in vesu. Jay veeru fast food have many varieties of dishes like: franky, Cream magic pav, dabeli, Vada pav and sandwich.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"A/6 Abhishek Park, Near, Someshwara Enclave, Vesu, Surat, Gujarat 395007"
        },
        {
          "title":"Contact No",
          "info":"+918511207737, +919974564646"
        },
        {
          "title":"Timing",
          "info":"09:30 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of jay veeru fast food's",
          "info":"Cheese dabeli RS. 25/-"
        },
        ],
        "menu":["Cheese dabeli RS. 25/-","Dubai pav  RS. 25/-","Cheese grill Vada pav  RS. 30/-","cadbury sandwich RS 80/-","spl.veg.Cheese franky RS 50/-"]
      },
      {
        "name":"Bollywood biryani company-BBC",
        "description":"This is famous veg & non -veg restaurant in vesu. Bollywood briyani comany have many varieties of briyani and non-veg special dishes.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":":G-20/21, Safal Square, University Rd, Vesu, Surat, Gujarat 395007"
        },
        {
          "title":"Contact No",
          "info":"+91703902300"
        },
        {
          "title":"Timing",
          "info":"09:30 AM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Bollywood biryani company-BBC's",
          "info":"Paneer returns RS. 260/-"
        },
        ],
        "menu":["Paneer returns RS. 260/-","Chicken biryani ki kasam RS. 260/-","non-veg.angari lollipop RS. 260/-","Mission egg RS 230/-","Hum hai briyani egg ki RS 199/-"]
      }
    ],
    "Top Guest Houses":[
      {
        "name":"OYO 71730 Hotel Marigold",
        "description":"OYO is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"School, Marigold Banquets and Rooms Beside LP Savani, Canal Rd, Vesu, Surat, Gujarat 39500"
        },
        {
          "title":"Contact No",
          "info":"+917947383931"
        },
        {
          "title":"Timing",
          "info":"24 Hours"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Cost for Average Room: Classic Triple Room",
          "info":"1. RS 1249/- and 2. RS 1062/-"
        },
        ],
        "features":["Free cancellation","Free Wi-Fi","Food service","A.C, available","TV, available","Customer Support"]
      },
      {
        "name":"Varma Palace Deluxe (OYO 27662)",
        "description":"OYO is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"Varma palace near new citi hospital, Devdeep Society Rd, near new Richie rich, Parle Point, Surat, Gujarat 395007"
        },
        {
          "title":"Contact No",
          "info":"919953350145"
        },
        {
          "title":"Timing",
          "info":"24 Hours"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Cost for Average Room: Classic Triple Room",
          "info":"RS 1451/-"
        },
        ],
        "features":["Free cancellation","Free Wi-Fi","Food service","A.C, available","TV, available","Customer Support"]
      }
    ]
  }

  const dindoliData = {
    "Top Street Foods":[
      {
        "name":"Aagman Punjabi and Chinese Food Corner",
        "description":"We are Aagman Punjabi and Chinese Food Corner, The COMMON MAN'S Good Food Option. We Serve 'Food that is Good', affordable and accessible to all. We serve Yummy Noodle, Tasty Chinese and Best in the Town, Refreshing Triple Rice. Taste it to Believe it!",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":":Shop No 17,18,19 Aatmiya food Court Nr Maduram Circle, Dindoli - Kharvasa Rd, Vrukshmani Society, Dindoli, Surat, Gujarat 394210"
        },
        {
          "title":"Contact No",
          "info":"+919537240093"
        },
        {
          "title":"Timing",
          "info":"06:00 PM - 10:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Aagman Punjabi and Chinese Food Corner's",
          "info":"Mashroom Rice RS. 110/-"
        },
        ],
        "menu":["Mashroom Rice RS. 110/-","Fried Rice RS. 90/-","Chinese Bhel RS. 90/-","Bombay Bhel RS 90/-","Tripple Rice RS 140/-"]
      },
      {
        "name":"Krishna Fast Food",
        "description":"Have been there multiple times and almost have had a decent experience. The staff is very courteous but gets flustered when they are at full capacity. Had recently been for their Xmas brunch which was very disappointing. Very less variety for vegetarians. Desserts were below par.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":":27, Opposite Rami park, Mahadev Nagar 3, Royal Star Town ship, Mahadev Nagar, Dindoli, Surat, Gujarat 395210."
        },
        {
          "title":"Contact No",
          "info":" +919265504442"
        },
        {
          "title":"Timing",
          "info":"10:00 PM - 09:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Krishna Fast Food's",
          "info":"Pav Bhaji RS. 70/-"
        },
        ],
        "menu":["Pav Bhaji RS. 70/-","Paneer Chilli Dry RS. 120/-","Butter Pulao RS. 50/-","Manchaw Soup RS 50/-","Manchurian Rice RS 80/-"]
      },
      {
        "name":"Jalaram Khichdi",
        "description":"Famous in their town for their work. Using good type of material.dishes maked by very clean method . Have very much staff in quantity and very sincere.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"D-2, Anand Mahal Rd, Shantinagar society, Narotam Nagar, Surat, Gujarat 395009."
        },
        {
          "title":"Contact No",
          "info":" +919909968878."
        },
        {
          "title":"Timing",
          "info":"10:00 PM - 09:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Jalaram Khichdi's",
          "info":"Masala Khichdi RS. 70/-"
        },
        ],
        "menu":["Simple Khichdi RS. 50/-","Masala Khichdi RS. 70/-","Ravaiya no raso RS. 30/-","Chess Khichdi RS 70/-"]
      }
    ],
    "Top Restaurants":[
      {
        "name":"Madhuram Garden Restaurant",
        "description":"This restaurant was very beautiful in look because of this is a Garden Restaurant . Food of this restaurant was very awesome and lovely.       At night ,this restaurant was looking so beautiful because of his lightning.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"179/1C, Kharwasa Road, Near Madhuram Circle, Dindoli, Surat"
        },
        {
          "title":"Contact No",
          "info":" +918200587195"
        },
        {
          "title":"Timing",
          "info":"10:00 PM - 09:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Madhuram Garden Restaurant's",
          "info":"Surti Undhiyu RS. 170/-"
        },
        ],
        "menu":["Surti Undhiyu RS. 50/-","Dahi Tikhari RS. 100/-","Leela Sak Bhaji RS. 130/-","Mug Masala RS 120/-"]
      },
      {
        "name":"The Sarvottam Restaurant",
        "description":"Serving only few items like samosa ,vada pav and more but very tasty and famous in their town . Using good quality materials and item maked by  in very neat and clean place and method",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"Shop 1-11, Raj Empire, Near Maharana Pratap Chowk, Godadara, Surat"
        },
        {
          "title":"Contact No",
          "info":"+919924476555"
        },
        {
          "title":"Timing",
          "info":"10:00 PM - 09:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Madhuram Garden Restaurant's",
          "info":"Kaju Aangara RS. 170/-"
        },
        ],
        "menu":["Kaju Aangara RS. 50/-","Paneer Takatak RS. 210/-","Paneer Korma RS. 135/-","Kaju Kari RS 120/-","Paneer Palak RS. 125/-"]
      },
      {
        "name":"Navdurga Nasta Gruh",
        "description":"Serving only few items like samosa ,vada pav and more but very tasty and famous in their town . Using good quality materials and item maked by  in very neat and clean place and method ",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"G-1, Shree Arcade, Opposite Sai Darshan Residency, Navagam, Dindoli, Surat"
        },
        {
          "title":"Contact No",
          "info":""
        },
        {
          "title":"Timing",
          "info":"10:00 PM - 09:30 PM"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Best of Madhuram Garden Restaurant's",
          "info":"Kachori Ragda RS. 30/-"
        },
        ],
        "menu":["Kachori Ragda RS. 30/-","Ragda RS. 30/-","Samosa RS. 35/-","Vadapav RS 15/-"]
      }
    ],
    "Top Guest Houses":[
      {
        "name":"OYO 71730 Hotel Marigold",
        "description":"OYO is a global platform that empowers entrepreneurs and small businesses with hotels and homes by providing full stack technology that increases earnings and eases operations. Bringing affordable and trusted accommodation that guests can book instantly.",
        "image":"",
        "addOns":[
        
        {
          "title":"Address",
          "info":"School, Marigold Banquets and Rooms Beside LP Savani, Canal Rd, Vesu, Surat, Gujarat 39500"
        },
        {
          "title":"Contact No",
          "info":"+917947383931"
        },
        {
          "title":"Timing",
          "info":"24 Hours"
        },
        {
          "title":"Review",
          "info":"4.1 Star"
        },
        {
          "title":"Cost for Average Room: Classic Triple Room",
          "info":"RS 900/-"
        },
        ],
        "features":["Free cancellation","Free Wi-Fi","Food service","A.C, available","TV, available"]
      }
    ]
  }

  
  const countries = ["Please select country","INDIA","USA","CANADA"];
  const states = ["Please select the State","GUJARAT"];
  const districts = ["Please select the District","SURAT","AHMEDABAD","ANAND"];
  const areas = ["Please select Area","NANPURA","VESU","DINDOLI"];
  const bestOf = ["Please select best of","Top Restaurants","Top Street Foods","Top Guest Houses"];
  const countryState = {
    "INDIA":["Please select the State","GUJARAT","MAHARASHTRA","RAJASTHAN"],
    "USA":["Please select the State"],
    "CANADA":["Please select the State"]
  }

  const districtArea = {
    "GUJARAT":["Please select the District","SURAT","AHMEDABAD","ANAND"],
    "MAHARASHTRA":["Please select District"],
    "RAJASTHAN":["Please select District"],
  }

  const area = {
    "SURAT":["Please select Area","NANPURA","VESU","DINDOLI"],
    "AHMEDABAD":["Please select Area"],
    "ANAND":["Please select Area"],
  }

  const [selectedStateOption,setSelectedStateOption] = useState(["Please select State"]);
  const [selectedDistrictOption,setSelectedDistrictOption] = useState(["Please select District"]);
  const [selectedAreaOption,setSelectedAreaOption] = useState(["Please select Area"]);

  const [selectedItem,setSelectedItem] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState("");
  const [selectedState,setSelectedState] = useState("");
  const [selectedArea,setSelectedArea] = useState("");
  const [selectedDistrict,setSelectedDistrict] = useState("");
  const [selectedBestOf,setSelectedBestOf] = useState("");

  const onChangeCountry = function(event){
    setSelectedCountry(event.target.value);
    if(event.target.value !== 'Please select country'){
    setSelectedStateOption(countryState[event.target.value]);
    setSelectedDistrictOption(["Please select District"]);
    setSelectedAreaOption(["Please select Area"]);
    }
  }

  const onChangeState = function(event){
    setSelectedState(event.target.value);
    setSelectedDistrictOption(districtArea[event.target.value]);
    setSelectedAreaOption(["Please select Area"]);
  }

  const onChangeDistrict = function(event){
    setSelectedDistrict(event.target.value);
    setSelectedAreaOption(area[event.target.value]);
  }

  const onChangeArea = function(event){
    setSelectedArea(event.target.value);
  }

  const onChangeBestOf = function(event){
    setSelectedBestOf(event.target.value);
  }
  
  const onClickSearch = function(){
    console.log(selectedCountry);
    if(selectedCountry === ""){
      alert("Please select country");
      return;
    }

    if(selectedCountry !== "INDIA"){
      alert(`Currently, Data is not available for ${selectedCountry}`);
      return;
    }

    if(selectedState !== "GUJARAT"){
      alert("Please select state");
      return;
    }

    if(selectedDistrict !== "SURAT" && selectedDistrict !== "ANAND" && selectedDistrict !== "AHMEDABAD"){
      alert("Please select district");
      return;
    }

    if(selectedArea !=="NANPURA" && selectedArea !=="DINDOLI" && selectedArea !=="VESU"){
      alert("Please select area");
      return;
    }
    if(selectedBestOf!=="Top Restaurants" && selectedBestOf!=="Top Street Foods" && selectedBestOf!=="Top Guest Houses"){
      alert("Please select best Of");
      return;
    }

    if(selectedDistrict === "ANAND"){
      alert("Current data is not available for Anand");
      return;
    }

    if(selectedDistrict === "AHMEDABAD"){
      alert("Current data is not available for Ahmedabad");
      return;
    }

    if(selectedArea === "NANPURA"){

      setSelectedItem(nanpuraData[selectedBestOf]);

    }
    else if(selectedArea === "DINDOLI"){
      setSelectedItem(dindoliData[selectedBestOf]);
    }
    else if(selectedArea === "VESU"){
      setSelectedItem(vesuData[selectedBestOf]);
    }



  }



  const responsiveMenu = () => {
    var element = document.getElementById("navbar");
    element.classList.toggle("expand");
  }

  return (
    <div className="App">
      <div class="header">
        <div class="container">
          <img class="logo" src={logo} />
          <a id="menu-icon" onClick={responsiveMenu}>&#9776;</a>
          {/* <nav id="navbar" class="navbar">
            <ul class="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav> */}

        </div>
      </div>
      <div className='main'>
        <div className='main-1'>
          <div className='main-form'>
            <h4>Please Fill the details To Find Your Best</h4>
            <hr/>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select Country</label>
              <div>
              <select id="selectbasic" name="selectbasic" class="form-control" onChange={onChangeCountry}>
                {
                  countries.map((country , index)=>{
                    return <option>{country} </option> })
                }
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select State</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control" onChange={onChangeState}>
                {
                  selectedStateOption.map((state , index)=>{
                       return <option>{state} </option> })
                }
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select District</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control" onChange={onChangeDistrict}>
                {
                selectedDistrictOption.map((district , index)=>{
                  return <option>{district} </option> })
                  }
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select Area</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control" onChange={onChangeArea}>
                {
                selectedAreaOption.map((area , index)=>{
                  return <option>{area} </option> })
                }
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="selectbasic">Select Best of</label>
              <div class="">
                <select id="selectbasic" name="selectbasic" class="form-control" onChange={onChangeBestOf}>
                {
                bestOf.map((eachBestOf , index)=>{
                return <option>{eachBestOf} </option> })
                }
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="search-button">
                <button id="button1id" name="button1id" class="btn btn-primary" onClick={onClickSearch}>Search</button>
              </div>
            </div>
          </div>
          <div className='tag-line'>
            <h1>
            Saathi....Har Safar ka Saathi
            </h1>
          </div>
        </div>
        <div className='container'>
        <div className='row'>
          
        {
              selectedItem.map((eachItem,index)=>{
                return (

                    <>
                    <div class="card" style={{'width': '22rem'}}>
                        <img src={image1} class="card-img-top" alt=""/>
                        <div class="card-body">
                          <h5 class="card-title">{eachItem.name}</h5>
                          <p class="card-text">{eachItem.description}</p>
                          <hr/>
                        </div>
                        {
                      eachItem.addOns.map((eachAddOns,index)=>{
                        return (<div>
                        <h5 class="card-title">{eachAddOns.title}</h5>
                        <p class="card-text">{eachAddOns.info}</p>
                        <hr/>
                      </div>)
                      })
                    }

                    {
                      "menu" in eachItem?
                      (<div>
                        <div >
                        <h5 class="card-title">Menu</h5>
                        <p class="card-text"><p>{eachItem.menu.map((eachMenu,index)=>{
                            return(
                            <>
                            <span>{eachMenu}</span><br/>
                            </>)
                          })}</p></p>
                        <hr/>
                      </div>
                      </div>
                      ):''
                    }

                  {
                      "features" in eachItem?
                      (<div>
                        <div>
                        <h5 class="card-title">Features</h5>
                        <p class="card-text"><p>{eachItem.features.map((eachFeature,index)=>{
                            return(
                            <>
                            <span>{eachFeature}</span><br/>
                            </>)
                          })}</p></p>
                        <hr/>
                      </div>
                      </div>
                      ):''
                    }


                    </div>
                    </>);
              })
            }
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
