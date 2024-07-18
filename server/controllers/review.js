const reviews = require('../model/review');

const ctrl = {
    fetchReview: async (req, res) => {
        try {
            const response = await reviews.find();
            res.send(response);
        } catch (err) {
            res.status(400).json({ success: false, msg: "Could Not Fetch", err });
        }
    },

    addReview: async (req, res) => {
        try {
            const { id, name,projectId, pic, review, rate } = req.body;

            const data = await reviews.findOne({ id:id , projectId:projectId });

            if (data) { return res.json({ success: false, msg: "Review Already Added" }); }

            const rev = new reviews({
                id,
                name,
                projectId:projectId,
                displayPic: pic,
                review,
                rate
            });

            await rev.save();

            res.status(200).json({ success: true, msg: "Review Added Successfully" });
        } catch (err) {
            res.status(400).json({ success: false, msg: "Error Adding Review", err });
        }
    },
    updateReview: async (req, res) => {
        try {
            const { id, name, pic, review, rate } = req.body;
            const updated = await reviews.findOneAndUpdate({ id: id }, {
                name,
                id,
                displayPic: pic,
                review,
                rate
            },
                { new: true }
            );
            if (!updated) return res.status(200).json({ success: false, msg: "Review could not be updated " });

            return res.status(200).json({ success: true, msg: "Review Updated Successfully " });
        } catch (err) {
            res.status(400).json({ success: false, msg: "Error Updating Review " })
        }
    },

    dltReview: async (req, res) => {
        try {

            const { id } = req.body;
            const review = reviews.deleteOne({ _id: id });
            return res.status(200)
        } catch (err) {
            return res.status(400)
        }
    }
};

module.exports = ctrl;
