import { Page } from '@/atoms';
import { Catalog } from '@/organisms';
import { usePhones } from '@/hooks';
import { useEffect, useState } from 'react';

const Phones = () => {
  const phones = usePhones();
  const [items, setItems] = useState(phones);
  const [page, setPage] = useState(1);
  const [itemsOnPage, setItemsOnPage] = useState(16);

  useEffect(() => {
    setItems(phones);
  }, [phones]);

  return (
    <Page>
      <Page.Breadcrumps />

      <Catalog title="Mobile phones">
        <Catalog.Count list={items} />

        <Catalog.Filter>
          <Catalog.Filter.Items />

          <Catalog.Filter.ItemsOnPage
            itemsOnPage={itemsOnPage}
            setItemsOnPage={setItemsOnPage}
          />

          <Catalog.Filter.Sort items={items} setItems={setItems} />
        </Catalog.Filter>

        <Catalog.List items={items} itemsOnPage={itemsOnPage} page={page} />
        <Catalog.Pagination
          page={page}
          setPage={setPage}
          itemsOnPage={itemsOnPage}
          items={items}
        />
      </Catalog>
    </Page>
  );
};

export default Phones;
