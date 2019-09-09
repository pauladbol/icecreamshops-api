import { getShopsResponse, getReviewResponse } from '../services/yelp-service';

export const getAllShops = async (params) => {
  
    const shops = await getShopsResponse(params.latitude,params.longitude,params.term);
    const shopsFiltered = filterShopsResponse(shops, params.city);
    
    return shopsFiltered;
}

export const getTopFiveShops = async (params) => {

    const shops = await getShopsResponse(params.latitude,params.longitude,params.term);
    const shopsFiltered = filterShopsResponse(shops, params.city);
    const topFive = filterTopFive(shopsFiltered);
    
    return topFive;
}

const filterShopsResponse = (shops, city) => {
    
    const shopsFiltered = shops.filter(shop => shop.location.city === city);

    shopsFiltered.sort((prev, curr) => {
        if (prev.rating < curr.rating) 
            return 1;
          
        if (prev.rating > curr.rating) 
            return -1;
          
        return 0;
    });

    return shopsFiltered;
}

const filterTopFive = async (shops) => {
    let topFive = [];
    let count = 0;

    for (const shop of shops) {
        if (count < 5) {

            const review = await getReviewResponse(shop.alias);

            topFive.push({ name: shop.name, 
                           rating: shop.rating,
                           address: shop.location.display_address,
                           review: review.text,
                           reviewer: review.user.name});

            count += 1;
        }
    } 
    
    return topFive;
}