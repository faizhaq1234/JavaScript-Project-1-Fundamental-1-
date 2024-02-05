let package = "overnight";
switch (package) {
    case "standard":
        console.log("It might take 3-5 Days for delivery");
        break;
    
    case "express":{
        console.log("It might takes 1-2 days");
        break;

    }

    case "overnight":{
        console.log("It will be delivered the very next day");
        break;


    }

    default:
        console.log("No data is present related to shipping packages");
        break;
}