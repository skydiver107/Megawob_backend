import { Country, ICountry } from '../models/country'

const findOneByID = async (_id: any) => {
    const result: ICountry = await Country.findOne({
        _id: _id
    })
    return result
}

const findByFilter = async (filter: any) => {
    const total = await Country.count({
        $or: [
            { key: { $regex: `.*${filter.searchValue}.*` } },
            { value: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })

    const rows: ICountry[] = await Country.find({
        $or: [
            { key: { $regex: `.*${filter.searchValue}.*` } },
            { value: { $regex: `.*${filter.searchValue}.*` } }
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
    const result: ICountry[] = await Country.find({})
    return result
}

const createOne = async (data: any) => {
    const result: ICountry = await Country.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: ICountry = await Country.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteAll = async () => {
    const result = await Country.deleteMany({})
    return result
}

const deleteOne = async (_id: any) => {
    const result = await Country.deleteOne({
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