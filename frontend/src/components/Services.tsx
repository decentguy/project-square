import React from 'react';
import { Columns, Container, Heading, Image  } from 'react-bulma-components';
import SectionTitle, {  } from './sectionTitle';
import { DisplayDTO } from '../types';


const Services: React.FC = () => {

    return (
        <div>
            <Container className='m-6'>
                <SectionTitle title='What we do' />
                <Heading color='primary' className='has-text-black' size={1}>
                    We offer a complete range of bespoke design and <br /> development services to help you turn your ideas into <br /> digital masterpieces
                </Heading>
                <Columns mt={6}>
                    {
                        offers.map((service: DisplayDTO)=>(
                            <Columns.Column size={'one-quarter'} pt={1}>
                                <Image src={`/images/assets/${service.image}`} size={''} className='image is-48x48'/>
                                <Heading className='has-text-black mt-5 mb-5' size={5} weight='semibold'>
                                    {service.title}
                                </Heading>
                                <Heading className='has-text-black' subtitle weight='normal' size={6}>
                                    {service.description}
                                </Heading>
                            </Columns.Column>
                        ))
                    }
                </Columns>
            </Container>
        </div>
    );
};

export default Services;

const offers: DisplayDTO[] = [
    {
        title: 'Web development',
        image: 'web-dev.svg',
        description: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
    },
    {
        title: 'User experience & design',
        image: 'ux.svg',
        description: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
    },
    {
        title: 'Mobile app development',
        image: 'app-dev.svg',
        description: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
    },
    {
        title: 'Blockchain solutions',
        image: 'chain.svg',
        description:'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
    },
]
