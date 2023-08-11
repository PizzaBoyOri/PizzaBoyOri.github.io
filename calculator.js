const calculateButton = document.getElementById("calculate-button");
const guestsInput = document.getElementById("guests");
const discountInput = document.getElementById("discount");
const distanceInput = document.getElementById("extra-distance");
const bamboo = document.getElementById("bamboo");
const lux_salad = document.getElementById("lux-salads");
const offersDiv = document.getElementById("offers");

calculateButton.addEventListener("click", calculateOffers);

function calculateOffers() {
    const guests = parseInt(guestsInput.value);
    let discount = parseInt(discountInput.value);
    const distance = parseInt(distanceInput.value);
    let bamboo_checked = false;
    let salads_checked = false;
    let has_distance = false;
    let has_discount = false;
    let less_15 = false;

    let offersHTML = ``;

    if (guests <= 15) {
        less_15 = true;
    }

    if (!isNaN(distance) && distance > 0) {
        has_distance = true;
    }
    if (!isNaN(discount) && discount > 0) {
        has_discount = true;
        discount = discount / 100;
    }
    if (bamboo.checked) {
        bamboo_checked = true;
    }
    if (lux_salad.checked) {
        salads_checked = true;
    }

    if (bamboo_checked) {
        offersHTML += `
           <p>Extra for Bamboo 10 X ${guests} = ${10 * guests}</p>
           <hr>
        `
    }

    if (salads_checked) {
        offersHTML += `
           <p>Extra for Luxury Salads 30 X ${guests} = ${30 * guests}</p>
           <hr>
        `
    }

    if (has_distance) {
        offersHTML += `
           <p>Extra for Distance = ${distance}</p>
           <hr>
        `
    }

    let addOns = "";
    let addOnsAmount = 0;
    let addOnsAmountLuxury = 0;

    if (bamboo_checked && salads_checked && has_distance) {
        addOns += "(Including bamboo cutlery, luxury salads and extra distance)"
        addOnsAmountLuxury += 10 * guests + distance
        addOnsAmount = 40 * guests + distance
    } else if (bamboo_checked && salads_checked && !has_distance) {
        addOns += "(Including bamboo cutlery and luxury salads)"
        addOnsAmountLuxury += 10 * guests
        addOnsAmount = 40 * guests
    } else if (bamboo_checked && !salads_checked && has_distance) {
        addOns += "(Including bamboo cutlery and extra distance)"
        addOnsAmountLuxury += 10 * guests + distance
        addOnsAmount = 10 * guests + distance
    } else if (bamboo_checked && !salads_checked && !has_distance) {
        addOns += "(Including bamboo cutlery)"
        addOnsAmountLuxury += 10 * guests
        addOnsAmount = 10 * guests
    } else if (!bamboo_checked && salads_checked && has_distance) {
        addOns += "(Including luxury salads and extra distance)"
        addOnsAmountLuxury += distance
        addOnsAmount = 30 * guests + distance
    } else if (!bamboo_checked && salads_checked && !has_distance) {
        addOns += "(Including luxury salads)"
        addOnsAmountLuxury += 30 * guests
    } else if (!bamboo_checked && !salads_checked && has_distance) {
        addOns += "(Including extra distance)"
        addOnsAmountLuxury += distance
        addOnsAmount = distance
    }
    let totalStr = `Total` + addOns;

    let basicTotal = 2500 + addOnsAmount;

    offersHTML += `
        <h3>Basic Offer:</h3>
        <p> - Base Price for 15 Guests = 2500</p>
    `;

    if (!less_15) {
        offersHTML += `
        <p> - Addition for ${guests - 15} Guests: ${guests - 15} X 80 = ${(guests - 15) * 80}</p>
    `;
        basicTotal += (guests - 15) * 80
    }
    offersHTML += `
        <p>` + totalStr + ` = ${basicTotal}</p>
    `;

    if (has_discount) {
        offersHTML += `
        <p>Discount = ${discount * basicTotal}</p>
        <p>New Total = ${(1 - discount) * basicTotal}</p>
    `;
        basicTotal = (1 - discount) * basicTotal

    }

    offersHTML += `
        <p>Total (Including TAX) = ${basicTotal * 1.17}</p>
        <hr>
    `;

    let premiumTotal = 3000 + addOnsAmount;

    offersHTML += `
        <h3>Premium Offer:</h3>
        <p> - Base Price for 15 Guests = 3000</p>
    `;

    if (!less_15) {
        offersHTML += `
        <p> - Addition for ${guests - 15} Guests: ${guests - 15} X 90 = ${(guests - 15) * 90}</p>
    `;
        premiumTotal += (guests - 15) * 90
    }
    offersHTML += `
        <p>` + totalStr + ` = ${premiumTotal}</p>
    `;

    if (has_discount) {
        offersHTML += `
        <p>Discount = ${discount * premiumTotal}</p>
        <p>New Total = ${(1 - discount) * premiumTotal}</p>
    `;
        premiumTotal = (1 - discount) * premiumTotal

    }

    offersHTML += `
        <p>Total (Including TAX) = ${premiumTotal * 1.17}</p>
        <hr>
    `;

    let luxuryTotal = 3500 + addOnsAmountLuxury;

    offersHTML += `
        <h3>Luxury Offer:</h3>
        <p> - Base Price for 15 Guests = 3500</p>
    `;

    if (!less_15) {
        offersHTML += `
        <p> - Addition for ${guests - 15} Guests: ${guests - 15} X 100 = ${(guests - 15) * 100}</p>
    `;
        luxuryTotal += (guests - 15) * 100
    }
    offersHTML += `
        <p>` + totalStr + ` = ${luxuryTotal}</p>
    `;

    if (has_discount) {
        offersHTML += `
        <p>Discount = ${discount * luxuryTotal}</p>
        <p>New Total = ${(1 - discount) * luxuryTotal}</p>
    `;
        luxuryTotal = (1 - discount) * luxuryTotal
    }

    offersHTML += `
        <p>Total (Including TAX) = ${luxuryTotal * 1.17}</p>
        <hr>
    `;
    offersDiv.innerHTML = offersHTML;
}
