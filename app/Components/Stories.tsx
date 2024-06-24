import React from "react";

type NotificationProps = {
  isWhite: boolean;
};

export const Stories: React.FC<NotificationProps> = ({
  isWhite,
}: NotificationProps) => {
  return (
    <div>
      <div>
        <h1 className="storiestext text-xl font-bold ml-7 mt-7">Stories</h1>
        <div
          className="addstorydiv float-left ml-7 flex justify-center border-2 border-slate-400 border-dashed cursor-pointer"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundColor: isWhite ? "black" : "#DEDEDE",
            borderRadius: "100px 100px 100px 100px ",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="plus float-left w-6 h-6  mt-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div
          className="storydiv border-2  border-indigo-600 float-left ml-7"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundImage:
              "url('https://static.javatpoint.com/biography/images/ronaldo6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px 100px 100px 100px ",
          }}
        ></div>
        <div
          className="storydiv border-2  border-indigo-600 float-left ml-7"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SVdSomJ6EdR1Le371cnnEYtS9PcpuDh93StRqmPVEg&s')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px 100px 100px 100px ",
          }}
        ></div>
        <div
          className="storydiv border-2  border-indigo-600 float-left ml-7"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundImage:
              "url('https://www.hairbond.com/wp-content/uploads/2020/02/tommy-shelby-hair.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px 100px 100px 100px ",
          }}
        ></div>
        <div
          className="storydiv border-2  border-indigo-600 float-left ml-7"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundImage: "url('Elon.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px 100px 100px 100px ",
          }}
        ></div>
        <div
          className="sotryhiden border-2  border-indigo-600 float-left ml-7"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundImage:
              "url('https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px 100px 100px 100px ",
          }}
        ></div>
        <div
          className="sotryhiden border-2  border-indigo-600 float-left ml-7"
          style={{
            marginTop: "30px",
            height: "70px",
            width: "70px",
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/026/284/879/non_2x/al-nassr-club-logo-symbol-saudi-arabia-football-abstract-design-illustration-with-blue-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "100px 100px 100px 100px ",
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: isWhite ? "#1A0033" : "white",
          color: isWhite ? "white" : "black",
        }}
        className="understorydiv w-1/1 h-4 mt-28"
      >
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left ml-8 ">
          Add Story
        </p>
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left  ml-10">
          cristiano
        </p>
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left   ml-14 ">
          dq salmaan
        </p>
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left   ml-9">
          t.shelby
        </p>
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left   ml-12">
          Elon musk
        </p>
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left  ml-12">
          Tony stark
        </p>
        <p style={{ fontSize: "12px" }} className="sotryhiden float-left   ml-10">
          alnassr
        </p>
      </div>
    </div>
  );
};

export default Stories;
