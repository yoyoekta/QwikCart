export default function fetchProds(category) {
    if(category == "electronics"){
        return [
            {
                "id" : "0",
                "itemName" : "LCD monitor",
                "price" : 12000,
                "description" : "Philips V line wide-view monitor gives viewing beyond boundaries, great value with essential features. Adaptive-Sync delivers smooth video display. Features like anti-glare, LowBlue mode, and flicker-free for easy-on-the eyes.",
                "image" : "https://drive.google.com/uc?export=view&id=1V9JGlfrFvOk3RPJ8xqFn432TVlYPZ5Dg"
            },
            {
                "id" : "1",
                "itemName" : "Nikon Z50 Camera",
                "price" : 94000,
                "description" : "Sporting an especially sleek design, the Nikon Z 50 is a DX-format mirrorless digital camera revolving around the versatile Z Mount. Capable in both stills and video realms, it enables a notable low-light performance to ISO 51200.",
                "image" : "https://drive.google.com/uc?export=view&id=16rC1JzIsuZMjtgv_QYrIUenV4C0UD0hp"
            },
            {
                "id" : "2",
                "itemName" : "boAt IM1000D Headphones",
                "price" : 1100,
                "description" : "It is time to hit your gaming zone with the dual channel surround sound gaming headphones, boAt Immortal IM 1000D. It includes 7.1 channel surround audio via boAt Labz as well as Dolby Atmos.",
                "image" : "https://drive.google.com/uc?export=view&id=1Vgcd2Q_267i2uJUNFJWVTZ8o2r73I0VT"
            },
            {
                "id" : "3",
                "itemName" : "Noise Pulse 2 Max Smart Watch",
                "price" : 1200,
                "description" : "See everyday data clearly under the brightest sun on the 1.85'' TFT LCD that sports 550 nits of brightness and the highest screen-to-body ratio. Talk directly to your loved ones from your wrist; manage calls, access your favorite contacts and dial from the dial pad.",
                "image" : "https://drive.google.com/uc?export=view&id=1mKVuzCRhPYVUAxZ59GKryN2zd9EcngKR"
            },
            
        ]
    }
    else if(category == "clothing"){
        return [
            {
                "id" : "0",
                "itemName" : "Allen Solly Men Polo",
                "price" : 680,
                "description" : "Material : 60% Cotton and 40% Polyester; Neck : Polo Neck; Pattern : Solid; Sleeve Type: Half Sleeve; Closure Type: Button; Collar Style: Band Collar; Material Composition: 60% Cotton, 40% Polyester",
                "image" : "https://drive.google.com/uc?export=view&id=1Dc2G76SqUGv7tB6S8doRVSObyMe9kXhh"
            },
            {
                "id" : "1",
                "itemName" : "Wedani Women's Casual Foral Top",
                "price" : 200,
                "description" : "Fit Type: Regular; Fabric : Crepe; Sleeve Type : Short Sleeve; Style name: Western",
                "image" : "https://drive.google.com/uc?export=view&id=1VLgFmyF1xtqp9UKAT-sobYoMWgmfCjM4"
            },
            {
                "id" : "2",
                "itemName" : "ARIEL Baby Boys & Baby girls T-shirt & Short",
                "price" : 300,
                "description" : "100% Cotton Jersey fabric which is very soft and breathable and durable baby girls and baby boys t shirt and short set, no shrinkage and wrinkle free, comfortable to touch and wear.",
                "image" : "https://drive.google.com/uc?export=view&id=1Qth60OHeCaNSZDtZs-0HhxYfAf5xUPM4"
            },
            {
                "id" : "3",
                "itemName" : "Socks for men and women",
                "price" : 400,
                "description" : "Introducing our premium cotton angle socks , the perfect blend of style, comfort, and performance for athletes and fitness enthusiasts. Made from high-quality, breathable fabric.",
                "image" : "https://drive.google.com/uc?export=view&id=1WzQLsxm6EYPkV0rDAdfpr5Bl-XDKa20y"
            },
        ]
    }
    else if(category == "household"){
        return [
            {
                "id" : "0",
                "itemName" : "Scotch-Brite Bucket Spin Mop",
                "price" : 1000,
                "description" : "Twin Bucket Spin Mop for easy wringing and rinsing. Microfiber technology helps lift and trap dirt with unique easy clean surface for superior clean. Material: Plastic, Color: Green",
                "image" : "https://drive.google.com/uc?export=view&id=1rTqVwbvdGeiEZmubC6Dd2Ry4Y0MCBKuW"
            },
            {
                "id" : "1",
                "itemName" : "Kristal Table Spoon Set",
                "price" : 199,
                "description" : "Material : Stainless steel; Color : Silver; Package Contents: Set of 6 Table Spoons. Made from food grade stainless steel which prevents rusting. Smooth edges for safety.",
                "image" : "https://drive.google.com/uc?export=view&id=1oZkTfy8Jgj0JN8GsExW65NEA75z2EVo8"
            },
            {
                "id" : "2",
                "itemName" : "Bajaj Gas Stove",
                "price" : 10000,
                "description" : "Bajaj Hob 3 Burner Auto Ignition Gas Stove comes with Contemporary design for dual utility, it can be used as gas stove or hob top. The product is easy to use with multispark auto ignition",
                "image" : "https://drive.google.com/uc?export=view&id=1GUjLTeHjSDFaxzXP4Tzm0aV7BgJETXXA"
            },
            {
                "id" : "3",
                "itemName" : "Atomberg Renesa Ceiling Fan",
                "price" : 3600,
                "description" : "Atomberg Renesa comes with an energy efficient BLDC motor. This 5-star rated fan provides a superior air delivery of 235 CMM with 360 RPM while consuming only 28W (at speed 5), saving up to 65% in electricity consumption.",
                "image" : "https://drive.google.com/uc?export=view&id=14LQqzy2FQj0CLhDvHAwqFv17XbKYctZl"
            },
        ]
    }
    else if(category == "art & crafts"){
        return [
            {
                "id" : "0",
                "itemName" : "Indikonb Art and Craft Kit",
                "price" : 500,
                "description" : "This top quality and useful kit of craft supplies helps kids to develop fine motor skills and creativity in kids . Keep your kids busy with creative fun and crafting ideas .",
                "image" : "https://drive.google.com/uc?export=view&id=11TKm9f7GDeDa-AKs-4Xu51CNy1JKPKgs"
            },
            {
                "id" : "1",
                "itemName" : "Air Dry Super Clay",
                "price" : 140,
                "description" : "Strong extension power and strong elastic force, so you can easily create the model you want. It has strong plasticity which is easy to shape. It is also very soft smooth and non-sticky, easy to handle.",
                "image" : "https://drive.google.com/uc?export=view&id=1_OjmmoU1u9kOn9EogvqasSMKdx6Sktn9"
            },
            {
                "id" : "2",
                "itemName" : "Ofixo 100 Pieces Colour Sheets",
                "price" : 145,
                "description" : "Fit for beginners or experienced people to practice the art of paper folding. Suitable for school and family time making handicrafts .Suitable for use in laser and inkjet printers.",
                "image" : "https://drive.google.com/uc?export=view&id=1_HFaEn6MPfadz_A52fqyJDvheKkwQQwB"
            },
            {
                "id" : "3",
                "itemName" : "Fevistik Power",
                "price" : 270,
                "description" : "Fevistik Power gives way to Independent Crafting which ensures better Learning by doing for your child. Offers the non messy way to create school projects and craft projects using just a gluestick.",
                "image" : "https://drive.google.com/uc?export=view&id=1umpE9bbE7YNyzw90SXVqbBDqT0QKXPZt"
            },
        ]
    }
}