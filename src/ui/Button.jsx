function Button({ text }) {
  return (
    <button className="capitalize text-center font-semibold w-full lg:w-[25%] border-solid border-2 hover:bg-black hover:text-white border-black transition-colors duration-300 text-black py-2 rounded-2xl mt-2 md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-8">
      {text}
    </button>
  );
}

export default Button;
