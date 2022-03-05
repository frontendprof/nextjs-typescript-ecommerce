import { Product } from '@common/types/product';
import { ImageEdge, Product as ShopifyProduct } from '../schema';

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode,
});

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    priceRange,
    images: imageConnection,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
