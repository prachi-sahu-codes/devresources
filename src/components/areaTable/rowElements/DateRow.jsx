import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { parseDate } from "@/utils/utils";

const DateRow = ({ node }) => {
  const startDateFormated = parseDate(node?.startDate);
  const endDateFormated = node?.endDate && parseDate(node?.endDate);
  return (
    <div className="tableRowConf w-[155px] flex sm:gap-4 justify-center items-center sm:shrink-0 px-2 xs-450:px-4 sm:px-6 py-[16px] text-neutrals-400">
      <div className="flex flex-col items-center justify-center">
        <span className="uppercase font-[700] -mb-[6px] text-[9px] xs-450:text-[11px] sm:text-[13px]">
          {startDateFormated.mon}
        </span>
        <span className="text-lg xs-450:text-xl sm:text-2xl font-[700] -mb-[2px]">
          {startDateFormated.date}
        </span>
        <span className="tableRowConfYear text-neutrals-300 text-[9px] xs-450:text-[11px] sm:text-[13px]">
          {startDateFormated.year}
        </span>
      </div>
      {node?.endDate && (
        <span className="m-1 sm:m-0 text-[8px] xs-450:text-[10px] sm:text-[16px] text-neutrals-300">
          <FaChevronRight />
        </span>
      )}
      {node?.endDate && (
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase font-[700] -mb-[6px] text-[9px] xs-450:text-[11px] sm:text-[13px]">
            {endDateFormated.mon}
          </span>
          <span className="text-lg xs-450:text-xl sm:text-2xl font-[700] -mb-[2px]">
            {endDateFormated.date}
          </span>
          <span className="tableRowConfYear text-neutrals-300 text-[9px] xs-450:text-[11px] sm:text-[13px]">
            {endDateFormated.year}
          </span>
        </div>
      )}
    </div>
  );
};

export default DateRow;
