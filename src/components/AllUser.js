import { useState, useEffect } from "react";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://appsvc-tg-prd-amagpt-backend.azurewebsites.net/allusers")
      // fetch("https://backendtestdeploy.azurewebsites.net/allusers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        // <img key={user.id} src={user.name} alt={photo.title} width={100} />
        <p key={user.id}>
          User Name: {user.name} Used Token: {user.total_token_usage}
        </p>
      ))}
    </div>
  );
};
export default AllUsers;
