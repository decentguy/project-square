import React from 'react';
import { Columns, Container, Heading } from 'react-bulma-components';
import SectionTitle from './sectionTitle';

const Footer: React.FC = () => {

  return (
    <div className='is-primary'>
      <Container className='ml-6 py-6'>
        <SectionTitle title='Contact us' color='is-text-white' />
        <Container>
          <Columns>
            <Columns.Column size={'three-fifths'}>
              <Heading>
                Have a project in mind?<br />
                Let's make it happen
              </Heading>
            </Columns.Column>
            <Columns.Column size={'one-third'} className='pr-5'>
              {
               ` 22 Street Name, Suburb, 8000,
                 Cape Town, South Africa
                 +27 21 431 0001
                 enquirie@website.co.za
              `
              }
            </Columns.Column>
          </Columns>
        </Container>
        <Container className='m-0 mt-5'>
          <Columns >
            {
              footerLinks.map((link: string) => (
                <Columns.Column size={'one-fifth'} className='p-0' >
                  <Heading spaced={false} weight='light' textSize={6} >
                    {link}
                  </Heading>
                </Columns.Column>
              ))
            }
            <Columns.Column size={'one-third'}>
            </Columns.Column>
          </Columns>
        </Container>
      </Container>
    </div>
  )
};

export default Footer;

const footerLinks: string[] = [
  'Terms of service',
  'Privacy policy',
  'Impressum',
  'Facebook',
  'Explore open jobs',
  'Instagram',
  'Twitter',
  'Github',
  'Linkedin',
  '©2000—2023 Company Name',
  'Teams',
  'Youtube',
  'Behance',
  'Dribbble',
]