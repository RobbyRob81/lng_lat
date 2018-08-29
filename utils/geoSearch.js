import jsonfile from "jsonfile";
const GeoTree = require("geo-tree");

// data
// import data from "./data/shapedData.js";
import dataJSON from "../shapedData.json";

/**
 * TEST CASE:
 * Gracie Humatia Conroe
 * 2064+N+Farm+to+Market+3083+Rd+W+ste+c+Conroe+TX+77304
 * 2064 N Farm to Market 3083 Rd W ste c, Conroe, TX 77304
 * "formatted_address": "2064 N Farm to Market 3083 Rd W ste c, Conroe, TX 77304, USA",
            "geometry": {
                "location": {
                    "lat": 30.3387602,
                    "lng": -95.50909260000002
                }
 */

 const testData = { 
     "lat": 30.3387602,
     "lng": -95.50909260000002
};

// console.log(dataJSON)

function geoSearch(data) {

    const set = new GeoTree(data);

    set.insert(dataJSON);
    
    let response = set.find(testData, 5, 'mi');
    return response;
}

export {geoSearch}