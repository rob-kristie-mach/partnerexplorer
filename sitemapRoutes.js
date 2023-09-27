import { DeliveryClient } from '@kentico/kontent-delivery';

async function getDynamicRoutes() {
  const deliveryClient = new DeliveryClient({
    projectId: '0ae1f725-2a3b-003b-9b46-a6747708554f', // Replace with your actual Kontent project ID
  });

  // Fetch 'attentity_blog' items
  const blogResult = await deliveryClient.items()
    .type('attentity_blog')  
    .toPromise();

  const blogRoutes = blogResult.data.items.map(item => `/content-hub/${item.elements.slug.value}`);


  // Fetch 'component_page' items
  const pageResult = await deliveryClient.items()
    .type('component_built_page')  
    .toPromise();

  const pageRoutes = pageResult.data.items.map(item => `/${item.elements.slug.value}`);

  // Combine both arrays of routes
  return [...blogRoutes, ...pageRoutes];
}

module.exports = getDynamicRoutes;