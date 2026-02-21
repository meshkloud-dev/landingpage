import { type Image as ImageType } from "@/types";
import Badge from "../Badge";
import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SolutionItem = {
  title: string;
  description: string;
  img: ImageType;
};

const solutionPbClasses = ["pb-3", "pb-1", "pb-2", "pb-3", "pb-3.5", "pb-2"];

const solutionItems: SolutionItem[] = [
  {
    title: "One Secure Workspace",
    description:
      "One login. Role-based access. Clear visibility without chaos.",
    img: {
      src: "/images/solutions/solution_1.png",
      alt: "One Secure Workspace",
    },
  },
  {
    title: "One Source of Truth",
    description:
      "All decisions, documents, and tasks stay connected in one place.",
    img: {
      src: "/images/solutions/solution_2.png",
      alt: "One Source of Truth",
    },
  },
  {
    title: "Predictive Project Intelligence",
    description: "Risks surface early, before delays and issues compound.",
    img: {
      src: "/images/solutions/solution_3.png",
      alt: "Predictive Project Intelligence",
    },
  },
  {
    title: "Real-Time Coordination",
    description:
      "Changes update dependencies, timelines, and teams automatically.",
    img: {
      src: "/images/solutions/solution_4.png",
      alt: "Real-Time Coordination",
    },
  },
  {
    title: "Design Intent, Protected",
    description:
      "Decisions remain visible and traceable, tied directly to drawings and scope.",
    img: {
      src: "/images/solutions/solution_5.png",
      alt: "Design Intent, Protected",
    },
  },
  {
    title: "Always Up-to-Date",
    description: "Every file stays current, version-controlled, and reliable.",
    img: {
      src: "/images/solutions/solution_6.png",
      alt: "Always Up-to-Date",
    },
  },
];

const Solution = () => {
  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <div>
          <Badge variant="zap-blue">Solution</Badge>
          <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
            One platform. Every phase. <br />
            Every discipline.
          </h2>
          <p className="mt-4 max-w-lg text-left text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:mt-6 lg:text-[1.063rem] lg:leading-[1.47em]">
            From proposal → design → construction → closeout. Everything
            connected. Always current. No handoffs lost.
          </p>
          <Button
            variant="dark"
            href="#waitlist"
            className="mt-4 rounded-sm py-2 lg:mt-6 lg:py-2.5!"
            isArrow
          >
            Join Waitlist
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-3 lg:items-start">
          {[0, 1, 2].map((colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {[solutionItems[colIndex], solutionItems[colIndex + 3]].map(
                (item, rowIndex) => {
                  const index = colIndex + rowIndex * 3;
                  return (
                    <div
                      key={item.title}
                      className="bg-gray-light flex flex-col overflow-hidden rounded-lg"
                    >
                      <div
                        className={cn("p-6 pr-12", solutionPbClasses[index])}
                      >
                        <h3 className="text-lg font-medium tracking-[-0.01em] lg:text-[1.375rem] lg:leading-[1.14em]">
                          {item.title}
                        </h3>
                        <p className="text-black-64 mt-1 text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:text-[0.938rem] lg:leading-[1.33em]">
                          {item.description}
                        </p>
                      </div>
                      <Image
                        src={item.img.src}
                        alt={item.img.alt}
                        width={336}
                        height={283}
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                  );
                }
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solution;
