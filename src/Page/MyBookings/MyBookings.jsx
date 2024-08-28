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

  const handleDelete = (id) => {
    // console.log(id);
    const proceed = confirm("Are you sure?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/bookings/${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            alert("Booking has deleted successfully!!!");
            const remaining = myBookings.filter(
              (booking) => booking._id !== id
            );
            setMyBookings(remaining);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleConfirm = (id) => {
    const proceed = confirm("Are you sure you want to confirm this booking ?");
    if (proceed) {
      axios
        .patch(`http://localhost:5000/bookings/${id}`, { status: "confirm" })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            const remaining = myBookings.filter(
              (booking) => booking._id !== id
            );
            const updated = myBookings.find((booking) => booking._id === id);
            // in updated logic i found exact that id which i update . so updated is an object and it contain status like updated.status
            updated.status = "confirm";
            const newBookings = [updated, ...remaining];
            setMyBookings(newBookings);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
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
              <th>Delete</th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
