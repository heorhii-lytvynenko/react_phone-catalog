import { Page } from '@/atoms';
import { useTablets } from '@/hooks';
import { Catalog as C } from '@/organisms';

const Tablets = () => {
  const tablets = useTablets();

  return (
    <Page>
      <Page.Breadcrumps />
      <C title="Tablets">
        <C.Count list={tablets} />
        <C.Filter>
          <C.Filter.Items />
          <C.Filter.Sort />
        </C.Filter>
        <C.List items={tablets} />
      </C>
    </Page>
  );
};

export default Tablets;
