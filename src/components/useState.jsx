import React, { useEffect, useState } from 'react'
import Details from './Pages/Details/Details'
import Order from './Pages/Order/Order'
import { useLocation, useNavigate, useParams } from 'react-router'
import DetailsModal from './Modal/DetailsModal/DetailsModal'

const ToggleComponent = () => {
    const [toggle, setToggle] = useState(0)
    const [animate, setAnimate] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        size: "",
        qty: 0,
        color: "",
        name: "",
        address: "",
        pickup: "",
        phoneNumber: "",
        bustop: "",
        alternativePhoneNumber: ""
    })
    // console.log(formData);

    const navigate = useNavigate();
    const location = useLocation();
    const { shoeId } = useParams()


    // Update the path based on the toggle state
    useEffect(() => {
        if (toggle === 0) {
            navigate(`/details/${shoeId || "default-id"}`); // Replace "default-id" with a fallback ID if shoeId is missing
        } else if (toggle === 1) {
            navigate("/order");
        }
    }, [toggle, navigate, shoeId]);


    // Set toggle state based on the current path
    useEffect(() => {
        if (location.pathname === "/details/:shoeId") {
            setToggle(0);
        } else if (location.pathname === "/order") {
            setToggle(1);
        }
    }, [location.pathname]);


    const order = async(e)=> {


        // setLoading(true)

        try {

          const response = await axios.post(`https://boss-wear-t7uu.onrender.com/api/v1/order/placeorder/${shoeId}`,formData)
          toast.success(response.data.message);
          console.log(response);

          setLoading(false)
          setTimeout(() => {
            // Nav(`/order/${e._id}`)
          }, 3000);

        } catch (error) {

          // console.log(error)
          setLoading(false)
        }
      }
    return (
        <div>
            {
                animate ? <DetailsModal setAnimate={setAnimate} animate={animate}/> : null
            }
            {
                toggle ===0 && 
            <Details formData={formData} setFormData={setFormData} />
            }
             {
                toggle === 1 && 
                <Order formData={formData} setFormData={setFormData} setToggle={setToggle} order={order}  loading={loading}/>
            }
           
        </div>
    )
}

export default ToggleComponent