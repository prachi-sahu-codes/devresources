"use client";
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import Modal from "../modal";
import { findCategoryData } from "@/data/modalContainerData";
import AudienceDropDown from "./pagesDropDown/AudienceDropDown";
import { fetchPodcastByAllFilter } from "@/redux/features/podcast/action";
import { fetchNewsletterByAllFilter } from "@/redux/features/newsletter/action";
import { fetchBlogByAllFilter } from "@/redux/features/blog/action";
import { fetchYoutubeByAllFilter } from "@/redux/features/youtube/action";
import AreaDropDown from "./pagesDropDown/AreaDropDown";
import { fetchConferencesByAllFilter } from "@/redux/features/conference/action";
import { fetchHackathonsByAllFilter } from "@/redux/features/hackathon/action";
import ConfAreaDropdown from "../conferenceComponents/ConferenceFilter/desktopConfFilter/components/ConfAreaDropdown";

const ModalContainer = ({
  title,
  setShowModal,
  categoryData,
  page,
  pageState,
  stateObj,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const categorySelected = findCategoryData.find(({ name }) => name === title);

  let menuTitle = title.toLowerCase();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDropDown = () => {
    setShowDropDown(() => !showDropDown);
  };

  const handleSearch = (e) => {
    setShowDropDown(true);
    setSearchTerm(e.target.value);
  };

  const filteredDropDownData =
    searchTerm.length > 0
      ? categoryData?.data.filter((obj) =>
          obj?.node?.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : categoryData?.data;

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Modal onClose={closeModal}>
      <div className="absolute top-0 left-0 z-10 md:w-[300px] md:top-10 p-[24px] flex flex-col gap-[16px] self-stretch bg-white border border-indigos-op-300 modalShadow rounded-[4px]">
        <div className="w-full flex flex-col items-start gap-[8px] self-stretch">
          <p className="text-neutral-base text-[16px] font-[700] self-stretch">
            {title}
          </p>
          <div className="w-full">
            <div className="flex items-center gap-2 pr-[8px] border border-neutrals-200 rounded-[4px] self-stretch mb-[4px] overflow-hidden">
              <input
                type="text"
                className="text-[13px] w-full p-[8px] pl-[12px]"
                placeholder={`Search or select a ${title.toLowerCase()}`}
                value={searchTerm}
                onChange={(e) => handleSearch(e)}
              />
              <span onClick={handleDropDown} className="cursor-pointer">
                <IoChevronDownSharp className="text-neutrals-400" />
              </span>
            </div>
            <div className="self-stretch">
              {showDropDown && (
                <ul className="flex flex-col border border-neutrals-200 rounded-[4px] max-h-[207px] overflow-auto">
                  {filteredDropDownData?.length > 0 ? (
                    filteredDropDownData?.map((obj) => (
                      <li key={obj.node.id}>
                        {page === "conferences" ? (
                          <ConfAreaDropdown
                            obj={obj.node}
                            categorySelected={categorySelected}
                            menuTitle={menuTitle}
                            handleDropDown={handleModal}
                            stateObj={stateObj}
                          />
                        ) : page === "hackathons" ? (
                          <AreaDropDown
                            obj={obj.node}
                            categorySelected={categorySelected}
                            menuTitle={menuTitle}
                            handleDropDown={handleModal}
                            allFilterFunc={fetchHackathonsByAllFilter}
                            pageState={pageState}
                            page={page}
                          />
                        ) : page === "podcasts" ? (
                          <AudienceDropDown
                            obj={obj.node}
                            categorySelected={categorySelected}
                            menuTitle={menuTitle}
                            handleDropDown={handleModal}
                            allFilterFunc={fetchPodcastByAllFilter}
                            pageState={pageState}
                            page={page}
                          />
                        ) : page === "newsletters" ? (
                          <AudienceDropDown
                            obj={obj.node}
                            categorySelected={categorySelected}
                            menuTitle={menuTitle}
                            handleDropDown={handleModal}
                            allFilterFunc={fetchNewsletterByAllFilter}
                            pageState={pageState}
                            page={page}
                          />
                        ) : page === "blogs" ? (
                          <AudienceDropDown
                            obj={obj.node}
                            categorySelected={categorySelected}
                            menuTitle={menuTitle}
                            handleDropDown={handleModal}
                            allFilterFunc={fetchBlogByAllFilter}
                            pageState={pageState}
                            page={page}
                          />
                        ) : (
                          <AudienceDropDown
                            obj={obj.node}
                            categorySelected={categorySelected}
                            menuTitle={menuTitle}
                            handleDropDown={handleModal}
                            allFilterFunc={fetchYoutubeByAllFilter}
                            pageState={pageState}
                            page={page}
                          />
                        )}
                      </li>
                    ))
                  ) : (
                    <p className="text-[14px] font-[700] p-[10px] text-neutrals-500">
                      No {title.toLowerCase()} found.
                    </p>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContainer;
