import Image from "next/image";
import Badge from "../Badge";
import Container from "../Container";
import DiamondDots from "../icons/DiamondDots";

type MeshAIItem = {
  id: number;
  title: string;
};

const meshAIItems: MeshAIItem[] = [
  {
    id: 1,
    title:
      "Mesh AI predicts delays before they happen, keeping your projects on track ...",
  },
  {
    id: 2,
    title:
      "Writes proposals and drafts content that actually gets approved ...",
  },
  {
    id: 3,
    title:
      "Summarizes reports and extracts only the insights you need to act fast ...",
  },
  {
    id: 4,
    title:
      "Organizes drawings, docs, and plans so your team always knows what’s next ...",
  },
];

const MeshAI = () => {
  return (
    <section className="bg-blue relative mt-18 pt-18 pb-35.5 text-white lg:mt-30 lg:pt-30 lg:pb-67">
      <Image
        src="/images/noise.png"
        alt="Noise"
        fill
        priority
        quality={80}
        className="pointer-events-none absolute inset-0 z-1 object-cover opacity-40"
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <Badge variant="square-light">Mesh AI</Badge>
          <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
            Make It Magical{" "}
            <span className="inline-block">
              <span className="flex-center">
                (<DiamondDots />)
              </span>
            </span>{" "}
            Intelligence woven into every workflow.
          </h2>
          <p className="mt-4 max-w-lg text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:mt-6 lg:text-[1.063rem] lg:leading-[1.47em]">
            Quietly powerful. Always invisible. Always helping.
          </p>
        </div>
        <div className="mt-15.5 lg:mt-31">
          {meshAIItems.map((item) => (
            <button
              key={item.id}
              className="bg-white-96 flex w-full items-center gap-4 rounded-full px-10 py-[0.938rem] lg:gap-8 lg:py-5"
            >
              <DiamondDots className="text-blue size-5 lg:size-8" />
              <h3 className="text-[0.813rem] leading-[1em] tracking-[-0.01em] text-black lg:text-[1.375rem]">
                {item.title}
              </h3>
            </button>
          ))}
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full max-h-80 overflow-hidden lg:max-h-110.5">
        <Image
          src="/images/mesh_ai_bg.png"
          alt="Mesh AI background"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default MeshAI;
