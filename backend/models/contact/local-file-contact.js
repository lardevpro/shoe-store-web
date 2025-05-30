import fs from 'fs'

const data = fs.readFileSync('./db/contact-form-info.json', 'utf-8')
const products = JSON.parse(data)
console.log('JSON file contact form uploaded')

export class ContactFormModel {

    
}