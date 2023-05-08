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
const getSnack = async () => {
    try {
            const oneSnack = await db.one("SELECT * F")
    } catch (error) {
        return error;
    };
};

// CREATE
const getSnack = async () => {
    try {
        
    } catch (error) {
        return error;
    };
};

// DELETE
const getSnack = async () => {
    try {
        
    } catch (error) {
        return error;
    };
};

// UPDATE
const getSnack = async () => {
    try {
        
    } catch (error) {
        return error;
    };
};
