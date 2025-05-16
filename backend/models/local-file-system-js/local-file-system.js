import { randomUUID } from 'node:crypto'
import fs from 'fs'

const data = fs.readFileSync('./product.json', 'utf-8');
const products = JSON.parse(data);
console.log('JSON file uploaded');

export class ProductModel {
    // list all
    static async getAll({ category }) {
        if (category) {
            return products.filter(
                product => product.category.some(
                    c => c.toLowerCase() === category.toLowerCase()
                )
            );
        }
        return products;
    }

    // filter by id
    static async getById({ id }) {
        const product = products.find(product => product.id === id);
        return product;
    }

    // create product
    static async create(input) {
        const newProduct = {
            id: randomUUID(),
            ...input
        };
        // Aquí deberías guardar de nuevo en el archivo si es necesario
        products.push(newProduct);
        return newProduct;
    }

    // delete product
    static async delete({ id }) {
        const productIndex = products.findIndex(product => product.id === id);
        if (productIndex === -1) return false;

        products.splice(productIndex, 1);
        return true;
    }

    // update product
    static async update({ id, input }) {
        const productIndex = products.findIndex(product => product.id === id);
        if (productIndex === -1) return false;

        products[productIndex] = {
            ...products[productIndex],
            ...input
        };

        return products[productIndex];
    }
}
