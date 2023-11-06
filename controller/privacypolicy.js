const Privacypolicy = require('../model/privacypolicy');

// Generate return and refund policy
const generatePrivacypolicy = async (req, res)=>{
    const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;
  
    try{
        const privacypolicy = await Privacypolicy.create({
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
        return res.status(500).json({ error:'Error generating privacy policy!', success: false})
    }
  };
  


// Fetch privacy policy

const fetchPrivacypolicy = async (req, res) => {
    try {
      const privacypolicy = await Privacypolicy.find();
  
      if (!privacypolicy) {
        return res.status(404).json({ message: 'Privacy policy not found' });
      }
  
      return res.json({ privacypolicy });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching privacy policy', success: false });
    }
};

// Edit privacy policy
const editPrivacypolicy = async (req, res) => {
    try {
      const privacypolicyId = req.params['id'];
      // const updatePrivacypolicy = req.body; // Update privacy policy from request body

      // Use findByIdAndUpdate to update the privacy policy
      const updatedPrivacypolicy = await Privacypolicy.findByIdAndUpdate(
        {_id: privacypolicyId}, req.body,
        // updatePrivacypolicy,
        { new: true,runValidators :true } // Return the updated privacy policy
      );
  
      if (!updatedPrivacypolicy) {
        return res.status(404).json({ message: 'Privacy policy not found' });
      }
  
      return res.json({ message: 'Privacy policy updated', privacypolicy: updatedPrivacypolicy , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating privacy policy' , success: false});
    }
};

// Delete privacy policy

const deletePrivacypolicy = async (req, res) => {
    try {
      const { privacypolicyId } = req.params;
  
      // Use findByIdAndDelete to delete the privacy policy
      const deletedPrivacypolicy = await Privacypolicy.findByIdAndDelete(
        privacypolicyId
      );
  
      if (!deletedPrivacypolicy) {
        return res.status(404).json({ message: 'Privacy policy not found' });
      }
  
      return res.json({ msg: 'Privacy policy deleted', privacypolicy: deletedPrivacypolicy , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting privacy policy', success:false });
    }
};


module.exports = {
    generatePrivacypolicy,
    fetchPrivacypolicy,
    editPrivacypolicy,
    deletePrivacypolicy
}
