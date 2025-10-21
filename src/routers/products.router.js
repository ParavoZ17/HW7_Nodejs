import { getProductsController, addProductController } from "../controllers/getProducts.controller.js";

import { Router } from "express";

const productsRouter = Router();

productsRouter.get('/',getProductsController)

productsRouter.post('/',addProductController)

export default productsRouter;