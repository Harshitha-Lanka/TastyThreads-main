
//code for your home controller
const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "home page" });
    } catch (error) {
      console.log(error);
    }
  };


  //code for your signup controller
  const signup = async (req, res) => {
    try {
        console.log(req.body)
      res.status(200).send({ message: req.body });
    } catch (error) {
      res.status(500).json({ message: "error loading the page" });
    }
  };


  const recipeform = async (req, res) => {
    try {
      res.status(200).send({ message: "recipe page" });
    } catch (error) {
      res.status(500).json({ message: "error loading the page" });
    }
  };
  
  
  module.exports = { home, signup , recipeform };