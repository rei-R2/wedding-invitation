import image from "/img/our-story.jpeg";

export default function OurStory() {
  return (
    <>
      <div className="flex min-h-screen w-full items-center gap-x-20 pb-10 pe-10 ps-32 pt-32">
        <div className="w-1/2 pe-20">
          <h3 className="mb-5 font-allison text-8xl text-gold">our story</h3>
          <h1 className="mb-16 text-7xl">
            NICOLE &<br />
            LIONELL
          </h1>
          <p className="font-playfair text-lg leading-8 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            consequatur. Velit, expedita vel. Voluptatibus, perferendis,
            recusandae cum nam sapiente tempore sed unde eum doloremque aliquid,
            facilis placeat earum doloribus magnam fugiat temporibus cumque
            quidem saepe quasi impedit non dignissimos minus! Id hic amet eos
            veritatis vero, quis soluta porro perspiciatis nisi quidem ullam,
            molestias repellendus adipisci officia earum tempora maiores a
            itaque quasi? Quod quos eligendi debitis quia in enim repellendus
            ea?
          </p>
        </div>

        <div className="relative h-full w-1/2 ps-10">
          <div
            className="aspect-square h-full w-full bg-contain bg-fixed bg-right-top bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute left-2 top-8 -z-10 h-full w-1/2 border-b-4 border-l-4 border-gold" />
        </div>
      </div>
    </>
  );
}
