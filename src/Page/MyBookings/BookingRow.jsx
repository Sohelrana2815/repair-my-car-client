const BookingRow = ({ booking }) => {
  const { customerName, email, price, img, title, date } = booking;

  return (
    <>
      <tr className="hover">
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
