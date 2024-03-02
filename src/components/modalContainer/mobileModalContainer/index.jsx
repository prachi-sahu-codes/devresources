import React, { useState } from "react";
import AreaDropDown from "../pagesDropDown/AreaDropDown";
import AudienceDropDown from "../pagesDropDown/AudienceDropDown";
import { findCategoryData } from "@/data/modalContainerData";
import ConfAreaDropdown from "@/components/conferenceComponents/ConferenceFilter/desktopConfFilter/components/ConfAreaDropdown";

const MobileModalContainer = ({
  title,
  categoryData,
  page,
  pageState,
  handleDropDown,
  stateObj,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const categorySelected = findCategoryData.find(({ name }) => name === title);

  let menuTitle = title.toLowerCase();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDropDownData =
    searchTerm.length > 0
      ? categoryData?.data.filter((obj) =>
          obj?.node?.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : categoryData?.data;

  const handleModal = () => {
    handleDropDown();
  };

  return (
    <div>
      <div className="flex items-center gap-2 border border-neutrals-200 rounded-[4px] self-stretch mb-[4px] overflow-hidden">
        <input
          type="text"
          className="text-[13px] w-full p-[8px] px-[12px]"
          placeholder={`Search or select a ${title.toLowerCase()}`}
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="self-stretch">
        <ul className="flex flex-col border border-neutrals-200 rounded-[4px] max-h-[248px] overflow-auto">
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
                    handleDropDown={handleModal}
                    pageState={pageState}
                    page={page}
                  />
                ) : page === "podcasts" ? (
                  <AudienceDropDown
                    obj={obj.node}
                    categorySelected={categorySelected}
                    handleDropDown={handleModal}
                    pageState={pageState}
                    page={page}
                  />
                ) : page === "newsletters" ? (
                  <AudienceDropDown
                    obj={obj.node}
                    categorySelected={categorySelected}
                    handleDropDown={handleModal}
                    pageState={pageState}
                    page={page}
                  />
                ) : page === "blogs" ? (
                  <AudienceDropDown
                    obj={obj.node}
                    categorySelected={categorySelected}
                    handleDropDown={handleModal}
                    pageState={pageState}
                    page={page}
                  />
                ) : (
                  <AudienceDropDown
                    obj={obj.node}
                    categorySelected={categorySelected}
                    handleDropDown={handleModal}
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
      </div>
    </div>
  );
};

export default MobileModalContainer;
