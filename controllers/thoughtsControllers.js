
const { User,Thoughts} = require('../models');


module.exports = {
  // Get all thoughts
  async getallThoughs(req, res) {
    try {
      const allusers = await Thoughts.find();

      const userObj = {
       allusers
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThough(req, res) {
    try {
      const user = await Thoughts.findOne({ _id: req.params.thoughtId})
        .select('-__v');
console.log(req.params.thoughtId)
      if (!user) {
        return res.status(404).json({ message: 'No User with that ID' })
      }

      res.json({
        user
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },


  // create a new though
  async createThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: thought._id } },
        { new: true }
       
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found'});
      }
      
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
   },

   async deleteAllThoughts(req, res){
    try {
    const thoughts=  await Thoughts.deleteMany({});
      res.json({ message: 'All thoughts deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },





  // Delete thought
  async deleteThought(req, res) {
    try {
      const user = await Thoughts.findOneAndRemove({ _id: req.params.thoughtId});

      if (!user) {
        return res.status(404).json({ message: 'No user exists' });
      };
      res.json({
        user,message: 'User deleted'
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const user = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // create a new though
  async createReaction(req, res) {
    
      try {
        const thought = await Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          
          {$addToSet: {reactions: req.body } },
          { runValidators: true, new: true },
              
             console.log(req.body),
            
        );
       
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    },


    





  // Removereaction from a thought
  async deleteReaction(req, res) {
    try {
      const Thought= await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!Thought) {
        return res
          .status(404)
          .json({ message: 'No thought found with that ID :(' });
      }

      res.json(Thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

// // Thought routes
// app.get('/api/thoughts', async (req, res) => {
//   try {
//     const thoughts = await Thought.find();
//     res.json(thoughts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.get('/api/thoughts/:thoughtId', async (req, res) => {
//   try {
//     const thought = await Thought.findById(req.params.thoughtId);
//     if (!thought) {
//       return res.status(404).json({ message: 'Thought not found' });
//     }
//     res.json(thought);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.post('/api/thoughts', async (req, res) => {
//   try {
//     const thought = await Thought.create(req.body);
//     const user = await User.findByIdAndUpdate(
//       req.body.userId,
//       { $push: { thoughts: thought._id } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(thought);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.put('/api/thoughts/:thoughtId', async (req, res) => {
//   try {
//     const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!thought) {
//       return res.status(404).json({ message: 'Thought not found' });
//     }
//     res.json(thought);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.delete('/api/thoughts/:thoughtId', async (req, res) => {
//   try {
//     const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
//     if (!thought) {
//       return res.status(404).json({ message: 'Thought not found' });
//     }
//     const user = await User.findOneAndUpdate(
//       { username: thought.username },
//       { $pull: { thoughts: thought._id } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'Thought deleted' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });