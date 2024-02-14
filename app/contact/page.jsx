import Map from "../components/Map";

export default function Page() {
  return (
    <div className="bg-slate-100 items-center flex flex-col gap-5 py-10 w-full h-screen text-slate-700">
      <h1 className="text-4xl text-center ">Contact Us</h1>
      <form className="flex flex-col gap-3 mx-auto p-10 bg-slate-300 rounded-3xl">
        <p>Get in Touch</p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button
          type="submit"
          className=" rounded-md p-2 bg-slate-500 text-white  hover:bg-slate-600 transition-all duration-300"
        >
          Submit
        </button>
        <div>
          <p>Email: info@techsolutionshub.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </form>
      <div className="w-[60%] h-[400px]">
        <Map />
      </div>
    </div>
  );
}
