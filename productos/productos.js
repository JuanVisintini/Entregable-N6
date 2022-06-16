let listaProdutos = [
    {
      id: 1,
      title: "Producto 1",
      price: 100,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Producto 2",
      price: 100,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Producto 3",
      price: 100,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Producto 4",
      price: 100,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Producto 5",
      price: 100,
      thumbnail: "https://via.placeholder.com/150",
    },
  ];


class Productos {
    constructor(id, title, price, thumbnail) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.thumbnail = thumbnail;
    }
  }
  
  const getAllProductos = async (req, res) => {
    try {
      res.json({ listaProdutos });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
        message: `El error es ${error}`,
      });
    }
  };
  
  const getProductById = (req, res) => {
    try {
      const id = req.params.id;
      let prodcutoById = listaProdutos.find((product) => product.id == id);
      if (prodcutoById === undefined) throw new Error("Producto no encontrado");
      else res.status(200).send({ producto: prodcutoById });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  };
  
  const addProduct = (req, res) => {
    try {
      const { title, price, thumbnail } = req.body; 

        const id = listaProdutos[listaProdutos.length - 1].id + 1;

        listaProdutos.push({id, title, price, thumbnail});
        
        res.status(201).json({ id, title, price, thumbnail });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
  };
  
  
  const updateProducto = (req, res) => {
    try {
      const id = req.params.id;
      const { title, price,thumbnail   } = req.body;

  
      let productoById = listaProdutos.find((product) => product.id == id);
      if (productoById == undefined) throw new Error("Producto no encontrado");
      else {
          const productoUpDate = new Productos(
            productoById.id,
            title,
            price,
            thumbnail
          );
          let index = listaProdutos.findIndex(
            (product) => product.id == productoUpDate.id
          );
          //Borro el producto viejo por id y lo agrego con el nuevo producto
          listaProdutos.splice(index, 1, productoUpDate);
          res.status(201).json({ message: "Producto actualizado" });
      }
    } catch (error) {
      return res.status(400).json({
        erorr: error.message,
      });
    }
  };
  
  const deleteById = (req, res) => {
    try {
        const id = Number(req.params.id)

        if(listaProdutos.find((prod) => prod.id === id)){
            listaProdutos = listaProdutos.filter((prod) => prod.id !== id);
            res.status(200).json({message: "Producto eliminado"});
        }else{
            res.status(404).json({ message: "no existe ese producto"})
        }
    } catch (error) {
      return res.status(400).json({
      error: error.message,
        
      });
    }
  };

  module.exports = {
    getAllProductos,
    getProductById,
    addProduct,
    updateProducto,
    deleteById,
  };