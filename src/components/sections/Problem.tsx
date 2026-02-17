import Image from "next/image";
import Badge from "../Badge";
import Container from "../Container";
import { type Image as ImageType } from "@/types";

type ProblemItem = {
  id: string;
  title: string;
  description: string;
  img: ImageType;
};

const problemItems: ProblemItem[] = [
  {
    id: "too-many-tools",
    title: "Too Many Tools. No Ownership.",
    description:
      "Work is scattered across apps, with no clear source of truth or accountability.",
    img: {
      src: "/images/problem/problem_1.svg",
      alt: "Problem",
    },
  },
  {
    id: "decisions-get-lost",
    title: "Decisions Get Lost",
    description:
      "RFIs, clarifications, and changes disappear, weakening design intent over time.",
    img: {
      src: "/images/problem/problem_2.svg",
      alt: "Problem",
    },
  },
  {
    id: "schedules-slip",
    title: "Schedules Slip",
    description:
      "Small, unseen delays compound until timelines break all at once.",
    img: {
      src: "/images/problem/problem_3.svg",
      alt: "Problem",
    },
  },
  {
    id: "busy-but-misaligned",
    title: "Busy, But Misaligned",
    description:
      "Teams stay active, but manual coordination replaces real progress.",
    img: {
      src: "/images/problem/problem_4.svg",
      alt: "Problem",
    },
  },
];

const Problem = () => {
  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <Badge variant="square-red">Problem</Badge>
        <h2 className="font-space-grotesk mt-4 max-w-2xl text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
          Every project is slowed down by <br /> one thing → fragmentation.
        </h2>
        <div className="relative">
          {/* Витягуємо за межі контейнера (1260px замість ~1040px), центруємо */}
          <div className="absolute -top-15 left-1/2 z-0 h-full w-315 -translate-x-1/2">
            <Image
              src="/images/problem/problem_gray_dots.png"
              alt="Problem background"
              className="h-full w-full object-contain object-center"
              quality={80}
              fill
              sizes="1260px"
            />
            <Image
              src="/images/problem/problem_red_dots.png"
              alt="Problem overlay"
              className="h-full w-full object-contain object-center"
              quality={80}
              fill
              sizes="1260px"
            />
          </div>
          <ul className="relative mt-14 grid grid-cols-4 gap-14.5">
            {problemItems.map((item) => (
              <li key={item.id}>
                <div className="relative max-w-53.5">
                  <div className="to-black-bg absolute bottom-0 left-0 h-32 w-px rounded-sm bg-linear-to-b from-transparent" />
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    width={214}
                    height={152}
                    quality={80}
                    className="h-auto w-full"
                  />
                </div>
                <div className="max-w-55 lg:mt-4">
                  <h3 className="text-lg leading-[1.2em] font-medium tracking-[-0.01em] capitalize lg:text-[1.375rem]">
                    {item.title}
                  </h3>
                  <p className="text-black-64 mt-2 text-[0.813rem] leading-[1.23em] max-lg:leading-[-0.01em] lg:mt-1 lg:text-[0.938rem] lg:leading-[1.47em]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Problem;
