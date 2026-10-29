import { useParams } from "react-router-dom";
import properties from "../data/properties";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function PropertyDetails(){

const {id}=useParams();

const property=properties.find(
(item)=>item.id===Number(id)
);

if(!property){
return <h2>Property Not Found</h2>;
}

return(
<>

<Navbar/>

<section className="details-page">

<div className="gallery-placeholder">
Property Gallery Image
</div>

<div className="details-content">

<h1>{property.title}</h1>

<h2>₹ {(property.price/100000).toFixed(0)} Lakhs</h2>

<p>{property.location}</p>

<p>{property.area}</p>

<p>{property.description}</p>

<h3>Property Features</h3>

<ul>

<li>Clear Title & 7/12 Available</li>

<li>Road Touch Connectivity</li>

<li>Legal Documentation Support</li>

<li>Investment Growth Zone</li>

</ul>

<button>Book Site Visit</button>

</div>

</section>

<Footer/>

</>
)
}

export default PropertyDetails;