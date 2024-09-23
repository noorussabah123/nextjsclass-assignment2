import Image from "next/image";


export default function Home() {
  return (
    <div className="flex justify-between items-center h-screen bg-gray-300">
    <div className="w-fit [h-250px] m-10 text-[50px] text-black font-serif">
        Hey,
        <br />
        My name is <span className="font-bold text-blue-500">Noor-us-Sabah</span>
        <br />
        I'm a Next.js Developer
    </div>
    <img className="mr-20 mb-10" src="/image/pic.png" alt="mypic" />
</div>
  );
}
