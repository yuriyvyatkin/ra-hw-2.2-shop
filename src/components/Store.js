import { useState } from 'react';
import products from '../data/products';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store() {
  const [icon, setIcon] = useState('view_module');
  const isModules = icon === 'view_module';

  function handleSwitch() {
    const nextIcon = isModules ? 'view_list' : 'view_module';
    setIcon(nextIcon);
  }

  return (
    <>
      <header className="header">
        <IconSwitch icon={icon} onSwitch={handleSwitch} />
      </header>

      <div className="body">
        {
          isModules
            ? <CardsView cards={products} />
            : <ListView items={products} />
        }
      </div>
    </>
  );
}
