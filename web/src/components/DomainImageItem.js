import { FaStar } from 'react-icons/fa';

import '../styles/components/DomainImageItem.css';

interface DomainImageItemProps {
  itemImageSource: string;
  detailCardHeader: string;
  detailCardType: string;
  starsAmount: number;
  charactersImagesSource: string[];
}

function DomainImageItem({
  itemImageSource,
  detailCardHeader,
  detailCardType,
  starsAmount,
  charactersImagesSource,
}: DomainImageItemProps) {
  return (
    <div className='image-block'>
      <img src={itemImageSource} alt='' className='domain-card-img' />

      <div className='item-detail-card'>
        <div className='header'>{detailCardHeader}</div>

        <div className='info'>
          <span className='type'>{detailCardType}</span>
          <img src={itemImageSource} alt='' className='image' />
          <div className='stars'>
            {Array(starsAmount).fill(<FaStar size={16} color='#FFD739' />)}
          </div>
        </div>

        <div className='characters'>
          {charactersImagesSource.map((characterImageSource) => (
            <img src={characterImageSource} alt='' className='character' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DomainImageItem;
