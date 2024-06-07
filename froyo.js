function flavorPrompt() {
    let flavorPreference = (prompt("Provide your favorite flavors", "Froggy, Chocolate, Vanilla").split(/\s*,\s*/));
    console.log(flavorPreference)

    const order={};

    for (i=0; i<flavorPreference.length; i++) {
        let element=flavorPreference[i]
        
        if (typeof order[element] === "undefined"){
            order[element] = 1;
        } else {
            order[element] += 1;
        }
        console.log(order);
    }
    
    document.getElementById("orderUp").innerHTML = `You ordered ${JSON.stringify(order)}`;
    console.log(`You ordered ${JSON.stringify(order)}`)

    return order;
    }


