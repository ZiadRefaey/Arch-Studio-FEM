"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Arrow from "@/public/icons/icon-arrow.svg";
import Image from "next/image";
import { useForm, handleSubmit } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();
  emailjs.init({
    publicKey: "DFEmmfbHW9sQ6xH4X",
  });
  function onSubmit(data) {
    emailjs
      .send("service_oen3lee", "template_z4kgb6r", {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      })
      .then(
        (response) => {
          toast.success("SUCCESS!", response.status, response.text);
        },
        (error) => {
          toast("FAILED...", error.text);
        }
      );
  }

  return (
    <motion.form
      viewport={{ once: true }}
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 11 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-[22px] xl:w-[730px]"
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <input
          className={`px-8 py-5  w-full border-b-[1px] focus:border-b-[3px] text-[1.25rem] tracking-[-0.31px] font-bold outline-none placeholder:font-normal bg-inherit
          ${
            errors.name
              ? "border-b-error placeholder:text-error"
              : "placeholder:text-light-gray border-b-very-dark-blue"
          }
          `}
          placeholder="Name"
          id="from_name"
          name="from_name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && (
          <p
            className=" text-error text-body font-bold absolute  bottom-4 right-4"
            role="alert"
          >
            Cannot be empty
          </p>
        )}
      </div>

      <div className="relative">
        <input
          className={`px-8 py-5 w-full border-b-[1px] focus:border-b-[3px]  text-[1.25rem] tracking-[-0.31px] font-bold outline-none placeholder:font-normal 
            ${
              errors.email
                ? "border-b-error placeholder:text-error"
                : "placeholder:text-light-gray border-b-very-dark-blue"
            }
            `}
          placeholder="Email"
          id="from_email"
          name="from_email"
          type="email"
          {...register("email", {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            required: true,
          })}
        />
        {errors.email?.type === "required" && (
          <p
            className=" text-error text-body font-bold absolute bottom-4 right-4"
            role="alert"
          >
            Cannot be empty
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p
            className=" text-error text-body font-bold absolute bottom-4 right-4"
            role="alert"
          >
            Must be an Email
          </p>
        )}
      </div>

      <div className="relative">
        <textarea
          className={`px-8 py-5  w-full border-b-[1px] focus:border-b-[3px] text-[1.25rem] tracking-[-0.31px] font-bold outline-none h-[114px] placeholder:font-normal 
              ${
                errors.email
                  ? "border-b-error placeholder:text-error"
                  : "placeholder:text-light-gray border-b-very-dark-blue"
              }`}
          placeholder="Message here..."
          id="message"
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message?.type === "required" && (
          <p
            className=" text-error text-body font-bold absolute bottom-4 right-4"
            role="alert"
          >
            Cannot be empty
          </p>
        )}
      </div>
      <button
        type="submit"
        className="px-7 py-[31px] bg-very-dark-blue inline-block max-w-20 self-end mt-[-22px] hover:bg-dark-gray duration-300 transition-all"
      >
        <Image src={Arrow} alt="arrow icon" />
      </button>
      <Toaster />
    </motion.form>
  );
}
