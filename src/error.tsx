const Error = () => {
  return (
    <div className="flex flex-col w-full pt-10 items-center  min-h-screen bg-gray-100">
      {/* <h1 className="text-4xl font-bold text-black mb-4">
        Service Unavailable
      </h1> */}
      <p className="text-lg text-gray-700 text-center mb-2">
        There was an error connecting to the wallet. <br />
        (operation="internalError", code=UNSUPPORTED_OPERATION)
      </p>
      <p className="text-center text-gray-600 mb-4">
        Please contact the administrator or try again later.
      </p>
      <p className="text-sm text-gray-500 text-center italic">
        Our team is working to resolve this issue as soon as possible.
      </p>
    </div>
  );
};

export default Error;
