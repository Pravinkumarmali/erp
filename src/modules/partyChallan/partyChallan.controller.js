import * as challanService from "./partyChallan.service.js";

// CREATE
export const createChallan = async (req, res, next) => {
  try {

    const challan = await challanService.createChallan(req.body);

    res.status(201).json({
      success: true,
      message: "Challan created successfully",
      data: challan,
    });

  } catch (error) {
    next(error);
  }
};


// GET ALL
export const getAllChallans = async (req, res, next) => {
  try {

    const challans = await challanService.getAllChallans();

    res.json({
      success: true,
      count: challans.length,
      data: challans,
    });

  } catch (error) {
    next(error);
  }
};


// GET ONE
export const getChallanById = async (req, res, next) => {
  try {

    const challan = await challanService.getChallanById(req.params.id);

    if (!challan) {
      return res.status(404).json({
        success: false,
        message: "Challan not found",
      });
    }

    res.json({
      success: true,
      data: challan,
    });

  } catch (error) {
    next(error);
  }
};


// UPDATE
export const updateChallan = async (req, res, next) => {
  try {

    const challan = await challanService.updateChallan(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Challan updated",
      data: challan,
    });

  } catch (error) {
    next(error);
  }
};


// DELETE
export const deleteChallan = async (req, res, next) => {
  try {

    await challanService.deleteChallan(req.params.id);

    res.json({
      success: true,
      message: "Challan deleted",
    });

  } catch (error) {
    next(error);
  }
};