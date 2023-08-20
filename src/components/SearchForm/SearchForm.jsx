import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');
  const handlinput = event => {
    setRegion(event.target.value);
  };
  const handelSubmit = event => {
    event.preventDefault();
    if (!region) {
      alert('select region');
      return;
    }
    onSubmit(region);
    setRegion('');
  };
  return (
    <SearchFormStyled onSubmit={handelSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        defaultValue="default"
        onChange={handlinput}
        aria-label="select"
        name="region"
        required
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
