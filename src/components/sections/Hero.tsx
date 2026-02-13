import Button from "../Button";
import Container from "../Container";

const Hero = () => {
  return (
    <section>
      <Container>
        <h1>
          The All-in-One AEC
          <br />
          Platform, Finally.
          <br />
          MeshKloud.
        </h1>
        <p>Every tool. Every Team. Finally connected.</p>
        <div>
          <Button variant="light" isArrow>
            Join Early Access
          </Button>
          <Button variant="transparency">About Platform</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
