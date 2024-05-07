import { NavLink, Route, Routes } from "react-router-dom";
import Card from "./Card";

function Store(props) {
  const storedata = props.storedata;
  return (
    <div className="bg-neutral-900 h-auto ">
      <div className="w-[70vw]  grid grid-cols-4 m-auto bg-yellow-500 ">
        {storedata.map((val) => {
          return (
            <div className="bg-red-200 h-[300px] w-[240px] block gap-2 m-auto mt-3 mb-1 rounded-sm hover:shadow-2xl">
              <NavLink to="/Card">
                {/* image  */}
                <div className="h-[250px]  w-[220px] border-2 m-auto">
                  <img className="h-[100%] w-[100%] " src={val.images}></img>
                </div>
              </NavLink>

              {/* name && price */}
              <h3 className="ml-4 mt-1 font-semibold">{val.desc}</h3>
              <h3 className="ml-4  font-semibold">₹ {val.price}</h3>

              <Routes>
                <Route path="/Card" element={<Card></Card>}></Route>
              </Routes>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
