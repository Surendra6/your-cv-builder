const PersonalDetails = () => {
  return (
    <div className="text-black">
      <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
      <div className="w-full grid gap-5 sm:grid-cols-1 md:grid-cols-2 ">
        <input
          type="text"
          placeholder="First Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="border p-2 rounded"
        />
        <input type="text" placeholder="City" className="border p-2 rounded" />
        <input
          type="text"
          placeholder="Country"
          className="border p-2 rounded"
        />
        <input
          type="url"
          placeholder="LinkedIn URL"
          className="border p-2 rounded"
        />
        <input
          type="url"
          placeholder="GitHub URL"
          className="border p-2 rounded"
        />
        <input
          type="file"
          placeholder="Profile Picture"
          className="border p-2 rounded col-span-2"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
