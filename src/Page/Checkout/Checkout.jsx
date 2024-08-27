import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, img } = service;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = user?.email;
    const customerInfo = {
      customerName: name,
      date,
      phone,
      email,
      price,
      img,
      title,
    };
    console.log(customerInfo);

    axios
      .post("http://localhost:5000/bookings", customerInfo)
      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          alert('Service added successfully!')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleBooking} className="card-body">
      <h2 className="text-center text-xl">Book : {title}</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter phone number"
            className="input input-bordered"
            required
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          name="date"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary text-base font-semibold">
          Book now
        </button>
      </div>
    </form>
  );
};

export default Checkout;
