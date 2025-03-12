import React from "react";
import { GenericFormConfigType } from "@/data/genericFormConfig";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { GenericFormValidationSchemaType } from "@/zod/genericFormValidators";

type AllowedFormConfigTypes = GenericFormConfigType; // add others type of form configs if needed
type AllowedFormValidationSchemaTypes = GenericFormValidationSchemaType; // add others type of validation schema if needed
interface ModalFormType<
  T extends AllowedFormConfigTypes,
  U extends AllowedFormValidationSchemaTypes
> {
  format: T;
  validationSchema: U;
  actionButtonDetails: {
    name: string;
    color: string;
    type: "submit" | "reset" | "button" | undefined;
    action: (data: any) => void;
  }[];
}
const ModalForm = <
  T extends AllowedFormConfigTypes,
  U extends AllowedFormValidationSchemaTypes
>({
  format,
  validationSchema,
  actionButtonDetails,
}: ModalFormType<T, U>) => {
  const FORMAT = format;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  return (
    <div className="flex w-screen h-screen bg-black opacity-80 z-50 justify-center items-center absolute top-0 left-0">
      <form
        id="container"
        onSubmit={handleSubmit(
          actionButtonDetails.filter(
            (btnDetails) => btnDetails.type === "submit"
          )[0].action
        )}
        className="w-2/4 min-w-[300px] h-3/4 bg-gray-400 rounded-md p-4 text-black overflow-auto flex flex-col"
      >
        <div
          id="title"
          className="font-bold text-xl md:text-2xl lg:text-4xl text-center"
        >
          {FORMAT.heading}
        </div>
        {FORMAT.sections?.map((sec) => (
          <div className="my-2 mb-4">
            <div
              id="subtitle"
              className="text-lg md:text-xl lg:text-2xl text-gray-800"
            >
              {sec.title}
            </div>
            <div className="input-section flex mt-2 gap-6  flex-wrap">
              {sec.inputs?.map((inp) =>
                inp.type === "radio" ? (
                  <div>
                    <div className="flex justify-center items-center gap-2 flex-wrap">
                      <div className="text-xl p-2">{inp.label}</div>

                      {inp.options?.map((optn) => (
                        <>
                          <input
                            type={inp.type}
                            // name={inp.name}
                            value={optn.value}
                            {...register(inp.name)}
                          />
                          {optn.label}
                        </>
                      ))}
                    </div>
                    <p className="text-red-500 text-sm">
                      {errors[inp.name]?.message}
                    </p>
                  </div>
                ) : inp.type === "checkbox" ? (
                  <div>
                    <div className="flex justify-center items-center gap-2">
                      <input type={inp?.type} {...register(inp.name)} />
                      <label>{inp?.label}</label>
                      <p className="text-red-500 text-sm">
                        {errors[inp.name]?.message}
                      </p>
                    </div>
                    <p className="text-red-500 text-sm">
                      {errors[inp.name]?.message}
                    </p>
                  </div>
                ) : inp.type === "select" ? (
                  <div>
                    <div className="flex justify-center items-center gap-2">
                      <select
                        className="border-2 p-2 rounded-lg"
                        {...register(inp.name)}
                      >
                        {inp.options?.map((opt, ind) => (
                          <option value={opt.value}>
                            {opt.label} key={ind}
                          </option>
                        ))}
                      </select>
                      <label>{inp?.label}</label>
                    </div>
                    <p className="text-red-500 text-sm">
                      {errors[inp.name]?.message}
                    </p>
                  </div>
                ) : (
                  <div>
                    <input
                      type={inp?.type}
                      placeholder={inp?.label}
                      {...register(inp.name)}
                      className="border-2 p-2 rounded-lg"
                    />
                    <p className="text-red-500 text-sm">
                      {errors[inp.name]?.message}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="mt-auto  flex flex-row bottom-0 m-2 justify-between  gap-6">
          {actionButtonDetails?.map((actBtn) => (
            <button
              className={` bg-${actBtn.color}-500 font-bold p-2 rounded-lg `}
              onClick={actBtn.type === "submit" ? undefined : actBtn.action}
              type={actBtn.type}
            >
              {actBtn.name}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
