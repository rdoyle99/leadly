import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
export default function Form() {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (payload) => {
    setStep(1);
    const data = await fetch("/api/surveySubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const name = await data.json();
    if (data.status == 200) {
      toast.success(
        `Thanks, look out for an email from ryan@magicsalesbot.com!`
      );
      setStep(2);
    } else {
      toast.error("Something went wrong. Please try again.");
      setStep(0);
    }
  };

  return (
    <div className="mx-8 sm:rounded-lg">
      <div className="py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          Custom Lead Lists
        </h3>
        <div className="mt-2 mb-1 text-sm text-white">
          <p>Leave your info to see what we can generate for your business</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="i">
            <input
              type="text"
              name="name"
              id="name"
              className="w-1/4 mr-2 h-8 pl-2 shadow-sm focus:ring-blue-600 focus:border-blue-600  sm:text-sm border-gray-300 bg-white rounded-md"
              placeholder="Your website"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              name="email"
              id="email"
              className="w-1/4 mr-2 h-8 ml-2 pl-2 shadow-sm focus:ring-blue-600 focus:border-blue-600  sm:text-sm border-gray-300 bg-white rounded-md"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <button
              disabled={step === 2 ? true : false}
              className="w-1/4  disabled:opacity-25  items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-whiteish bg-green-500 hover:bg-green-300 ml-8"
              type="submit"
            >
              {step === 0 && "Submit"}

              {step === 1 && (
                <svg
                  class="animate-spin h-5 w-5 mr-3 mttext-white bg-blue-200"
                  viewBox="0 0 24 24"
                >
                  Loading
                </svg>
              )}
              {step === 2 && "Already Submitted"}
            </button>
          </div>

          {errors.name && (
            <span className="text-red-400 mr-2">A company is required</span>
          )}
          {errors.email && (
            <span className="text-red-400 mr-2">An email is required</span>
          )}
        </form>
      </div>
    </div>
  );
}
