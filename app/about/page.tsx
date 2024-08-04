import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="text-lg items-center">
      <div className="mb-10">
        <h1 className="text-4xl mb-3 text-accent-400 font-medium tabletPortrait:text-[2rem]">
          Welcome to Classify🎉
        </h1>

        <div className="space-y-8 tabletPortrait:text-[1rem]">
          <p>
            Classify is an innovative image recognition software designed to
            streamline and enhance your inventory management process. Our
            powerful platform leverages cutting-edge technology to recognize and
            categorize images efficiently, making inventory management simpler
            and more accurate than ever before.
          </p>
        </div>
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl text-accent-400 font-medium tabletPortrait:text-[2rem]">
          What We Do
        </h1>
        <div className="tabletPortrait:text-[1rem]">
          At Classify, we transform how you handle visual data. Using advanced
          image recognition capabilities powered by the OpenAI Vision API, our
          software provides a seamless way to identify, classify, and manage
          images within your inventory. Whether you’re dealing with products,
          assets, or any other type of visual data, Classify makes it easy to
          integrate these images into your inventory system.
        </div>

        <div className="space-y-8">
          <div>
            <Link
              href="/inventory"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Try it Out!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
