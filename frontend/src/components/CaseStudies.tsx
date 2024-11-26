import React from 'react';
import { DisplayDTO } from '../types';
import { Columns, Container, Heading, Image } from 'react-bulma-components';
import SectionTitle from './sectionTitle';

const CaseStudies: React.FC = () => {
  return (
    <div>
        <Container className='m-6'>
            <SectionTitle title='Case studies' />
            <Columns mt={6}>
                {
                  cases.map((service: DisplayDTO)=>(
                      <Columns.Column size={'one-third'} pt={1}>
                          <Image src={`/images/stock/${service.image}`} size={''} className='image is-square'/>
                          <Container>
                            <img src='/images/assets/rectangle.svg' alt={`case icon`}/>
                            <Heading className='has-text-black mt-2 mb-2' size={5} weight='semibold'>
                                {service.title}
                            </Heading>
                            <Heading className='has-text-black' subtitle weight='light' size={6}>
                                {service.description}
                            </Heading>
                          </Container>  
                      </Columns.Column>
                  ))
                }
            </Columns>
        </Container>
    </div>
  );
};

export default CaseStudies;

const cases: DisplayDTO[] = [
  {
      title: 'The Olympian',
      image: 'olympian.jpeg',
      description: 'The only athlete in the world to do her Olympic routine in 2020.'
  },
  {
      title: 'The Savings Jar',
      image: 'dragon.jpeg',
      description: 'Grow your savings treasure and grow your dragon.'
  },
  {
      title: 'Skhokho seMali',
      image: 'skhokho.jpeg',
      description: 'Helping South Africans become #CashCleva with Skhokho and TymeBank.'
  },
]
