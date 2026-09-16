import "./Product.css";
import Price from "./Price";


function Product({title ,idx}) {
    let oldPrices=["122,22","2211,32","21,223","563,44"];
let newPrices = ["7333","333,44","11,32","22,33"];
let description = [
    ["8,000 DPI", "5 Programmble buttons"],
[ "intuitive surface","designed for iPad pro"],
["designed for iPad pro","wireless"],
["wireless "," optical orientation"],
];
    return (
    <div className="Product" >
         <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      <Price oldPrice={oldPrices[idx]}
       newPrice={newPrices[idx]}/>
   </div>
);
}
export default Product;