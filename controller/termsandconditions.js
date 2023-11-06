const Termsandconditions = require('../model/termsandconditions');

// Generate Terms and conditions
const generateTermsandconditions = async (req, res)=>{
  const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;

  try{
      const termsandconditions = await Termsandconditions.create({
          websiteURL, 
          websitename, 
          appname, 
          companyname, 
          companyaddress, 
          country, 
          date, 
          email, 
          phonenumber, 
          websitepage,
          address
      });
      return res.status(200).json({ alert:'Proceed to make payment!!!', success: true });
  }catch(error) {
      console.error(error);
      return res.status(500).json({ error:'Error generating terms and conditions!', success: false})
  }
};


// Fetch terms and conditions

const fetchTermsandconditions = async (req, res) => {
    try {
      const termsandconditions = await Termsandconditions.find();
  
      if (!termsandconditions) {
        return res.status(404).json({ message: 'Terms and conditions not found' });
      }
  
      return res.json({ termsandconditions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error', success: false });
    }
};

// Edit Terms of and conditions
const editTermsandconditions = async (req, res) => {
    try {
      const termsandconditionsId = req.params['id'];
      // const updateTermsandconditons = req.body; // Update terms and conditions from request body

      // Use findByIdAndUpdate to update the terms and conditions
      const updatedTermsandconditions = await Termsandconditions.findByIdAndUpdate(
        {_id: termsandconditionsId}, req.body,
        // updatedTermsandconditions,
        { new: true,runValidators :true } // Return the updated terms and conditions
      );
  
      if (!updatedTermsandconditions) {
        return res.status(404).json({ message: 'Terms and conditions not found' });
      }
  
      return res.json({ message: 'Terms and conditions updated', termsofservices: updatedTermsofservices , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating terms and conditions' , success: false});
    }
};

// Delete Terms of services

const deleteTermsandconditions = async (req, res) => {
    try {
      const { termsandconditionsId } = req.params;
  
      // Use findByIdAndDelete to delete the terms and conditions
      const deletedTermsandconditions = await Termsandconditions.findByIdAndDelete(
        termsandconditionsId
      );
  
      if (!deletedTermsandconditions) {
        return res.status(404).json({ message: 'Terms and conditions not found' });
      }
  
      return res.json({ msg: 'Terms and conditions deleted', termsandconditions: deletedTermsandconditions , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting terms and conditions', success:false });
    }
};


module.exports = {
    generateTermsandconditions,
    fetchTermsandconditions,
    editTermsandconditions,
    deleteTermsandconditions
}