export default function Photos() {
  return (
    <div className="min-h-screen">
      <h3 className="mb-4 text-center font-allison text-8xl text-gold">our</h3>
      <h1 className="mb-4 text-center text-7xl">PHOTOS</h1>
      <p className="mb-6 text-center font-playfair text-xl italic">
        Our photo gallery
      </p>
      <span className="mx-auto block h-20 w-0.5 bg-slate-500" />
      <div className="mt-6 flex w-full flex-wrap items-start justify-center">
        <div className="w-1/3 pe-5 ps-14">
          <img
            src="/img/gallery/1.jpeg"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
          <img
            src="/img/gallery/2.webp"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
        </div>
        <div className="w-1/3 pb-5 pe-5 ps-5">
          <img
            src="/img/gallery/5.webp"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
          <img
            src="/img/gallery/4.webp"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
          <img
            src="/img/gallery/6.webp"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
        </div>
        <div className="w-1/3 pe-14 ps-5">
          <img
            src="/img/gallery/7.jpg"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
          <img
            src="/img/gallery/3.jpg"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
          <img
            src="/img/gallery/8.jpg"
            alt=""
            className="w-full rounded-sm object-scale-down pb-10 grayscale transition duration-700 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}
