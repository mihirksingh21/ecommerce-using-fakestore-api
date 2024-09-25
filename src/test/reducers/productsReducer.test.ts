import productsReducer, { addNewProduct, cleanUpProductReducer, fetchAllProducts, sortProductByPrice, updateExistingProduct } from "../../redux/reducers/productsReducer"

import store from "../../redux/store"
import { invalidProduct, newProduct, newProduct2, product1, product2, product3, product4, product5, updateProduct } from "../data/products"
import productServer from "../mock/productServer"

beforeAll(() => {
    productServer.listen()
})

afterAll(() => {
    productServer.close()
})

beforeEach(() => {
    store.dispatch(cleanUpProductReducer)
})

describe("Testing productsReducer", () => {
    test("Check initialState", () => {
        const state = productsReducer(undefined, { type: "unknown" })
        expect(state).toEqual({
            products: [],
            loading: false,
            error: ""
        })
    })
    test("Check should fetch all products", async () => {
        await store.dispatch(fetchAllProducts({ offset: 0, limit: 12 })); // Pass the required argument
        expect(store.getState().productsReducer.products.length).toBe(5);
        expect(store.getState().productsReducer.products).toEqual([product1, product2, product3, product4, product5]);
        expect(store.getState().productsReducer.loading).toBeFalsy();
        expect(store.getState().productsReducer.error).toBeFalsy();
    })
// Ensure to pass both the file and product
test("Check should add new product", async () => {
    await store.dispatch(addNewProduct({ file: null, product: newProduct }))
    expect(store.getState().productsReducer.products.length).toBe(6)
    expect(store.getState().productsReducer.products[5].title).toBe("New Product 1")
})

test("Check should check if invalid product has been created", async () => {
    await store.dispatch(addNewProduct({ file: null, product: invalidProduct }))
    expect(store.getState().productsReducer.products.length).toBe(6)
    expect(store.getState().productsReducer.error.length).toBeGreaterThan(0)
    expect(store.getState().productsReducer.error).toBe(JSON.stringify(
        {
            statusCode: 400,
            message: [
                "Price must be greater than 0",
                "Images must contain at least 1 image.",
                "Category does not exist"
            ],
            error: "Bad Request"
        }
    ))
})
}) 