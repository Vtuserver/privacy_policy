const express = require("express");
const { generateCookiepolicy, fetchCookiepolicy, editCookiepolicy, deleteCookiepolicy } = require("../controller/cookiepolicy");
const { generateDisclaimer, fetchDisclaimer, editDisclaimer, deleteDisclaimer} = require ("../controller/disclaimer");
const { generateEULA, fetchEULA, editEULA, deleteEULA } = require ("../controller/EULA");
const { generatePrivacypolicy, fetchPrivacypolicy, editPrivacypolicy, deletePrivacypolicy } = require("../controller/privacypolicy");
const { generateReturnandrefundpolicy, fetchReturnandrefundpolicy, editReturnandrefundpolicy, deleteReturnandRefundpolicy } = require("../controller/returnandrefundpolicy");
const { generateTermsandconditions, fetchTermsandconditions, editTermsandconditions, deleteTermsandconditions } = require("../controller/termsandconditions");
const { generateTermsofservices, fetchTermsofservices, editTermsofservices, deleteTermsofservices } = require("../controller/termsofservices");
const { generateTermsofuse, fetchTermsofuse, editTermsofuse, deleteTermsofuse } = require("../controller/termsofuse");
const router = express.Router();

router.route("/generate_cookiepolicy").post(generateCookiepolicy);
router.route("/fetch_cookiepolicy").get(fetchCookiepolicy);
router.route("/edit_cookiepolicy/:id").patch(editCookiepolicy);
router.route("/delete_cookiepolicy/:id").delete(deleteCookiepolicy);
router.route("/generate_disclaimer").post(generateDisclaimer); 
router.route("/fetch_disclaimer").get(fetchDisclaimer);
router.route("/edit_disclaimer/:id").patch(editDisclaimer);
router.route("/delete_disclaimer/:id").delete(deleteDisclaimer);
router.route("/generate_EULA").post(generateEULA);
router.route("/fetch_EULA").get(fetchEULA);
router.route("/edit_EULA/:id").patch(editEULA);
router.route("/delete_EULA/:id").delete(deleteEULA);
router.route("/generate_privacypolicy").post(generatePrivacypolicy);
router.route("/fetch_privacypolicy").get(fetchPrivacypolicy);
router.route("/patch_privacypolicy/:id").patch(editPrivacypolicy);
router.route("/delete_privacypolicy/:id").delete(deletePrivacypolicy);
router.route("/generate_returnandrefundpolicy").post(generateReturnandrefundpolicy);
router.route("/fetch_returnandrefundpolicy").get(fetchReturnandrefundpolicy);
router.route("/patch_returnandrefundpolicy/:id").patch(editReturnandrefundpolicy);
router.route("/delete_returnandrefundpolicy/:id").delete(deleteReturnandRefundpolicy);
router.route("/generate_termsandconditions").post(generateTermsandconditions);
router.route("/fetch_termsandconditions").get(fetchTermsandconditions);
router.route("/patch_termsandconditions/:id").patch(editTermsandconditions);
router.route("/delete_termsandconditions/:id").delete(deleteTermsandconditions);
router.route("/generate_termsofservices").post(generateTermsofservices);
router.route("/fetch_termsofservices").get(fetchTermsofservices);
router.route("/patch_termsofservices/:id").patch(editTermsofservices);
router.route("/delete_termsofservices/:id").delete(deleteTermsofservices);
router.route("/generate_termsofuse").post(generateTermsofuse);
router.route("/fetch_termsofuse").get(fetchTermsofuse);
router.route("/patch_termsofuse/:id").patch(editTermsofuse);
router.route("/delete_termsofuse/:id").delete(deleteTermsofuse);


module.exports = router;