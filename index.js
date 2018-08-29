import {geoSearch} from "./utils/geoSearch";
import fs from "fs";
import jsonfile from "jsonfile";

/**
Steps:
1. Manually delete all the rows without an address
2. Manually Format all the column titles by removing spaces and special characters
3. Save the file as a csv extension
4. Run the geoCode google script which adds a lat/lng to each vendor


csvgeocode /Users/robrosario/Documents/Github/lng_lat/VENDORS_ALL_SERIALIZED.csv VENDORS_WITH_LAT_LNG.csv --url "https://maps.googleapis.com/maps/api/geocode/json?address={{Address}},{{City}},{{State}},{{ZipCode}}&key=AIzaSyB4RcIh1sxMANPgY5ClbpVPi0koq0gdWig"  --handler google --lng lng --lat lat --verbose



5. Use jsonfile library to convert the google response to a JSON
6. Run utility to sort the object keys in ascending order and shapes it to a geo-tree format
7. Save the file as vendorGeoTreeStore
8. You can now run lat/lng queries
*/


// data
import {data} from "./data/unShapedData";
import { createGeoCodeData } from "./utils/createGeoCodeData";


let geoCodeData = {};
 
fs.readFile('vendorGeoDataStore.js', 'utf8', function(err, contents) {
    if(!contents) {
        console.log(" creating vendorGeoDataStore");
        geoCodeData = createGeoCodeData(data, "vendorGeoDataStore.js");
   
    } else {
        
        console.log("\n<------ Searching START ------>\n")
        
          let results = geoSearch(geoCodeData);
          console.log(results, null, 4);
          
        console.log("\n<------ Searching END ------> \n")

    }
});





