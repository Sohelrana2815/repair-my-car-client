import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/services")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="text-center">
      <h2 className=" text-red-600 font-bold text-2xl">
        Service : {services.length}
      </h2>
      <h3>Our Service Area</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at quisquam
        eos harum repellat recusandae est nemo, magnam ipsa nostrum earum quia
        accusantium vitae sapiente deleniti consequuntur pariatur asperiores
        necessitatibus?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
