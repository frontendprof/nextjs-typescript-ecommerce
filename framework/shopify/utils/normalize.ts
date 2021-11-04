import { Product as ShopifyProduct } from '../schema';


function normalizeProductImage({}){
    
}
export function normalizeProduct(productNode: ShopifyProduct) {
  const { id, title: name, handle, vendor, description,images:imageConnection ...rest } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
  };

  return product;
}
