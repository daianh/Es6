const inventory = [

    {type: "machine", value: 5000},


    {type: "machine", value: 650},


    {type: "duck", value: 10},


    {type: "furniture", value: 1200},


    {type: "machine", value: 77}


]
const sum = 0
const totalMachineValue = inventory.reduce((accumulator, currentValue) => {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].type === "machine") ;
        return currentValue += sum
    }
}, 0)


console.log(totalMachineValue)