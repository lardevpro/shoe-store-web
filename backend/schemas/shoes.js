import z from 'zod'

 //validacion con 'zod'
    const shoeSchema = z.object({ //objeto que se va a recibir
        product_name: z.string({  
            invalid_type_error: 'product_name must be a string',//mensajes de error opcionales
            required_error:'product_name is required'
        }),
        sex:z.array(
            z.enum(['male', 'female']), 
            {
                required_error: 'category is required',
                invalid_type_error: 'category must be an array of enum genre'
            }
        ),
        description: z.string({  
            invalid_type_error: 'description must be a string',
            required_error:'description is required'
        }),
        brand: z.string({  
            invalid_type_error: 'brand must be a string',
            required_error:'brand is required'
        }),
        price: z.number({
            invalid_type_error: 'price must be a number',
            required_error:'price is required'
        }).positive('price must be a positive number'),
        size: z.number({
            invalid_type_error:'size must be a number',
            required_error: 'size is required'
        }).min(30, 'size must be at least 30').max(50, 'size must be at most 50'),
        image: z.string().url({
            message: 'Image must be a valid URL'
        }).nullable(),
        category: z.array(
            z.enum(['bags', 'sohes','complements','accessories']), 
            {
                required_error: 'category is required',
                invalid_type_error: 'category must be an array of enum genre'
            }
        ),
        stock: z.number({
            invalid_type_error: 'stock must be a number',
            required_error: 'stock is required'
        }).positive('stock must be a positive number')
    })

    export function validateShoe(object){
        return shoeSchema.safeParseAsync(object) //safeParse devuelve si la operación tuvo éxito
    }

    export function validatePartialShoe (object) {
        return shoeSchema.partial().safeParse(object) // partial si no está no le da importancia, si está me la valida
    }


    