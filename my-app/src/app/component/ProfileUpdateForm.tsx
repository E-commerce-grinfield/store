import React from "react";

function ProfileUpdateForm() {
  return (
    <div className="w-[870px] h-[630px] relative bg-white rounded shadow">
      <label className="left-[80px] top-[40px] absolute text-red-500 text-xl font-medium font-['Poppins'] leading-7">
        Edit Your Profile
      </label>
      <div className="left-[80px] top-[84px] absolute justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            First Name
          </label>
          <div className="w-80 h-12 relative">
            <input
              className="w-80 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
              placeholder="Md"
            />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Last Name
          </label>

          <input
            className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            placeholder="Rimel"
          />
        </div>
      </div>
      <div className="left-[80px] top-[190px] absolute justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Email
          </label>

          <input
            className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            placeholder="rimel1111@gmail.com"
          />
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal">
            Address
          </label>

          <input
            className="w-80 h-12 left-0 top-0 relative bg-neutral-100 rounded"
            placeholder="Kingston, 5236, United State"
          />
        </div>
      </div>
      <div className="left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <label className="text-black text-base font-normal font-['Poppins'] leading-normal top-4">
            Password Changes
          </label>

          <input
            className="w-96 h-12 left-0 top-5 relative bg-neutral-100 roundedopacity-50 text-black text-base font-normal font-['Poppins'] leading-normal"
            placeholder="Current Passwod"
          />
        </div>

        <input
          className="w-96 h-12 left-0 top-5 relative bg-neutral-100 rounded"
          placeholder="New Passwod"
        />

        <input
          className="w-96 h-12 left-0 top-0 absolute bg-neutral-100 rounded"
          placeholder="Confirm New Passwod"
        />
      </div>
      <div className="left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
        <a
          className="text-black text-base font-normal font-['Poppins'] leading-normal"
          href="#"
        >
          Cancel
        </a>
        <button className="px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
