import Navigation from "../components/Navigation";
import { useUser } from "../contexte/UserContext";

import React, { useEffect, useState } from "react";

const Account = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const { user } = useUser();

  const [infos, setInfos] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(infos);

    try {
      const response = await fetch(`${apiKey}/users/${user?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...infos,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      console.log("user updated successfully: ");
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };
  useEffect(() => {
    if (user)
      setInfos({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
      });
  }, [user?.id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setInfos((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  return (
    <>
      <Navigation />
      <div className="account-page-container">
        <nav>
          <span>Information</span>
          <span>Orders</span>
        </nav>
        <div>
          <h3>hello {user?.firstname}</h3>
          <div>
            <h3>my information</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Firstname
                <input
                  type="text"
                  onChange={handleChange}
                  value={infos?.firstname}
                  name="firstname"
                />
              </label>
              <label>
                Lastname
                <input
                  type="text"
                  onChange={handleChange}
                  value={infos?.lastname}
                  name="lastname"
                />
              </label>
              <label>
                Email
                <input
                  type="text"
                  onChange={handleChange}
                  value={infos?.email}
                  name="email"
                />
              </label>
              <label>
                Address
                <input
                  type="text"
                  onChange={handleChange}
                  value={infos?.address}
                  name="address"
                />
              </label>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
