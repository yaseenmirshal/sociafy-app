"use client";

import { useContext, useEffect, useState } from "react";
import instance from "../instence/instence";
import { GlobalContext } from "./context/globalContext";

type NotificationProps = {
  isWhite: boolean;
};

export const Notification: React.FC<NotificationProps> = ({
  isWhite,
}: NotificationProps) => {
  // const {  users, setUsers } = useContext<any>(GlobalContext);
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState<{
    [key: string]: boolean;
  }>({});

  

  const getUser = async () => {
    try {
      const response = await instance.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(users, "users");
  }, [users]);

  const toggleFollow = async (id: string) => {
    try {
      const userid = localStorage.getItem("userid");
      const isFollowed = followedUsers[id] || false;

      const endpoint = isFollowed
        ? `/user/${id}/unfollow`: `/user/${id}/follow`;
      const response = await instance.put(endpoint, { _id: userid });
      console.log(response);
      setFollowedUsers((prevState) => ({
        ...prevState,
        [id]: !isFollowed,
      }));
    } catch (error) {
      console.error("Error toggling follow state:", error);
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "355px",
          backgroundColor: isWhite ? "#1A0033" : "white",
          color: isWhite ? "white" : "black",
          borderLeft: "1px solid #333",
        }}
        className="notification float-left"
      >
        

        <h1 className="text-xl font-bold ml-7 mt-8">Suggestions</h1>
        <div
          style={{
            backgroundColor: isWhite ? "#1A0033" : "white",
            color: isWhite ? "white" : "black",
          }}
          className="w-[345px] h-[690px] mt-5 mb-5 overflow-auto"
        >
          {users.map((user: any) => (
            <div key={user._id}>
              <div className="w-[345px] h-14 mt-5">
                <div
                  className="float-left ml-4 mr-2"
                  style={{
                    marginTop: "0px",
                    height: "50px",
                    width: "50px",
                    backgroundImage:
                      "url('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "100px 100px 100px 100px",
                  }}
                ></div>
                <div className="float-left w-2">
                  <h3 className="ml-2 text-[15px]">
                    <b>{user.username}</b>
                  </h3>
                </div>
                <button
                  className={`ml-36 mt-3 px-5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    followedUsers[user._id]
                      ? "bg-red-500 hover:bg-red-600 focus:ring-red-300"
                      : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
                  }`}
                  onClick={() => toggleFollow(user._id)}
                >
                  {followedUsers[user._id] ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;
