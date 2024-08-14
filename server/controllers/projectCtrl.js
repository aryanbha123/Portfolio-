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
        try{
            // const id = req.query.id;
            const id = req.query.id; // 
            const product = await projects.findOne({_id:id});
            if (product) {
                res.status(200).json({success:true , product});
            }else{
                res.status(200).json({success:true , msg: "Cannot be found"});
            }
        }catch(err){
            res.status(400).json({success:false , msg : "Bad request" })
        }
    }
}


module.exports = projectsCtrl;