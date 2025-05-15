import { randomUUID } from 'node:crypto'
import shoes from '../../shoes.json' assert { type: 'json' };


export class ShoeModel {
    // list all
    static getAll = async ({ category }) => {
        if (category) {
            return shoes.filter(
                shoe => shoe.category.some(g => g.toLowerCase() == category.toLowerCase())
            )
        }
        return shoes
    }
    // filter by id
    static async  getById ({id}) {
        const shoe = shoes.find(shoe => shoe.id == id)
        return shoe
    }
    // create movie
    static async create (input) {
        const newShoe = {
            id: randomUUID(), 
            ...input
          } 
          return newShoe
    }

    static async delete ({ id }) {
        const shoeIndex = shoes.findIndex(shoe => shoe.id == id)
        if (shoeIndex == -1) return false
    movies.splice(shoeIndex, 1)
    return true
    }

    static async update ({ id, input }){
        const soheIndex = shoes.findIndex(shoe => shoe.id == id)
        if(soheIndex == -1) return false

        shoes [soheIndex] = {
            ...shoes [soheIndex],
            ...input
        }
        
        return shoes[soheIndex]
    }
}