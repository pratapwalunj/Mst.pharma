import { useParams } from "react-router-dom";
import data from "../Data";

// function ProductDetails() {
//   console.log(data);
//   //   const value = props.value;
//   const params = useParams();
//   const pname = params.Productname;
//   // console.log(pid);
//   let pdata;
//   console.log(` before assigning ${pdata}`);

//   // for (let i = 0; i < data.length; i++) {
//   //   console.log(`Checking product ${data[i].id}`);
//   //   if (data[i].id === parseInt(pid)) {
//   //     console.log(`pdataaaaaa${data[i]}`)
//   //     pdata = data[i];
//   //     break;
//   //   }
//   // }

//   data.forEach((element) => {
//     if (element.desc === pname) {
//       // Ensure types match for comparison
//       pdata = element;
//       console.log(`Found pdata: ${pname}`);
//     } else {
//       console.log(`No product found with ID ${pname}`);
//     }
//   });

//   console.log("After assigning:", pdata);

//   return (
//     <div className="bg-yellow-200 h-[400px]">
//       <div>
//         {/* img */}
//         {/* <img src={pdata.images}></img> */}
//       </div>
//       <div>
//         {/* desc.. */}
//         <div>
//           {/* <p>{pdata.descs}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProductDetails() {
//   const params = useParams();
//   const pid = params.Productid;

//   const pdata = data;

//   let singleProductData;

//   console.log(typeof parseInt(pid));
//   console.log("data is .......", pdata);

//   pdata.forEach((e) => {
//     // if(parseInt(pid)===e.id ) {
//     singleProductData = e;
//     console.log(e);

//     // }
//   });
//   console.log("data is .......", pdata);
// }

function ProductDetails() {
  const params = useParams();
  const pid = params.Productid;
  console.log("ppppppppiiiiiiidddddddd", pid);

  const pdata = data;
  console.log("pppprrrrrdddddddd", pdata);
 

  const singleProduct = pdata.find((e) => e.id === parseInt(pid));

  console.log(singleProduct);
}

export default ProductDetails;
