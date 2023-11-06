const Termsofservices = require('../model/termsofservices');

// Generate Terms of services
const generateTermsofservices = async (req, res)=>{
  const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;

  try{
      const termsofservices = await Termsofservices.create({
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
      return res.status(500).json({ error:'Error generating terms of services!', success: false})
  }
};


// Fetch terms of services

const fetchTermsofservices = async (req, res) => {
    try {
      const termsofservices = await Termsofservices.find();
  
      if (!termsofservices) {
        return res.status(404).json({ message: 'Terms of services not found' });
      }
  
      return res.json({ termsofservices });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error', success: false });
    }
};

// Edit Terms of services
const editTermsofservices = async (req, res) => {
    try {
      const termsofservicesId = req.params['id'];
      // const updateTermsofservices = req.body; // Update terms of services from request body

      // Use findByIdAndUpdate to update the terms of services
      const updatedTermsofservices = await Termsofservices.findByIdAndUpdate(
        {_id: termsofservicesId}, req.body,
        // updateTermsofservices,
        { new: true,runValidators :true } // Return the updated terms of services
      );
  
      if (!updatedTermsofservices) {
        return res.status(404).json({ message: 'Terms of services not found' });
      }
  
      return res.json({ message: 'Terms of services updated', termsofservices: updatedTermsofservices , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating terms of services' , success: false});
    }
};

// Delete Terms of services

const deleteTermsofservices = async (req, res) => {
    try {
      const { termsofservicesId } = req.params;
  
      // Use findByIdAndDelete to delete the terms of services
      const deletedTermsofservices = await Termsofservices.findByIdAndDelete(
        termsofservicesId
      );
  
      if (!deletedTermsofservices) {
        return res.status(404).json({ message: 'Terms of services not found' });
      }
  
      return res.json({ msg: 'Terms of services deleted', termsofservices: deletedTermsofservices , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting terms of services', success:false });
    }
};


module.exports = {
    generateTermsofservices,
    fetchTermsofservices,
    editTermsofservices,
    deleteTermsofservices
}
