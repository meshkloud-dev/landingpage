import Image from "next/image";
import Badge from "../Badge";
import Button from "../Button";
import Container from "../Container";

const whyNowItems = [
  {
    title: "Projects are more complex. Teams are more distributed.",
  },
  {
    title: "Decisions carry more risk than ever before.",
  },
  {
    title: "AEC workflows remain manual, fragmented, and disconnected.",
  },
];

const WhyNow = () => {
  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <Badge variant="zap-dark">Why now?</Badge>
        <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
          Why AEC can’t afford <br /> disconnected tools anymore
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {whyNowItems.map((item, idx) => (
            <li key={idx} className="relative flex items-start gap-4 lg:gap-8">
              <div className="to-black-bg h-14 w-px shrink-0 rounded-sm bg-linear-to-t from-transparent lg:h-44" />
              <h3 className="max-w-59 text-[0.938rem] leading-[1.2em] font-medium tracking-[-0.01em] lg:text-[1.375rem]">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
        <div className="relative flex w-full flex-col-reverse overflow-hidden rounded-lg bg-black text-white max-lg:mt-6 lg:grid lg:h-100 lg:grid-cols-[27rem_1fr] lg:items-end">
          <div className="relative z-10 flex h-full flex-col gap-4 p-4 pt-0 max-lg:mt-[1.438rem] lg:justify-between lg:p-8 lg:pr-0 lg:pb-7">
            <h3 className="text-[1.125rem] font-semibold tracking-[-0.01em] lg:text-[1.375rem]">
              MeshKloud exists because the way projects are delivered has
              changed, and the tools finally need to catch up.
            </h3>
            <div>
              <Button variant="light" isArrow>
                Secure Your Early Access
              </Button>
              <p className="text-white-56 mt-3 text-[0.813rem] leading-[1.23em] tracking-[-0.01em] max-lg:text-center lg:mt-4 lg:text-[0.938rem] lg:leading-[1.33em]">
                * Only 500 early members will be invited
              </p>
            </div>
          </div>
          <div className="relative aspect-358/280 lg:aspect-619/361">
            <Image
              src="/images/why-now/buildings_gray.png"
              alt="Buildings Gray"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              quality={80}
              className="absolute inset-0 z-2 object-cover"
            />
            <Image
              src="/images/why-now/buildings_blue.png"
              alt="Buildings Blue"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              quality={80}
              className="absolute inset-0 z-3 object-cover"
            />
          </div>
          <Image
            src="/images/why-now/noise.png"
            alt="Noise"
            fill
            sizes="100vw"
            quality={80}
            className="absolute inset-0 z-0 object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default WhyNow;
