import jsonfile from "jsonfile";

function createGeoCodeData(source, destination) {
    const shapedData = source.map(vendor => {
        const shapedVendor = {
             lat: Number(vendor.lat),
             lng: Number(vendor.lng),
             data: {
                 city:  vendor["City"],
                 county:  vendor["County"],
                 dealerEmail:  vendor["Dealer Email"],
                 dealerName:  vendor["Dealer Name"],
                 dealerPhone:  vendor["Dealer Phone"],
                 dealerWebsite:  vendor["Dealer Website"],
                 facebookLink:  vendor["Facebook Link"],
                 financing:  vendor["Financing"],
                 googleHash:  vendor['# Google'],
                 googleScore:  vendor["Google Score"],
                 oem:  vendor["OEM #1"],
                 sales:  vendor["Sales"],
                 service:  vendor["Service"],
                 state:  vendor["State"],
                 zipCode:  vendor["ZipCode"]
             }
        }
    
        return shapedVendor;
    })

    jsonfile.writeFile(destination, shapedData, {spaces: 4, EOL: '\r\n'}, function (err) {
        console.error(err)
    })
}

export {createGeoCodeData};
