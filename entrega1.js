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
const productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción del Producto 1', 10, 'ruta/imagen1.jpg', 'P001', 100);
productManager.addProduct('Producto 2', 'Descripción del Producto 2', 20, 'ruta/imagen2.jpg', 'P002', 50);
productManager.addProduct('Producto 3', 'Descripción del Producto 3', 30, 'ruta/imagen3.jpg', 'P003', 200);

console.log('Todos los productos:', productManager.getProducts());
console.log('Producto con ID 2:', productManager.getProductById(2));
console.log('Producto con ID 4:', productManager.getProductById(4));




