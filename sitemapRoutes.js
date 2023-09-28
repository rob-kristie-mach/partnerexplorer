import { DeliveryClient } from '@kentico/kontent-delivery';

async function getDynamicRoutes() {
  const deliveryClient = new DeliveryClient({
    projectId: '814ddc4f-9d27-004b-4203-5fb88ed20501', // Replace with your actual Kontent project ID
  });

  // Fetch 'attentity_blog' items
  


  // Fetch 'component_page' items
  const pageResult = await deliveryClient.items()
    .type('component_built_page') 
    .collection('partner_explorer') 
    .toPromise();

  const pageRoutes = pageResult.data.items.map(item => `/${item.elements.slug.value}`);

  // Combine both arrays of routes
  return [...pageRoutes];
}

module.exports = getDynamicRoutes;