import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = region => {
    setSearchParams({ region });
  };
  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    setIsLoading(true);
    fetchByRegion(region)
      .then(result => setData(result))
      .catch()
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={data} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
