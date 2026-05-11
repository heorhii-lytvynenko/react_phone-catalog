import { Page } from '@/atoms';
import { Catalog as C } from '@/organisms';
import { usePhones } from '@/hooks';

const Phones = () => {
  const phones = usePhones();

  return (
    <Page>
      <Page.Breadcrumps />
      <C title="Mobile phones">
        <C.Count list={phones} />
        <C.Filter>
          <C.Filter.Items />
          <C.Filter.Sort />
        </C.Filter>
        <C.List items={phones} />
      </C>
    </Page>
  );
};

export default Phones;
