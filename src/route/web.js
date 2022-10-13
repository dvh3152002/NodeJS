import express from "express";
import homeController, { aboutPage } from "../controllers/homeController"

let router=express.Router();

let initWebRoutes = (app) => {
    router.get('/',homeController.getHomePage);

    router.get('/vd2', (req,res)=>{
        return res.send('Hello VD2')
    });

    router.get('/about',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;