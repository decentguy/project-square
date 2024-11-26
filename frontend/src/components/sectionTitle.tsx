import React from 'react';
import { Columns, Heading } from 'react-bulma-components';

interface SectionTitleProps {
    title: string;
    color?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color = 'has-text-black' }) => {
    return (
        <Columns>
            <Columns.Column className='inline'>
                <img src='/images/assets/rectangle.svg' alt={`${title} icon`}/>
                <Heading size={5} ml={2} weight='normal' className={"section-title-text" + " " + color}>{title}</Heading>
            </Columns.Column>
        </Columns>
    );
};

export default SectionTitle;