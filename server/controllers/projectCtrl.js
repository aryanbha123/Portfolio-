const projects = require('../model/project');


const projectsCtrl = {
    getProjects: async (req,res) => {
        try{
            const products =await projects.find({});
            res.status(200).json({success:true , products})
        }catch(err){
            res.status(400).json({success:true , msg : "Error Fetching Projects "});
        }
    },
    getProject: async (req, res) => {
        res.send('hello 2')
    }
}


module.exports = projectsCtrl;