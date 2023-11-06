const EULA = require('../model/EULA');

// Generate EULA
const generateEULA = async (req, res)=>{
    const {websiteURL, websitename, appname, companyname, companyaddress, country, date, email, phonenumber, websitepage, address} = req.body;
  
    try{
        const EULA = await EULA.create({
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
        return res.status(500).json({ error:'Error generating EULA!', success: false})
    }
  };


// Fetch EULA

const fetchEULA = async (req, res) => {
    try {
      const EULA = await EULA.find();
  
      if (!EULA) {
        return res.status(404).json({ message: 'EULA not found' });
      }
  
      return res.json({ EULA });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching EULA', success: false });
    }
};

// Edit EULA
const editEULA = async (req, res) => {
    try {
      const EULAId = req.params['id'];
      // const updateEULA = req.body; // Update EULA from request body

      // Use findByIdAndUpdate to update the EULA
      const updatedEULA = await EULA.findByIdAndUpdate(
        {_id: EULAId}, req.body,
        // updateEULA,
        { new: true,runValidators :true } // Return the updated EULA
      );
  
      if (!updatedEULA) {
        return res.status(404).json({ message: 'EULA not found' });
      }
  
      return res.json({ message: 'EULA updated', EULA: updatedEULA , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generating EULA' , success: false});
    }
};

// Delete EULA

const deleteEULA = async (req, res) => {
    try {
      const { EULAId } = req.params;
  
      // Use findByIdAndDelete to delete the EULA
      const deletedEULA = await EULA.findByIdAndDelete(
        EULAId
      );
  
      if (!deletedEULA) {
        return res.status(404).json({ message: 'EULA not found' });
      }
  
      return res.json({ msg: 'EULA deleted', EULA: deletedEULA , success: true});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting EULA', success:false });
    }
};


module.exports = {
    generateEULA,
    fetchEULA,
    editEULA,
    deleteEULA
}
