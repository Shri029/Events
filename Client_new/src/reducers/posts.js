export default (posts = [], action) =>{

   switch(action.type){

    case 'FETCH_ALL':
        return action.payload;
        break;
    
    case 'CRETE':
        return [...posts, action.payload];
        break;

    default:
        return posts;    

   }
}