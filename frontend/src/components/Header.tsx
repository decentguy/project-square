import { Hero, Container, Heading, Button, Image} from 'react-bulma-components';

const Header: React.FC = () => (
  <Hero size="halfheight banner">
    <div className="image-wrapper">
      <Image src="/images/stock/confidence.jpeg" size={'3by1'} fullwidth={false} />
    </div>
    <Hero.Body className="bottom-left" >
      <Container breakpoint={'tablet'}>
        <Heading size={3} className="has-text-light">
          Live with Confidence
        </Heading>
        <Heading subtitle size={5} className="has-text-light" pt={5} pb={1}>
          José Mourinho brings confidence to pan-African Sanlam campaign.
        </Heading>
        <Button color="primary" size="small" rounded className='banner-action'>
          View project
        </Button>
      </Container>
    </Hero.Body>
  </Hero>
);

export default Header;