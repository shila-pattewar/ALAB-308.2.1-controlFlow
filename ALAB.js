// delclare variables

const PI = 3.1415;
let radius = 5;
let minSpace = 0.8;
let firstWeekPlants = 20;

const area = PI * radius * radius ;
console.log ( "Area:" + Math.floor(area));
console.log ("First Week Of Plants:" + firstWeekPlants);

const maxPlants = Math.floor( area / minSpace);
console.log ( "MaxPlants:" + maxPlants);

for ( let weeks=1 ; weeks <=3; weeks++)
    {
    let plantCount = firstWeekPlants;
        
    
    console.log ("-----------------------------------------------");
    for ( i=0; i < weeks; i++){
        plantCount = plantCount * 2 ; 
        console.log ("Each Week Double the value:" + plantCount);
    }


let maxCapacity = 0.08;
let minCapacity = 0.05;

let Capacity80Percent = maxCapacity * 100;
let Capacity50Percent = minCapacity * 100;
let Capacity = " ";

if ( plantCount >= Capacity80Percent)
    {
        console.log ("Pruned");
    }
else if ( plantCount >= Capacity50Percent  &&  plantCount <= Capacity80Percent)
    {
        console.log ("Monitored");
    }
else 
    {
        console.log ("Planted");
    }
}

let startPlants = 100;
let weeks = 10; 

for ( weeks=1; weeks <= 10 ; weeks ++)
{
       
    if( tenWeeks = (weeks * startPlants) / (PI)){
        console.log( "Radius of this expanded garden: " + Math.floor(tenWeeks) + "m\u00B2");
        break;
    }
         
}

try {

        if (totalSpaceRequired > area)
        {
            throw new error("amount of space required to hold the originally provided number of plants exceeds the amount of space available");
        }
    }
    catch (error)
    {
        console.log("error");
    }

