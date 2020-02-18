import mongoDB from './index';
import Example from '../models/examplemodel';


//This demonstrates how we add our mongoose cocnnection to a function
//We just await the function we created to connect to the database
//Later we can import this function to pages/api/ to use it in a route
export async function exampleCount() {
  await mongoDB();

  //This tells us how many example documents are in our database
  return Example.estimatedDocumentCount()
}
