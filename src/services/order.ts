import { Order, IOrder } from '../models/order'

const findOneByID = async (_id: any) => {
    const result: IOrder = await Order.findOne({
        _id: _id
    })
    return result
}

const findByFilter = async (filter: any) => {
    const total = await Order.count({
        $or: [
            { firstName: { $regex: `.*${filter.searchValue}.*` } },
            { lastName: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })

    const rows: IOrder[] = await Order.find({
        $or: [
            { firstName: { $regex: `.*${filter.searchValue}.*` } },
            { lastName: { $regex: `.*${filter.searchValue}.*` } }
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
    const result: IOrder[] = await Order.find({})
    return result
}

const createOne = async (data: any) => {
    const result: IOrder = await Order.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IOrder = await Order.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteAll = async () => {
    const result = await Order.deleteMany({})
    return result
}

const deleteOne = async (_id: any) => {
    const result = await Order.deleteOne({
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