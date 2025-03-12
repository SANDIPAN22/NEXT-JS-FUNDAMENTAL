"use client";

import ModalForm from "@/components/ModalForm";
import { useState } from "react";
import genericFormConfig from "../data/genericFormConfig";
import { genericFormValidationSchema } from "@/zod/genericFormValidators";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="m-4 ">
        <button
          className="ring-2 p-2 rounded-md hover:w-40 hover:h-20 hover:text-2xl  bg-red-500"
          onClick={(e) => setIsOpen(true)}
        >
          Open Form
        </button>
      </div>
      {isOpen && (
        <ModalForm
          format={genericFormConfig}
          validationSchema={genericFormValidationSchema}
          actionButtonDetails={[
            {
              name: "Close",
              color: "yellow",
              type: "button",
              action: () => {
                setIsOpen(false);
              },
            },
            {
              name: "Create",
              color: "green",
              type: "submit",
              action: (data: any) => {
                setIsOpen(false);
                console.log(data);
              },
            },
          ]}
        />
      )}
    </>
  );
};

export default Page;
