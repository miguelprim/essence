import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product6L = ({ Product6L: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product6L/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price}€ (IVA incl.)</p>
        </div>
      </Link>
    </div>
  )
}

export default Product