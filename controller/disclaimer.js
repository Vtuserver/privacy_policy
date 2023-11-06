const Disclaimer = require('../model/disclaimer');

// Generate Disclaimer
const generateDisclaimer = async (req, res)=>{
    const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;
  
    try{
        const disclaimer = await Disclaimer.create({
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
        return res.status(500).json({ error:'Error generating Disclaimer!', success: false})
    }
  };


// Fetch Dislcaimer

const fetchDisclaimer = async (req, res) => {
    try {
      const dislcaimer = await Dislcaimer.find();
  
      if (!dislcaimer) {
        return res.status(404).json({ message: 'Dislcaimer not found' });
      }
  
      return res.json({ dislcaimer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching Dislcaimer', success: false });
    }
};

// Edit Dislcaimer
const editDisclaimer = async (req, res) => {
    try {
      const dislcaimerId = req.params['id'];
      // const updateDislcaimer = req.body; // Update Dislcaimer from request body

      // Use findByIdAndUpdate to update the Dislcaimer
      const updatedDislcaimer = await Dislcaimer.findByIdAndUpdate(
        {_id: dislcaimerId}, req.body,
        // updateDislcaimer,
        { new: true,runValidators :true } // Return the updated EULA
      );
  
      if (!updatedDislcaimer) {
        return res.status(404).json({ message: 'Dislcaimer not found' });
      }
  
      return res.json({ message: 'Dislcaimer updated', dislcaimer: updatedDislcaimer , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating Dislcaimer' , success: false});
    }
};

// Delete Dislcaimer

const deleteDisclaimer = async (req, res) => {
    try {
      const {dislcaimerId } = req.params;
  
      // Use findByIdAndDelete to delete the Dislcaimer
      const deletedDislcaimer = await Disclaimer.findByIdAndDelete(
        dislcaimerId
      );
  
      if (!deletedDislcaimer) {
        return res.status(404).json({ message: 'Dislcaimer not found' });
      }
  
      return res.json({ msg: 'Dislcaimer deleted', dislcaimer: deletedDislcaimer , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting Dislcaimer', success:false });
    }
};


module.exports = {
    generateDisclaimer,
    fetchDisclaimer,
    editDisclaimer,
    deleteDisclaimer
}
