const Returnandrefundpolicy = require('../model/returnandrefundpolicy');

// Generate return and refund policy
const generateReturnandrefundpolicy = async (req, res)=>{
    const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;
  
    try{
        const returnandrefundpolicy = await Returnandrefundpolicy.create({
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
        return res.status(500).json({ error:'Error generating return and refund policy!', success: false})
    }
  };
  
  
// Fetch Return and Refund policy

const fetchReturnandrefundpolicy = async (req, res) => {
    try {
      const returnandrefundpolicy = await Returnandrefundpolicy.find();
  
      if (!returnandrefundpolicy) {
        return res.status(404).json({ message: 'Return and refund Policy not found' });
      }
  
      return res.json({ returnandrefundpolicy });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error', success: false });
    }
};

// Edit Return and Refund policy
const editReturnandrefundpolicy = async (req, res) => {
    try {
      const ReturnandrefundpolicyId = req.params['id'];
      // const updateReturnandrefundpolicy = req.body; // Update Return and Refund policy from request body

      // Use findByIdAndUpdate to update the Return and Refund policy
      const updatedReturnandrefundpolicy = await Returnandrefundpolicy.findByIdAndUpdate(
        {_id: ReturnandrefundpolicyId}, req.body,
        // updateReturnandrefundpolicy,
        { new: true,runValidators :true } // Return the updated Return and Refund policy
      );
  
      if (!updatedReturnandrefundpolicy) {
        return res.status(404).json({ message: 'Return and refund policy not found' });
      }
  
      return res.json({ message: 'Return and Refund policy updated', returnandrefundpolicy: updatedReturnandrefundpolicy , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating Return and Refund policy' , success: false});
    }
};

// Delete Terms of services

const deleteReturnandRefundpolicy = async (req, res) => {
    try {
      const { returnandrefundpolicyId } = req.params;
  
      // Use findByIdAndDelete to delete the Return and Refund policy
      const deletedReturnandrefundpolicy = await Returnandrefundpolicy.findByIdAndDelete(
        returnandrefundpolicyId
      );
  
      if (!deletedReturnandrefundpolicy) {
        return res.status(404).json({ message: 'Return and Refund policy not found' });
      }
  
      return res.json({ msg: 'Return and Refund policy deleted', returnandrefundpolicy: deletedReturnandrefundpolicy , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting Return and Refund policy', success:false });
    }
};


module.exports = {
    generateReturnandrefundpolicy,
    fetchReturnandrefundpolicy,
    editReturnandrefundpolicy,
    deleteReturnandRefundpolicy
}