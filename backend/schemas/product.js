import z from 'zod'

 //validacion con 'zod'
    const productSchema = z.object({ //objeto Product que se va a recibir
        product_name: z.string({  
            invalid_type_error: 'product_name must be a string',//mensajes de error opcionales
            required_error:'product_name is required'
        }),
        gender:z.array(
            z.enum(['male', 'female']), 
            {
                required_error: 'category is required',
                invalid_type_error: 'category must be an array of enum gender'
            }
        )

            // ⬇️ CAMBIO 1: GENERO OPCIONAL
        .optional().refine(
            (val) => !(val && val.length === 0),
            { message: 'gender cannot be empty if provided' }
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
            z.enum(['bags', 'shoes','complements','accessories']), 
            {
                required_error: 'category is required',
                invalid_type_error: 'category must be an array of enum gender'
            }
        ),
        stock: z.number({
            invalid_type_error: 'stock must be a number',
            required_error: 'stock is required'
        }).positive('stock must be a positive number')
    })

    // ⬇️ CAMBIO 2: validacio cruzada para que el genero sea obligatorio si esta en categoria SHOES
    .refine(
        (data) => {
            if (data.category.includes('shoes')) {
                return data.gender && data.gender.length > 0;
            }
            return true;
        },
        { message: 'gender is required when category includes shoes' }
    )

    export function validateProduct(object){
        return productSchema.safeParseAsync(object) //safeParse devuelve si la operación tuvo éxito
    }

    export function validatePartialProduct (object) {
        return productSchema.partial().safeParse(object) // partial si no está no le da importancia, si está me la valida
    }


    