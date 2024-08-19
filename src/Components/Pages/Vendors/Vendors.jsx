import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import "./Vendors.css";
import VendorsCart from "../VendorsCart/VendorsCart";
// import VendorJs from '../../dB/vendors'
import AllDatas from "../../dB/allDatas.json";

const Vendors = () => {
  const [it, setIt] = useState([]);

  // const catName = useParams()
  // console.log(category)
  const Nav = useNavigate();

  const TheDatas = Object.values(AllDatas);
  console.log(TheDatas);

  useEffect(() => {
    const newDatas = TheDatas.map((e) => e.vendor);
    const RecentDatas = newDatas.reduce((a, e) => {
      // if(!a.includes(e)){
      //   a.push(e)
      // }
      // return a
      if (a.length === 0) {
        a.push(e);
        return a;
      } else if (a.includes(e)) {
        return a;
      } else {
        a.push(e);
        return a;
      }
    }, []);
    setIt(RecentDatas);
  }, []);

  return (
    <div className="Vendors">
      {/* <div className='VendorLower'> */}
      <div className="VendorsInner">
        {it.map((name) => (
          // <Link to={`/vendor/${name}`}>
            <VendorsCart name={name} />
            // </Link>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Vendors;

{
  /* <Link  className='cardWrapper'id={name.id} to= {`/category/${name}`}>
{name.toUpperCase()}

</Link> */
}
