import { useParams } from "react-router-dom";
import "./style/styleInfoOrder.css";
import { useEffect, useState } from "react";
import { listorder } from "../linkPage/linkPage";

export function InfoOrder() {
  const pr = useParams();
  const [dt, setDt] = useState(null);
  useEffect(() => {
    fetch(listorder)
      .then((x) => x.json())
      .then((y) => {
        const z = y.filter((x) => x._id == pr.id)[0];
        setDt(z);
      })
      .catch((er) => console.log(er));
  }, []);
  return (
    <div className="info_order">
      <div>
        <h1>INFORMATION ORDER</h1>
        <h3>ID User: {dt && dt.user._id}</h3>
        <h3>Full Name: {dt && dt.user.fullname}</h3>
        <h3>Phone: {dt && dt.user.phone}</h3>
        <h3>Address: {dt && dt.address}</h3>
        <h3>Total: {dt && dt.total}</h3>
      </div>
      <div>
        <table>
          <tr>
            <th>ID PRODUCT</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COUNT</th>
          </tr>
          {dt &&
            dt.products.map((x) => (
              <tr>
                <td>{x._id}</td>
                <td>
                  <img src={x.image} />
                </td>
                <td>{x.name}</td>
                <td>{x.price}</td>
                <td>{x.quantity}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
