import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filters';
import { Brand } from '../types';
import SectionTitle from './sectionTitle';
import { Columns, Container, Heading, Image } from 'react-bulma-components';

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await axios.get<Brand[]>('/api/brands'); 
      setBrands(response.data);
      setFilteredBrands(response.data);
    };
    fetchBrands();
  }, []);

  const handleFilter = (filter: string) => {
    setFilter(filter);
    const filtered = brands.filter((brand: Brand) =>
      brand.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  const handleSort = (sortOption: string) => {
    setSortOption(sortOption);
    let sorted = [...filteredBrands];
    if (sortOption === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredBrands(sorted);
  };

  return (
    <div>
      <Container className='m-6'>
        <SectionTitle title="You’ll be in good company" />
        <Filters onSort={handleSort} onFilter={handleFilter} />
        <Columns mt={6} justifyContent='center'>
          {
            filteredBrands.map((brand: Brand) => (
              <Columns.Column size={'one-fifth'} pt={1} justifyContent='center' alignItems='center' display='flex'>
                <Image key={brand.id} src={`/images/brands/${brand.logo}`} size={64} className='image' alt={brand.name}/>
              </Columns.Column>
            ))
          }
        </Columns>
      </Container>
    </div>
  );
};

export default Brands;
