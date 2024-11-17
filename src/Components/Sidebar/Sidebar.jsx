import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import { mainu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import CreatePost from "../Post/CreatePost";
import { useDisclosure } from "@chakra-ui/react";
import SearchComponent from "../SearchComponent/SearchComponent";
function Sidebar() {
  const [activeTab, setActiveTab] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    }
    if (title == "Search") {
      setIsSearchVisible(true);
    } else setIsSearchVisible(false);
  };
  return (
    <div className="sticky top-0 h-[100vh] p-0 m-0 flex">
      <div className={`flex flex-col justify-between h-full  ${activeTab==="Search"? "px-2":"px-6"} `}>
        {
          <div>
            {activeTab !== "Search" && (
              <div className="pt-10">
                <img
                  className="w-40"
                  src={logo}
                  alt=""
                  style={{ width: "100%", maxWidth: "300px" }}
                />
              </div>
            )}

            <div className="mt-10">
              {mainu.map((item) => (
                <div
                  onClick={() => handleTabClick(item.title)}
                  className="flex items-center mb-5 cursor-pointer text-lg "
                >
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  {activeTab !== "Search" && (
                    <p className="ml-6">
                      <p
                        className={`${
                          activeTab === item.title
                            ? "font-bold"
                            : "font-semibold"
                        }`}
                      >
                        {item.title}
                      </p>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        }
        <div className="flex items-center cursor-pointer  text-2xl pb-10">
          <IoReorderThreeSharp />
          {activeTab !== "Search" && <p className="ml-5 ">More</p>}
        </div>
      </div>
      <CreatePost onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponent />}
    </div>
  );
}

export default Sidebar;
