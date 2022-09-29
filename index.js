//2. Use the count operator to count the total number of fruits on sale.
db.fruits.aggregate([
    {
        $match: { onSale: true }
    },
    {
        $count: "fruitsOnSale"
    }
])

//3. Use the count operator to count the total number of fruits with stock more than 20.

db.fruits.aggregate([
    {
        $match: { stock: { $gt: 20 } }
    },
    {
        $count: "enoughStock"
    }
])

//4. Use the average operator to get the average price of fruits onSale per supplier.

db.fruits.aggregate([
    {
        $match: { onSale: true }
    },
    {
        $group: {
            _id: "$supplier_id",
            avgPrice: { $avg: "$price" }
        }
    }
])

//5. Use the max operator to get the highest price of a fruit per supplier.

db.fruits.aggregate([
    {
        $match: { onSale: true }
    },
    {
        $group: {
            _id: "$supplier_id",
            max_price: { $max: "$price" }
        }
    }

])

//6. Use the min operator to get the lowerst price of a fruit per supplier.
db.fruits.aggregate([
    {
        $match: { onSale: true }
    },
    {
        $group: {
            _id: "$supplier_id",
            min_price: { $min: "$price" }
        }
    }
])