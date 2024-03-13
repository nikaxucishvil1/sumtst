// გვაქვს ერთი მასივი ამ მასივში დაუმატეთ ყველას id ები
//  მერე წაშალეთ მეორე id ის მქონე მონაცემი
//  დანარჩენებს დაუმატეთ 1 კრიტერიუმი
//   adult:true ან adult:false მათი ასაკიდან გამომდინარე
// const Data = [
//     {
//         name:'nika',
//         age:20,
//         city:'Rustavi'
//     },
//     {
//         name:'lana',
//         age:null,
//         city:'tbilisi'
//     },
//     {
//         name:'saba',
//         age:11,
//         city:'gori'
//     }
// ]

// function manipulate(arr) {
//     return  arr.map((items,index) => ({...items,id:index + 1,adult:items.age > 18})).filter(item => item.id !== 2)

// }
// console.log(manipulate(Data));

// არის მასივი შექმენით ერთი p ტეგი სადაც ჩამოწერთ ინფორმაციას
// რომელი პროდუქტი არაა მარაგში
// რა ღირს ყველა თითოეული პროდუქტი მაგალითად iphone ები 1000 * 10
// თუ ფასი მეტია 100 ზე დალოგეთ სახელი და "ძვირი"
// თუ ნაკლებია 100 ზე დალოგეთ სახელი და "იაფი"
// რომელია ყველაზე ძვირი
// რომელია ყველაზე იაფი
// რომელია ყველაზე მეტი მარაგში
// რამდენია შავი პროდუქტი
// const products = [
//   {
//     name: "iphone",
//     price: 1000,
//     count: 10,
//     color: "silver",
//   },
//   {
//     name: "samsung",
//     price: 500,
//     count: 5,
//     color: "black",
//   },
//   {
//     name: "lenovo",
//     price: 70,
//     count: 5,
//     color: "black",
//   },
//   {
//     name: "nokia",
//     price: 20,
//     count: 0,
//     color: "red",
//   },
// ];

// function manipulate2(products) {
//   const pricesArr = [];
//   const coundArr = [];
//   let counterBlack = 0
//   products.forEach((item) => { //shedixar forEach shi
//     if (item.count === 0) {
//       let p = document.createElement("p");
//       p.textContent = `მარაგში აღარ არის ${item.name}`;
//       document.body.appendChild(p);
//     }
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
//     const first = document.createElement("div");
//     const allPrice = document.createElement("p");
//     allPrice.textContent = `ყველას ფასი ${item.name} ${
//       item.price * item.count
//     }`;
//     first.appendChild(allPrice);
//     document.body.appendChild(first);
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
//     const second = document.createElement("div");
//     const iapiTuDzviri = document.createElement("p");
//     let prices;
//     if (item.price > 100) {
//       prices = "ძვირი";
//     } else {
//       prices = "იაფი";
//     }
//     iapiTuDzviri.textContent = `${item.name} ${prices}`;
//     second.appendChild(iapiTuDzviri);
//     document.body.appendChild(second);
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
//     if (item.color === "black") {
//         counterBlack++
//     }
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
//     pricesArr.push(item.price);
//     coundArr.push(item.count);
//   }); // gamodixar forEach idan
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
//   const blackCountedTxt = document.createElement("p")
//   blackCountedTxt.textContent = `შავი პროდუქცია სულ ${counterBlack}`
//   document.body.appendChild(blackCountedTxt);
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

//   const iapi = Math.min(...pricesArr);
//   const dzviri = Math.max(...pricesArr);
//   products.forEach((item) => { //shedixar forEach shi
//     if (item.price === iapi) {
//       const iapiTxt = document.createElement("p");
//       iapiTxt.textContent = ` ყველაზე იაფი ${item.name}${item.price}`;
//       document.body.appendChild(iapiTxt);
//     }
//     if (item.price === dzviri) {
//       const dzviritxt = document.createElement("p");
//       dzviritxt.textContent = `ყველაზე ძვირი${item.name}${item.price}`;
//       document.body.appendChild(dzviritxt);
//     }
//   }); // gamodixar forEach idan
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
//   const metiCount = Math.max(...coundArr);

//   products.forEach((item) => { // shedixar forEach shi
//     if (item.count === metiCount) {
//       const iapiTxt = document.createElement("p");
//       iapiTxt.textContent = ` ყველაზე მეტი რაოდენობითაა ${item.name}${item.count}`;
//       document.body.appendChild(iapiTxt);
//     }
//   }); //gamodixar forEach idan
// }
// manipulate2(products);

// უნდა დავლოგოთ რამდენია კონკრეტული კატეგორიის პროდუქტი მაგალითად book - 2
// რა სირთულის პროდუქტია 0-30% მარტივი 30-50% საშუალო 50-100% რთული
// ბოლოს დააბრუნეთ array სადაც იქნება მხოლოდ 200 ზე ნაკლები ფასის მქონე ელემენტები

const Data = [
  { name: "harry potter", price: 20, category: "book", difficulty: "8%" },
  { name: "phone", price: 1200, category: "electronics", difficulty: "77%" },
  { name: "toaster", price: 100, category: "electronics", difficulty: "28%" },
  { name: "chair", price: 120, category: "furniture", difficulty: "38%" },
  { name: "bible", price: null, category: "book", difficulty: "0%" },
  { name: "კივილი", price: 1000000, category: "paint", difficulty: "100%" },
  { name: "sofa", price: 250, category: "furniture", difficulty: "57%" },
  { name: "pc", price: 1500, category: "electronics", difficulty: "88%" },
];

function manipulate3(Data) {
  let book = 0;
  let electronics = 0;
  let furniture = 0;
  let paint = 0;

  Data.forEach((item) => {
    switch (item.category) {
      case "book":
        book++;
        break;
      case "electronics":
        electronics++;
        break;
      case "furniture":
        furniture++;
        break;

      case "paint":
        paint++;
        break;

      default:
        break;
    }
  });

  Data.forEach((item) => {
    const diffNum = parseInt(
      item.difficulty.slice(0, item.difficulty.length - 1)
    );
    const p = document.createElement("p");
    if (diffNum > 50) {
      p.textContent = `${item.name} difficulty hard`;
    } else if (diffNum > 30 && diffNum < 50) {
      p.textContent = `${item.name} difficulty medium`;
    }else{
        p.textContent = `${item.name} difficulty easy`

    }
    document.body.appendChild(p)
  });



  const txt = `books- ${book} || electronics- ${electronics} || furniture- ${furniture} || paint- ${paint}`;
  console.log(txt);
  const lastTask = Data.filter(item => item.price < 200)
  console.log(lastTask);
}
manipulate3(Data);
