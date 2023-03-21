import { useEffect, useState } from "react";
export default function Colorcard(props) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((userData, index) => (
          <div
            className="ColorCard">
            <img className="child1" alt="example" src={userData.imgurl} />
          </div>
        ))}
    </>
  );
}
