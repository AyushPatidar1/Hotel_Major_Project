const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const Listing = require("../models/listing.js"); // <-- Add this line

//index and create routes
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing)
  );

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//show update and delete routes
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

router.get("/search", async (req, res) => {
  const { query, filter } = req.query;
  let search = {};
  if (filter === "price") {
    search.price = { $lte: Number(query) };
  } else if (filter === "location") {
    search.location = { $regex: query, $options: "i" };
  } else {
    search.title = { $regex: query, $options: "i" };
  }
  const listings = await Listing.find(search);
  res.render("listings/index", { listings, query, filter });
});

module.exports = router;
