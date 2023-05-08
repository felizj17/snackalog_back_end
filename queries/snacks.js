const db = require("../db/dbConfig");

// GET ALL 
const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");  //MIGHT need to change after we name DB & TABLE
        return allSnacks;
    } catch (error) {
        return error;
    };
};

// SHOW ONE
const getSnack = async (id) => {
    try {
        const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
        return oneSnack;
    } catch (error) {
        return error;
    };
};

// CREATE
const createSnack = async (snack) => {
    try {
        const newSnack = await db.one(
            "INSERT INTO bookmarks (name, category, sugar, protein, fiber, is_vegan, is_vegetarian, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [snack.name,
            snack.category,
            snack.sugar,
            snack.protein,
            snack.fiber,
            snack.is_vegan,
            snack.is_vegetarian,
            snack.is_favorite]
        );
        return newSnack;
    } catch (error) {
        return error;
    };
};

// DELETE
const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one(
            "DELETE FROM snacks WHERE id=$1 RETURNING *",
            id
        );
        return deletedSnack;
    } catch (error) {
        return error;
    };
};

// UPDATE
const updateSnack = async (id, snack) => {
    try {
        const updatedSnack = await db.one(
            "UPDATE snacks SET name=$1, category=$2, sugar=$3, protein=$4, fiber=$5, is_vegan=$6, is_vegetarian=$7, is_favorite=$8",
            [snack.name,
            snack.category,
            snack.sugar,
            snack.protein,
            snack.fiber,
            snack.is_vegan,
            snack.is_vegetarian,
            snack.is_favorite]
        )
    } catch (error) {
        return error;
    };
};

module.exports = { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack }
