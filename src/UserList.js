import React from "react";

const UserList = ({ user }) => {
  return (
    <div className="userList">
       
      {user.map((el) => (
          <div>
              <ul>
                  <li>ID:{el.id}</li>
                  <li>Name:{el.name}</li>
                  <li>Email: {el.email}</li>
                  <li>Phone: {el.phone}</li>
              </ul>
          </div>
        
      ))}
                
    </div>
  );
};
export default UserList;