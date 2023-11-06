const Cookiepolicy = require('../model/cookiepolicy');

// Generate Cookiepolicy
const generateCookiepolicy = async (req, res)=>{
    const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;
  
    try{
        const cookiepolicy = await Cookiepolicy.create({
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
        return res.status(500).json({ error:'Error generating Cookiepolicy!', success: false})
    }
  };


// Fetch Cookiepolicy

const fetchCookiepolicy = async (req, res) => {
    try {
      const cookiepolicy = await Cookiepolicy.find();
  
      if (!cookiepolicy) {
        return res.status(404).json({ message: 'Cookiepolicy not found' });
      }
  
      return res.json({ cookiepolicy });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching Cookiepolicy', success: false });
    }
};

// Edit Cookiepolicy
const editCookiepolicy = async (req, res) => {
    try {
      const cookiepolicyId = req.params['id'];
      // const updateCookiepolicy = req.body; // Update Cookiepolicy from request body

      // Use findByIdAndUpdate to update the Cookiepolicy
      const updatedCookiepolicy = await Cookiepolicy.findByIdAndUpdate(
        {_id: cookiepolicyId}, req.body,
        // updateCookiepolicy,
        { new: true,runValidators :true } // Return the updated Cookiepolicy
      );
  
      if (!updatedCookiepolicy) {
        return res.status(404).json({ message: 'Cookiepolicy not found' });
      }
  
      return res.json({ message: 'Cookiepolicy updated successfully', cookiepolicy: updatedCookiepolicy , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating Cookiepolicy' , success: false});
    }
};

// Delete Cookiepolicy

const deleteCookiepolicy = async (req, res) => {
    try {
      const cookiepolicyID = req.params['id'];
  
      // Use findByIdAndDelete to delete the Cookiepolicy
      const deletedCookiepolicy = await Cookiepolicy.findByIdAndDelete({_id: cookiepolicyID});
  
      if (!deletedCookiepolicy) {
        return res.status(404).json({ message: 'Cookiepolicy not found' });
      }
  
      return res.json({ msg: 'Cookiepolicy deleted', cookiepolicy: deletedCookiepolicy , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting Cookiepolicy', success:false });
    }
};


module.exports = {
    generateCookiepolicy,
    fetchCookiepolicy,
    editCookiepolicy,
    deleteCookiepolicy
}
