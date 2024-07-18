import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full -z-40">
      <div className="mx-auto font-extrabold">
        <Image className="opacity-90 "
          src="/img/pulp.jpg"
          alt="home"
          width={500}
          height={500}
          layout="responsive"
        />
        <div className="absolute inset-0 top-32 lg:top-1/3 py-10 text-center font-[drug]">
          <h1 className="font-bold relative inline-block text-2xl lg:text-8xl outline-black">
            BARAYA <br></br> CREATIVE <br></br> COLLECTIVE
          </h1>

          <div className="absolute inset-0 py-10 mr-4">
            <h1 className="text-white font-bold relative inline-block lg:text-8xl text-2xl opacity-100">
              BARAYA <br></br> CREATIVE <br></br> COLLECTIVE <br></br>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
