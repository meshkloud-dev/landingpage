import Badge from "../Badge";
import Button from "../Button";
import Container from "../Container";

const Solution = () => {
  return (
    <section className="pt-18 lg:pt-30">
      <Container>
        <div>
          <Badge variant="zap-blue">Solution</Badge>
          <h2 className="font-space-grotesk mt-4 max-w-2xl text-2xl font-bold tracking-[-0.04em] lg:mt-6 lg:text-5xl lg:font-medium">
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
      </Container>
    </section>
  );
};

export default Solution;
