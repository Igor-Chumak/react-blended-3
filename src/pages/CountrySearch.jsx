import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const onSubmit=region=>{console.log(region)}
  return (
    <Section>
      <Container>
       <SearchForm onSubmit={onSubmit}/>
      </Container>
    </Section>
  );
};
