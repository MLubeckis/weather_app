export async function getAddresses(address) {
    let response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Lokomotives%20iela%2034?unitGroup=us&key=9GWHNNZ3R86XP9D3V2MW5QHVE&contentType=json`
    );
    let addressesObj = await response.json();
    return addressesObj;
}

export async function updateSelection(div, address) {
    const addressesObj = await getAddresses(address);
    const addressesArr = addressesObj.adrese;
    div.innerHTML = "";
    if (addressesArr.length > 0){
        for (address of addressesArr) {
            const selection = document.createElement("div");
            selection.classList.add("dd");
            selection.textContent = `${address.iela || address.terit_vien || ""} ${address.maja || ""}, ${
                address.pop_place || address.admin_vien || ""
            }`;
            div.append(selection);
        }
    }
    }
    
