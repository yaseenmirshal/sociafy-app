"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import "/common.css";
import Notification from "../Components/Notification";
import { GlobalContext } from "../Components/context/globalContext";
import instance from "../instence/instence";
import Settings from "../Components/Settings";

function Page() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/whitelogo.png", "/sociafy.png"];
  const { post } = useContext<any>(GlobalContext);

  const [isWhite, setIsWhite] = useState(true);
  const postCount = post.length
  const [followers, setFollowers] = useState<number | null>(null);
  const [following, setFollowing] = useState<number | null>(null);
  const [userid, setUserid] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("userid");
      setUserid(id);
    }
  }, []);

  useEffect(() => {
    if (userid) {
      const fetchUser = async () => {
        try {
          const response = await instance.get(`/user/${userid}`);
          const followersCount = response.data.followers.length;
          const followingsCount = response.data.following.length;
          console.log(followersCount, "followers");

          setFollowers(followersCount);
          setFollowing(followingsCount);
        } catch (error) {
          console.error("error");
        }
      };

      fetchUser();
    }
  }, [userid]);

  const toggleColor = () => {
    setIsWhite(!isWhite);
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#1A0033", width: "100%", height: "100vh" }}
      >
        <div
          className="float-left"
          style={{
            width: "310px",
            height: "100vh",
            backgroundColor: "#1A0033 ",
            paddingTop: "20px",
          }}
        >
          <img
            style={{ width: "150px", marginLeft: "20px" }}
            src="whitelogo.png"
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-6 h-6 text-white mt-10 ml-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <Link href={"./Home"}>
            <p
              style={{
                marginLeft: "90px",
                marginTop: "-25px",
                color: "whitesmoke",
              }}
            >
              Feed
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white mt-7 ml-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </Link>
          <p
            style={{
              marginLeft: "90px",
              marginTop: "-25px",
              color: "whitesmoke",
            }}
          >
            Saved
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white mt-7 ml-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <p
            style={{
              marginLeft: "90px",
              marginTop: "-25px",
              color: "whitesmoke",
            }}
          >
            Messages
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white mt-7 ml-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
            />
          </svg>
          <p
            style={{
              marginLeft: "90px",
              marginTop: "-25px",
              color: "whitesmoke",
            }}
          >
            Settings
          </p>
          <Settings/>
          <Link href={"./Profile"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-white mt-7 ml-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <p
              style={{
                marginLeft: "90px",
                marginTop: "-25px",
                color: "whitesmoke",
                fontWeight: "bold",
              }}
            >
              Profile
            </p>
          </Link>
          <div style={{ width: "245px", marginTop: "400px" }}>
            <Link href={"./Login"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white mt-52 ml-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              <p
                style={{
                  marginLeft: "90px",
                  marginTop: "-25px",
                  color: "whitesmoke",
                }}
              >
                Log out
              </p>
            </Link>
          </div>
        </div>

        <div
          className="float-left overflow-scroll hide-scrollbar"
          style={{
            width: "770px",
            height: "100vh",
            backgroundColor: "#1A0033",
          }}
        >
          <div
            className="float-left"
            style={{
              marginLeft: "65px",
              marginTop: "40px",
              backgroundImage:
                "url('https://cdn-icons-png.flaticon.com/512/149/149071.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "150px",
              width: "150px",
              borderRadius: "100px 100px 100px 100px ",
            }}
          ></div>
          {/* <Createpost/> */}
          <h1
            style={{ marginTop: "30px", marginLeft: "260px" }}
            className=" text-white text-xl font-medium mb-5"
          >
            {typeof window !== "undefined" ? localStorage.getItem("username") : ""}
          </h1>

          <p style={{ marginLeft: "45px" }} className="float-left text-white">
            <b>{postCount}</b> posts
          </p>
          <p className="float-left text-white ml-10 mr-10">
            <b>{followers}</b> followers
          </p>
          <p className="text-white ">
            <b>{following}</b> following
          </p>
          <br />
          <button className=" bg-gray-700 hover:bg-gray-900 text-white ml-10 text-sm  font-medium py-1 px-3 rounded-md shadow-md transition duration-300 ease-in-out">
            Edit Profile
          </button>
          <br />
          <div style={{ height: "518px" }} className="mt-20 w-1/1">
            <div
              style={{ borderTop: "1px solid #333" }}
              className="w-1/1 h-14  flex items-center "
            >
              <h1 className=" text-white ml-80 ">POSTS</h1>
            </div>
            {post.map((item: any, index: any) => (
              <div
                key={index}
                style={{
                  border: "2px solid black",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" float-left w-64 h-64 "
              ></div>
            ))}
          </div>
        </div>
        <Notification isWhite={isWhite} />
      </div>
    </>
  );
}

export default Page;
