import {Injectable} from '@angular/core';

@Injectable()
export class Util{
    host = "http://104.236.53.179"
    storeCategories;
    products;
    constructor(){  
        this.storeCategories = {
            "WEED & DURYEA" : [
                {"Name" : "Lawn & GARDEN", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/lawn-garden-products.jpg"},
                {"Name" : "AUTOMOTIVE", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/automotive-supplies.jpg"},
                {"Name" : "DECKING ROOFING SIDING", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/10/products-decking-roofing-siding.jpg"},
                {"Name" : "BIRD SEEDS", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/bird-seeds.jpg"},
                {"Name" : "HOUSEWARES", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/housewares-products-1.jpg"},
                {"Name" : "LUMBER & BUILDING MATERIALS", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/lumber-building-materials-1.jpg"},
                {"Name" : "OUTDOOR LIVING" , "Background" : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/outdorr-living-supplies.jpg"},
                {"Name" : "PAINT & ACCESSORIES", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/paint-and-accessories.jpg"},
                {"Name" : "PLUMBING & ELECTRICAL", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/10/products-plumbing-and-electrical.jpg"},
                {"Name" : "SEASONAL", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/seasonal-winter-supplies.jpg"},
                {"Name" : "DOORS & WINDOWS", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/10/doors-windows.jpg"},
                {"Name" : "TOOLS & HARDWARE", "Background"  : "http://www.noblehousect.com/development/nbslumber.com/weed-and-duryea/wp-content/uploads/2016/09/tools-hardware-products.jpg"}                
            ],
            "LUMBER YARD" : [
                {"Name" : "BUILDING MATERIALS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/bridgeport-lumber-yard/wp-content/uploads/2016/09/building-materials.jpg"},
                {"Name" : "DECKING ROOFING SIDING", "Background" : "http://www.noblehousect.com/development/nbslumber.com/bridgeport-lumber-yard/wp-content/uploads/2016/09/decking-roofiing-siding.jpg"},
                {"Name" : "DOORS & WINDOWS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/bridgeport-lumber-yard/wp-content/uploads/2016/09/doors-windows.jpg"}
            ],
            "KITCHEN CENTER" : [
                {"Name" : "CABINETRY", "Background" : "http://www.noblehousect.com/development/nbslumber.com/the-kitchen-center-of-connecticut/wp-content/uploads/2016/09/cabinetry.jpg"},
                {"Name" : "COUNTER TOPS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/the-kitchen-center-of-connecticut/wp-content/uploads/2016/09/counter-tops.jpg"},
                {"Name" : "DECORATIVE HARDWARE", "Background" : "http://www.noblehousect.com/development/nbslumber.com/the-kitchen-center-of-connecticut/wp-content/uploads/2016/09/decorative-hardware.jpg"},                
            ],
            "PAINT CENTER" : [
                {"Name" : "Lawn & GARDEN", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/lawn-garden-products.jpg"},
                {"Name" : "PAINT & ACCESSORIES", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/paint-and-accessories.jpg"},
                {"Name" : "TOOLS & HARDWARE", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/tools-hardware-products.jpg"},
                {"Name" : "DECORATIVE HARDWARE", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/decorative-hardware.jpg"},
                {"Name" : "HOUSEWARES", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/housewares-products-1.jpg"},
                {"Name" : "PLUMBING & ELECTRICAL", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/10/products-plumbing-and-electrical.jpg"},
                {"Name" : "SEASONAL", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/seasonal-winter-supplies.jpg"},
                {"Name" : "BIRD SEEDS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/bird-seeds.jpg"},
                {"Name" : "AUTOMOTIVE", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/automotive-supplies.jpg"},
                {"Name" : "LUMBER & BUILDING MATERIALS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/lumber-building-materials-1.jpg"},
                {"Name" : "DECKING ROOFING SIDING", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/10/products-decking-roofing-siding.jpg"},
                {"Name" : "DOORS & WINDOWS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/doors-windows.jpg"},
                {"Name" : "POWER TOOLS & ACCESSORIES", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/power-tools-and-accessories.jpg"},
                {"Name" : "AIR TOOLS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/air-tools.jpg"},
                {"Name" : "FLASHING & SEALANTS", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/flashing-sealants.jpg"},
                {"Name" : "FENCING", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/fencing.jpg"},
                {"Name" : "PET & LIVESTOCK", "Background" : "http://www.noblehousect.com/development/nbslumber.com/cornwall-bridge-hardware/wp-content/uploads/2016/09/pets-and-livestock.jpg"}
            ],
            "WINDOWS & DOORS" : [

            ]                  
        }
        this.products = {
            "TOOLS & HARDWARE" : [
                "Hand Tools",
                "Power Tools",
                "Screws & Nuts",
                "Nails",
                "Drill Bits",
                "Saw Blades",
                "Accessories",
                "Tarps"              
            ],
            "AUTOMOTIVE" : [
                "Windshield fluid",
                "Car Care",
                "Oils",
                "Gas Cans",
                "Auto Accessories"                
            ],
            "DECKING ROOFING SIDING" : [
                "Wood",
                "Composite",
                "Trex",
                "Railings",
                "Cedar",
                "Mahagany",
                "GAF",
                "Hardie Plank Siding",
                "Tyvek"                
            ],
            "BIRD SEEDS" : [
                "Lyric",
                "Suet",
                "Bird Feeders",
                "Accessories"                
            ],
            "HOUSEWARES" : [
                "Cleaning Supplies",
                "Doormats",
                "Kitchen Utensils",
                "Bath Accessories",
                "Small Appliances",
                "Trash Cans",
                "Dish Towels",
                "Pot Holders",
                "Bakeware",
                "Candles",
                "Designer Paper Napkins"                
            ],
            "LUMBER & BUILDING MATERIALS" : [
                "Trusses & Wall Panels",
                "Engineered Wood",
                "Lumber",
                "Moldings",
                "Builders Hardware",
                "Hangers & Trusses",
                "Sealants",
                "Adhesives",
                "Wllboard",
                "Fastners"                
            ],
            "OUTDOOR LIVING" : [
                "Grills",
                "Weber",
                "Big Green Egg",
                "Yeti",
                "Planters",
                "Propane Tanks",
                "Propane Refills",
                "Furniture",
                "Coolers"                
            ],
            "PAINT & ACCESSORIES" : [
                "Paint",
                "Stains",
                "Accessories",
                "Primers",
                "Spray Paint",
                "Brushes",
                "Rollers",
                "Drop Clothes",
                "Pratt & Lambert",
                "Cabots",
                "Minwax",
                "Custom Matching"                
            ],
            "PLUMBING & ELECTRICAL" : [
                "GE Lightbulbs",
                "Satco Lightbulbs",
                "Electrical Accessories",
                "Smoke Detectors",
                "Timers",
                "Water Softners",
                "Plumbing Accessories"                
            ],
            "SEASONAL" : [
                "Ice Melt",
                "Shovel",
                "Heaters",
                "Fans",
                "Humidifiers",
                "De-humidfiers",
                "Firewood"                
            ],
            "DOORS & WINDOWS" : [
                "Lepage",
                "Sierra Pacific",
                "Lincoln",
                "Atrium",
                "Western",
                "United",
                "Brosco",
                "Larson",
                "Therma Tru",
                "Jeld-wen",
                "Custom Entry"                
            ],
            "Lawn & GARDEN" : [
                "Mulch",
                "Soils",
                "Seeds",
                "Fertilizer",
                "Weed Control",
                "Pest Control",
                "Hose & Sprinklers",
                "Scotts",
                "Espoma",
                "Bonide",
                "Garden tools",
                "Work gloves",
                "Tarps"                
            ],
            "BUILDING MATERIALS" : [
                "Trusses & Wall panels",
                "Engineered Wood",
                "Lumber",
                "Moldings"                
            ],
            "CABINETRY" : [
                "Fabuwood",
                "JSI Cabinetry",
                "Wolf Classic Cabinets",
                "Fieldstone",
                "Medallion",
                "Ultracraft",
                "Plain & Fancy",
                "Luxor"                
            ],
            "COUNTER TOPS" : [
                "Quartz",
                "Cambria",
                "Ceasarstone",
                "Color Quartz",
                "Wilsonart Quartz",
                "Neolith",
                "Granite",
                "Marble",
                "Limestone",
                "Solid Surface",
                "Laminate",
            ],
            "DECORATIVE HARDWARE" : [
                "Atlas",
                "Emtek",
                "Top Knobs",
                "Jeffery Alexander",
                "Wurth Probuilder",
                "Richelieu",
                "Amerock",
                "Schaubb",                
            ],
            "POWER TOOLS & ACCESSORIES" : [
                "Dewalt",
                "Porter Cable",
                "Black & Decker",
                "Milwaukee",
                "Makita",
                "Fein",
                "Remington",
                "Diablo",
                "CMT",
                "Irwin"               
            ],
            "AIR TOOLS" : [
                "Senco",
                "Porter Cable",
                "Bostitch",
                "Hitachi",
                "Compressors",
                "Hoses",
                "Accessories"
            ],
            "FLASHING & SEALANTS" : [
                "Gorilla Glue",
                "PL Products",
                "Vycor",
                "Zip Tape",
                "3M Tape",
                "Copper/Aluminum/Lead",
                "Tyflex",
                "Spray Foam Insulation",
                "Weather Stripping"
            ],
            "FENCING" : [
                "Split Rail",
                "Stockade",
                "Welded Wire",
                "Deer Netting",
                "Deer Fencing",
                "Pool Fencing",
                "Snow Fence",
                "Chicken Wire",
                "Rabbit Fencing",
                "Silt Fence",
                "Picket Fence",
                "Composite Fence",
                "Wood/Metal Fence Post"
            ],
            "PET & LIVESTOCK" : [
                "Blue Seal Feed",
                "Chicken Wire",
                "Hardware Cloth",
                "Pet Supplies",
                "Dog & Cat Food",
                "Livestock Feed",
                "Salt Lick"
            ]
        }        
    }
}
