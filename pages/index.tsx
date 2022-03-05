import { useEffect } from 'react';
import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/config';
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Best Apparel Store in the market"
        description="Sweet soufflé cotton candy liquorice marshmallow. 
        Chocolate bar tootsie roll bonbon oat cake ice cream cake dessert. 
        Muffin ice cream topping carrot cake tiramisu gummies chocolate bar cheesecake. 
        Icing danish pudding liquorice marzipan ice cream cake candy canes danish. 
        Chocolate bar bonbon toffee topping sesame snaps cotton candy toffee sugar plum pastry. 
        Cookie sesame snaps wafer pie muffin caramels cookie wafer soufflé. 
        Fruitcake lemon drops jelly beans bonbon tart powder tootsie roll. 
        Toffee sweet lollipop danish oat cake."
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  );
}
Home.Layout = Layout;
