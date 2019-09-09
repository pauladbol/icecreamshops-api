import yelp from 'yelp-fusion';
import dotenv from 'dotenv';
 
dotenv.config();

const apiKey = process.env.MYAPIKEY;
const client = yelp.client(apiKey);

export const getShopsResponse = async (latitude, longitude, term) => {

    const searchRequest = {
		term: term,
      	latitude: latitude,
      	longitude: longitude
    };

	const result = await client.search(searchRequest).then(response => response.jsonBody.businesses)
						    	.catch(error => error);

    return result;
}

export const getReviewResponse = async (shopAlias) => {

	const result = await client.reviews(shopAlias).then(response => response.jsonBody.reviews[0])
							   .catch(error => error);

	return result;
}
