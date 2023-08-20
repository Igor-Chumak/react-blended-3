import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});
  const { countryId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId)
      .then(data => setCountry(data))
      .catch()
      .finally(() => setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo {...country} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
