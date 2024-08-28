import { FaTrash } from "react-icons/fa";

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { customerName, email, price, img, title, date, _id, status } = booking;

  return (
    <>
      <tr className="hover">
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 text-white"
          >
            <FaTrash />
          </button>
        </td>
        <td>
          <div className="avatar">
            <div className="w-24">
              <img src={img} alt={title} className="rounded-lg" />
            </div>
          </div>
        </td>

        <td>{title}</td>
        <td>${price}</td>
        <td>{customerName}</td>
        <td>{email}</td>
        <td>{date}</td>
        <th>
          {status === "confirm" ? (
            <span className="font-bold text-purple-600">Confirmed</span>
          ) : (
            <button
              onClick={() => handleConfirm(_id)}
              className="btn btn-ghost btn-xs"
            >
              Please confirm
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
