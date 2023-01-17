const Employees = require("../models/employee")

const handlers = {
    getEmployees: async (req, res, next) => {
        let data = [];

        try{
            data = await Employees.find();
            res.status(200).json(data);
        } catch(err) {
            res.status(500).json({
                error: err
            });
        }
    },
    getEmployee: async (req, res, next) => {
        try{
            await Employees.findOne({ssn: req.params.ssn})
            .then((employee) => {
                if(employee !== null)
                    res.json(employee);
                else
                    res.json({
                        "message": "No employee found with SSN: " + req.params.ssn
                    });
            });
        } catch (err) {
            res.status(500).json({
                error: err
            });
        }
    },
    createEmployee: async (req, res, next) => {
        await Employees.create(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            if(err.errors)
                res.json({
                    error: ""
                });
            else
                res.json({
                    error: "SSN must be unique"
                });
        })
    },
    deleteEmployee: async (req, res, next) => {
        try{
            await Employees.findOne({ssn: req.params.ssn})
            .then((employee) => {
                if(employee !== null)
                    Employees.deleteOne({ssn: req.params.ssn})
                    .then(async (data) => {
                        let emps = [];
                        emps = await Employees.find();
                        
                        res.json(emps);
                    });
                else
                    res.json({
                        "message": "No employee found with SSN: " + req.params.ssn
                    });
            });
        } catch(err) {
            res.status(500).json({
                error: err
            });
        }
    },
    updateEmployee: async (req, res, next) => {
        try{
            await Employees.findOne({ssn: req.body.ssn})
            .then((employee) => {
                if(employee !== null)
                    Employees.updateOne({ssn: req.body.ssn}, req.body)
                    .then((data) => {
                        res.json({
                            message: "Edited the employee with SSN: " + req.body.ssn + " successfully"
                        });
                    });
                else
                    res.json({
                        "message": "No employee found with SSN: " + req.params.ssn
                    });
            });
        } catch(err) {
            res.status(500).json({
                error: err
            });
        }
    }
}

module.exports = handlers;