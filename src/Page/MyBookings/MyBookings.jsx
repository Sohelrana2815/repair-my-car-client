import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import BookingRow from "./BookingRow";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMyBookings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <div>
      <h2 className="text-center font-bold text-2xl">
        My Booking : {myBookings.length}
      </h2>

      {/* table */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
