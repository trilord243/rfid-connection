"use client";

const estado = () => {
  return (
    <>
      <div className="flex justify-center content-center w-full mt-9 ">
        <form className="flex flex-col  ">
          <span className="text-2xl font-bold text-center">idHex</span>
          <input
            type="text"
            placeholder="URUUU"
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <span className="text-2xl font-bold text-center">
            Nombre de la ropa{" "}
          </span>

          <input
            type="text"
            placeholder=" hre"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </form>
      </div>
    </>
  );
};

export default estado;
