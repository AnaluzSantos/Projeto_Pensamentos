const express = require("express");

const ThoughtsController = require("../controllers/ThoughtsController")

const router = express.Router();

// Rota responsável por redirecionar para a página de dashboard.
router.get("/thoughts/dashboard", ThoughtsController.dashboard)

// Rota responsável por redirecionar para página de cadastrar o pensamento. 
router.get("/thoughts-create", ThoughtsController.registerThought);

// Rota responsável por cadastrar o pensamento na aplicação.
router.post("/thoughts/create", ThoughtsController.createThought);

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThought);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

// Rota responsável por deletar um pensamento na aplicação.
router.post("/thoughts/remove/:id", ThoughtsController.deleteThought);

module.exports = router;