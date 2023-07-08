import React, { useState } from "react";

const AddAdmin = ({ AllAdmins }) => {
  const [admins, setAdmins] = useState(AllAdmins.user);
  console.log(AllAdmins)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [adminDetails, setAdminDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      method: "POST",
      body: JSON.stringify(adminDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        if (json.success) {
          setAdmins([
            ...admins,
            {
              firstname: adminDetails.firstname,
              lastname: adminDetails.lastname,
              email: adminDetails.email,
            },
          ]);
          setAdminDetails({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          });
          setMessage("Admin added successfully");
        } else {
          setMessage(json.message);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <div className="mx-auto min-h-[calc(100vh-105px)]">
      <div className="xl:flex justify-between">
        <div className="text-white xl:w-2/5 mb-10 xl:mb-0">
          <h1 className="text-white text-xl md:text-2xl text-center mb-8">
            All Admins
          </h1>

          <div className="">
            <table className="w-full text-sm text-left  ">
              <thead className="text-xs uppercase border  border-dark-grey">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {admins &&
                  admins.map((item) => (
                    <tr className="border border-dark-grey">
                      <th
                        scope="row"
                        className="px-4 py-4 whitespace-nowrap"
                      >
                        {item.firstname} {item.lastname}
                      </th>
                      <td className="px-4 py-4">{item.email}</td>
                      {/* <td className="px-4 py-4" onClick={()=>{
                            // setLoading(true);
                            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/delete/${item._id}`, {
                              method: "DELETE",
                            })
                              .then((response) => response.json())
                              .then((json) => {
                                console.log(json);
                                // setLoading(false);
                                if (json.messgae !== "Error") {
                                  // setBlogs(blogs.filter((item) => item._id !== id));
                                  setMessage("User Deleted Successfully");
                                } else {
                                  setMessage("Something went wrong, Please try again.");
                                }
                              })
                              .catch(() => {
                                setLoading(false);
                              });
                      }}>DELETE</td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="xl:w-1/2">
          <h1 className="text-white text-xl md:text-2xl text-center mb-8">
            Add Admin
          </h1>
          <p className="text-white text-center text-base mb-4">{message}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="">
              <input
                value={adminDetails.firstname}
                onChange={(e) => {
                  setAdminDetails({
                    ...adminDetails,
                    firstname: e.target.value,
                  });
                }}
                className="w-full text-base md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                value={adminDetails.lastname}
                onChange={(e) => {
                  setAdminDetails({
                    ...adminDetails,
                    lastname: e.target.value,
                  });
                }}
                className="w-full text-base mt-4 md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                value={adminDetails.email}
                onChange={(e) => {
                  setAdminDetails({ ...adminDetails, email: e.target.value });
                }}
                className="w-full text-base mt-4 md:text-lg mb-2 md:mb-0 md:mr-8 text-white bg-transparent border border-dark-grey rounded-lg p-3"
                type="email"
                placeholder="Email"
                required
              />
              <input
                value={adminDetails.password}
                onChange={(e) => {
                  setAdminDetails({
                    ...adminDetails,
                    password: e.target.value,
                  });
                }}
                className="text-base mt-4 md:text-lg w-full mb-2 md:mb-0 text-white bg-transparent border border-dark-grey rounded-lg p-3"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="text-gold mt-4 text-base md:text-lg border-2 border-white rounded-3xl py-2 px-16"
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
