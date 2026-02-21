import Badge from "../Badge";
import Container from "../Container";

const Builders = () => {
  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <div>
          <Badge variant="square-dark">Built for builders</Badge>
          <h2 className="font-space-grotesk mt-4 max-w-175 text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
            One community. <br />
            One platform. Infinite impact.
          </h2>
          <p className="mt-4 max-w-xl text-left text-[0.813rem] leading-[1.23em] max-lg:tracking-[-0.01em] lg:mt-6 lg:text-[1.063rem] lg:leading-[1.47em]">
            Join thousands of early adopters shaping the future of AEC
            technology, exploring new ideas, and building smarter workflows
            together
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Builders;
