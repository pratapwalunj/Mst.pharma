import { Link } from "react-router-dom";


function Store(props) {
  const storedata = props.storedata;
  // const [pdetails, Setpdetails] = useState([]);

  // function PdetalisHandler(a) {
  //   Setpdetails([{ ...a }]);
  // }

  return (
    <div className="bg-neutral-900 h-auto ">
      {/* Product detalis
      {pdetails.map((x) => {
        return (
          <div className="bg-green-500 absolute z-10 mt-[25%] ml-[50%]">
            <div className="h-[250px]  w-[220px] border-2 m-auto">
              <img className="h-[100%] w-[100%] " src={x.images}></img>
            </div>
            <div>
              <h2>{x.desc}</h2>
              <div>{x.descs}</div>
            </div>
          </div>
        );
      })} */}

      {/* Productssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}

      <div className="w-[70vw]  grid grid-cols-4 m-auto bg-yellow-500 ">
        {storedata.map((val) => {
          return (
            <div key={val.id} className="bg-red-200 h-[300px] w-[240px] block gap-2 m-auto mt-3 mb-1 rounded-sm hover:shadow-2xl">
              {/* image  */}
              <Link to={`/Store/${val.id}`}>
                <div className="h-[250px]  w-[220px] border-2 m-auto">
                  <img
                    // onClick={()=>PdetalisHandler(val)}
                    className="h-[100%] w-[100%] "
                    src={val.images}
                  ></img>
                </div>
              </Link>

              {/* name && price */}
              <h3 className="ml-4 mt-1 font-semibold">{val.desc}</h3>
              <h3 className="ml-4  font-semibold">₹ {val.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
