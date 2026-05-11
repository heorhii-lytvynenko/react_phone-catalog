import { Page } from '@/atoms';
import { useAccessories } from '@/hooks';
import { Catalog as C } from '@/organisms';

const Accessories = () => {
  const accessories = useAccessories();

  return (
    <Page>
      <Page.Breadcrumps />
      <C title="Accessories">
        <C.Count list={accessories} />
        <C.Filter>
          <C.Filter.Items />
          <C.Filter.Sort />
        </C.Filter>
        <C.List items={accessories} />
      </C>
    </Page>
  );
};

export default Accessories;
