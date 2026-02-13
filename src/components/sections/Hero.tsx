import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import DoubleDownArrow from "../icons/DoubleDownArrow";
import Sparkle from "../icons/Sparkle";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative bg-black-bg pt-36 pb-5 lg:pt-44 lg:pb-10">
      {/* Background wrapper: 3 gradients + noise */}
      <div className="hero-features_bg" aria-hidden>
        <div className="noise-div" />
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="gradient-3" />
      </div>
      <Container className="flex flex-col">
        <div className="relative z-10 flex flex-1 flex-col items-start justify-start text-white">
          <h1 className="font-space-grotesk max-w-[700px] text-5xl leading-[1em] font-bold tracking-[-0.02em] lg:text-[5rem]">
            The All-in-One AEC
            <br />
            Platform, Finally.
            <br />
            MeshKloud.
          </h1>
          <p className="mt-8 text-base tracking-[-0.01em] lg:text-xl">
            Every tool. Every Team. Finally connected.
          </p>
          <div className="mt-6 flex flex-wrap items-start gap-3">
            <Button variant="light" isArrow>
              Join Early Access
            </Button>
            <Button variant="transparency">About Platform</Button>
          </div>
          <ScrollToLearnMore className="mt-9 flex lg:hidden" />
        </div>

        <div className="relative z-10 mt-64.5 flex w-full justify-center lg:justify-between">
          <ScrollToLearnMore className="hidden lg:flex" />
          <div className="flex items-center gap-3 text-white lg:gap-4">
            <div className="flex items-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative size-10 overflow-hidden rounded-full border-2 border-black",
                    index > 0 && "-ml-2.5"
                  )}
                >
                  <Image
                    className="h-full w-full object-cover"
                    src={`/images/users/user_${index + 1}.png`}
                    alt="User"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
              <div className="flex-center relative -ml-2.5 size-10 rounded-full bg-black">
                <Sparkle className="size-4" />
              </div>
            </div>
            <p className="max-w-[176px] text-[0.813rem] leading-[1.33em] tracking-[-0.01em] lg:text-[0.938rem] lg:leading-[1.33em]">
              Reserve your spot <br /> among the first 500 users
            </p>
          </div>
        </div>

        <Image
          src="/images/hero_bg.png"
          alt="Hero"
          fill
          className="absolute inset-0 z-0 object-cover object-top"
        />
      </Container>
    </section>
  );
};

export default Hero;

const ScrollToLearnMore = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-1 text-white", className)}>
      <DoubleDownArrow className="size-6" />
      <p className="text-[0.813rem] leading-[1.33em] tracking-[-0.01em] lg:text-[0.938rem]">
        Scroll to learn more
      </p>
    </div>
  );
};
