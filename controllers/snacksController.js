const express = require("express");
const snacks = express.Router();
const {
    getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack
} = require("../queries/snacks");

// WILL IMPORT VALIDATION WHEN READY
// const { } = require("../validations/checkSnacks");

// GET ALL
snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks(req.query);
    if (allSnacks[0]) {
        res.status(200).json(allSnacks);
    } else {
        res.status(500).json({ error: "server error" });
    };
});

// SHOW ONE
snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const snack = await getSnack(id);
    if (snack) {
        res.status(200).json(snack);
    } else {
        res.status(404).json({ error: "snack not found" });
    };
});

// CREATE NEW
snacks.post("/", async (req, res) => {
    if (req.body) {
        const newSnack = await createSnack(req.body);
        res.status(200).json(newSnack);
    } else {
        res.status(404).json({ error: "cannot create snack" });
    };
});

// DELETE
snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack.id) {
        res.status(200).json(deletedSnack);
    } else {
        res.status(404).json({ error: "cannot delete snack" });
    };
});

// UPDATE
snacks.put("/:id", async (req, res) => {
    const { id } = req.params;
    if (req.body) {
        const updatedSnack = await updateSnack(id, req.body);
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({ error: "cannot update snack" });
    };
});

module.exports = snacks;
