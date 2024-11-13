import "./style/styleHistory.css";
import { listorder } from "../linkPage/linkPage";
import { useEffect, useState } from "react";
import { IconRight } from "../icon/icon";
import { Link } from "react-router-dom";
import { useStore } from "../useHook/useStore";

export function History() {
  const [list, setList] = useState(null);
  const { selectState } = useStore((x) => x.loged);
  useEffect(() => {
    fetch(listorder)
      .then((x) => x.json())
      .then((y) => {
        // setList(y);
        const tt = [...y].filter((a) => a.user._id == selectState._id);
        setList(tt);
      })
      .catch((er) => console.log(er));
  }, []);
  return (
    <>
      <div className="banner2">
        <span style={{ fontSize: "25px", fontWeight: "500" }}>HISTORY</span>
        <span style={{ color: "#666" }}>HISTORY</span>
      </div>
      <div className="body">
        <div className="history">
          <table>
            <tr>
              <th>ID ORDER</th>
              <th>ID USER</th>
              <th>NAME</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
              <th>TOTAL</th>
              <th>DELIVERY</th>
              <th>STATUS</th>
              <th>DETAIL</th>
            </tr>
            {list &&
              list.map((x) => (
                <tr>
                  <td>{x._id}</td>
                  <td>{x.user._id}</td>
                  <td>{x.user.fullname}</td>
                  <td>{x.user.phone}</td>
                  <td>{x.address}</td>
                  <td>{x.total}</td>
                  <td>Waiting for progressing</td>
                  <td>waiting for pay</td>
                  <td>
                    <Link to={"/clientapp/infoorder/" + x._id}>
                      View <IconRight />
                    </Link>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
}
