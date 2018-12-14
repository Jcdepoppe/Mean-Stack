const Author = require("./models");

module.exports = {
  all: function(req, res) {
    Author.find({})
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  show: function(req, res) {
    Author.findById(req.params.id)
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  create: function(req, res) {
    Author.create(req.body)
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  update: function(req, res) {
    Author.findByIdAndUpdate({ _id: req.params.id }, req.body, {runValidators: true})
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  destroy: function(req, res) {
    Author.findByIdAndDelete(req.params.id)
      .then(data => {
        res.json({ message: "Success" });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  
  createQuote: function(req, res) {
    Author.findByIdAndUpdate(
      req.params.aid,
      {
        $push: {
          quotes: {
            content: req.body.content,
            votes: 0
          }
        }
      },
      {runValidators: true}
    ).then(data => {
      res.json({ message: "Success" });
    })
    .catch(err => {
      res.json({ message: "Error", error: err });
    });
  },

  deleteQuote: function(req, res) {
    Author.findByIdAndUpdate(
      req.params.aid,
      {
        $pull: {
          quotes: {
            _id: req.params.qid
          } 
        }
      }
    ).then(data => {
      res.json({message: "Success"});
    }).catch(err => {
      res.json({message: "Error", error: err});
    });
  },

  vote: function(req, res) {
    Author.findOneAndUpdate(
      {"_id": req.params.aid, "quotes._id": req.params.qid},
      {
        $set: { 
          "quotes.$.content": req.body.content,
          "quotes.$.votes": req.body.votes
        }
      },
      {runValidators: true}
    ).then(data => {
      res.json({message: "Success"});
    }).catch(err => {
      res.json({message: "Error", error: err});
    });
  },

  angular: function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  }
};
