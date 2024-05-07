import { NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";

function MainContainer(props) {
  const bestsell = props.bestsell;
  return (
    <div>
      {/* Section 1 */}
      <section className="bg-green-300 h-[700px] relative">hi</section>
      {/* Section 2 */}
      <section className="bg-yellow-300 h-[220px] flex justify-evenly">
        <div className="bg-black h-[180px] w-[280px] relative bottom-12 rounded-sm"></div>
        <div className="bg-black h-[180px] w-[280px] relative bottom-12 rounded-sm"></div>
        <div className="bg-black h-[180px] w-[280px] relative bottom-12 rounded-sm"></div>
      </section>
      {/* Section 3 */}
      <section className="bg-red-300 h-[750px]">
        <h2 className="text-center p-8 font-semibold text-xl tracking-widest">
          POPULAR PRODUCTS
        </h2>
        <div className=" w-[80vw] h-[600px] bg-red-400 m-auto grid  grid-cols-4  ">
          {bestsell.map((val) => {
            if (val.mostsell == true) {
              return (
                <div className="bg-red-200 h-auto w-[240px] block gap-1 m-auto mt-3 mb-1 rounded-sm hover:shadow-2xl overflow-hidden">
                  {/* image  */}
                  <div className="h-[220px]  w-[240px] border-2 m-auto">
                    <img className="h-[100%] w-[100%] " src={val.images}></img>
                  </div>

                  {/* name && price */}
                  <h3 className="ml-4 mt-1 font-semibold">{val.desc}</h3>
                  <h3 className="ml-4  font-semibold">₹ {val.price}</h3>
                </div>
              );
            }
          })}
          {/* <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div> */}
        </div>
        <div className="text-center m-2">
          <button className="bg-blue-500 rounded-sm p-3 border-none">
            <NavLink to="/Store"> VIEW ALL PRODUCTS</NavLink>
          </button>
        </div>
      </section>
      {/* Section 4 */}
      <Testimonial></Testimonial>
      {/* Section 5 */}
      <section className="bg-green-300 h-[400px] relative">hi</section>
    </div>
  );
}

export default MainContainer;
