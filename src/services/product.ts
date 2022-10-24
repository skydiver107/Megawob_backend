import { Product, IProduct } from '../models/product'

const findOneByID = async (_id: any) => {
    const result: IProduct = await Product.findOne({
        _id: _id
    })
    return result
}

const findByFilter = async (filter: any) => {
    const total = await Product.count({
        $or: [
            { name: { $regex: `.*${filter.searchValue}.*` } },
            { price: { $regex: `.*${filter.searchValue}.*` } },
            { CMID: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })

    const rows: IProduct[] = await Product.find({
        $or: [
            { name: { $regex: `.*${filter.searchValue}.*` } },
            { price: { $regex: `.*${filter.searchValue}.*` } },
            { CMID: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })
        .sort({
            [filter.column]: filter.direction === "asc" ? 1 : -1
        })
        .limit(filter.rowsPerPage)
        .skip((filter.currentPage - 1) * filter.rowsPerPage)
    return { rows, total }

}

const findAll = async () => {
    const result: IProduct[] = await Product.find({})
    return result
}

const createOne = async (data: any) => {
    const result: IProduct = await Product.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IProduct = await Product.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteAll = async () => {
    const result = await Product.deleteMany({})
    return result
}

const deleteOne = async (_id: any) => {
    const result = await Product.deleteOne({
        _id: _id
    })
    return result
}

export default {
    findOneByID,
    findByFilter,
    findAll,
    createOne,
    updateOne,
    deleteOne,
    deleteAll
}