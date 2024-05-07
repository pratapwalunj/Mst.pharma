import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
function Testimonial() {
  return (
    <section className="bg-orange-300 h-[500px] flex justify-center ">
      <div className="h-[48vh] w-[40vw] bg-blue-300  rounded-sm shadow-2xl margin-auto mt-[100px] ">
        <div className="bg-green-600 h-[40vh]">{/* <Page></Page> */}</div>
        <div className="text-center mt-4 flex justify-center gap-6">
          <button className="text-2xl text-violet-500 ">
            <FaLessThan> </FaLessThan>
          </button>
          <button className="text-2xl text-violet-500">
            <FaGreaterThan></FaGreaterThan>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
