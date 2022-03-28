import axios from 'axios';


export const getPlacesData = async (type, sw, ne)=>{
    try{
        // request
        const { data : {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '77ea8b104amsh9d76f087b857c28p19d700jsnfaf1a1084698'
            }
        }); // get the outer data and the spesific


        return data
    }catch(error){

    }
}