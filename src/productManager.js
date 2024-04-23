import fs from "fs";

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Todos los campos son obligatorios');
            return;
        }

        // Validar que no se repita el campo "code"
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.error('El código de producto ya existe');
            return;
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        console.log('Producto agregado:', newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error('Producto no encontrado');
        }
        return product;
    }
}

// Ejemplo de uso

const updateProduct = async (id, dataProduct) => {
    await getProducts();
    const index = products.findIndex((product) => product.id === id);
    products[index] = {
      ...products[index],
      ...dataProduct,
    };
  
    await fs.promises.writeFile(pathFile, JSON.stringify(products));
  };
  
  const deleteProduct = async (id) => {
    await getProducts();
    products = products.filter((product) => product.id !== id);
    await fs.promises.writeFile(pathFile, JSON.stringify(products));
  };
  
  export default {
    addProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
  };