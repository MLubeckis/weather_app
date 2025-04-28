export async function getAddresses(address) {
    let response = await fetch(
        `https://api.kartes.lv/v3/KVDM_jkhSm/search?q=${address}&layers=adrese&fields=name,pop_place,iela,maja,terit_vien,admin_vien,valsts,&limit=4`
    );
    let addressesObj = await response.json();
    return addressesObj;
}

export async function updateSelection(div, address) {
    const addressesObj = await getAddresses(address);
    const addressesArr = addressesObj.adrese;
    div.innerHTML = "";
    if (addressesArr!=undefined){
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
    
