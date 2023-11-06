const Termsofuse = require('../model/termsofuse');

// Generate Terms of Use
const generateTermsofuse = async (req, res)=>{
    const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;

    try{
        const termsofuse = await Termsofuse.create({
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
        return res.status(500).json({ error:'Sever Error!!!', success: false})
    }
};

const accessTermsofuse = async (req, res) => {
    const { termsofuseId } = req.params;
  
    try {
      const termsofuse = await Termsofuse.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
            // Successfull Loggedin
      res.json({ message: ' successful', token, success:true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during ', success: false });
    }
};

// Fetch terms of use

const fetchTermsofuse = async (req, res) => {
    try {
      const termsofuse = await Termsofuse.find();
  
      if (!termsofuse) {
        return res.status(404).json({ message: 'Terms of use not found' });
      }
  
      return res.json({ termsofuse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error', success: false });
    }
};

// Edit Terms of use
const editTermsofuse = async (req, res) => {
    try {
      const termsofuseId = req.params['id'];
      // const updateTermsofuse = req.body; // Update terms of use from request body

      // Use findByIdAndUpdate to update the terms of use
      const updatedTermsofuse = await Termsofuse.findByIdAndUpdate(
        {_id: termsofuseId}, req.body,
        // updateTermsofuse,
        { new: true,runValidators :true } // Return the updated terms of use
      );
  
      if (!updatedTermsofuse) {
        return res.status(404).json({ message: 'Terms of use not found' });
      }
  
      return res.json({ message: 'Terms of use updated', termsofuse: updatedTermsofuse , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating terms of use' , success: false});
    }
};

// Delete Terms of use

const deleteTermsofuse = async (req, res) => {
    try {
      const { termsofuseId } = req.params;
  
      // Use findByIdAndDelete to delete the terms of use
      const deletedTermsofuse = await Termsofuse.findByIdAndDelete(
        termsofuseId
      );
  
      if (!deletedTermsofuse) {
        return res.status(404).json({ message: 'Terms of use not found' });
      }
  
      return res.json({ msg: 'Terms of use deleted', termsofuse: deletedTermsofuse , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting terms of use', success:false });
    }
};


module.exports = {
    generateTermsofuse,
    fetchTermsofuse,
    editTermsofuse,
    deleteTermsofuse
}
