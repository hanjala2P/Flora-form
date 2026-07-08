import { toast } from "react-toastify";

const loadWishListData = () => {
  try {
    const storedWishList = localStorage.getItem("wishList");
    return storedWishList ? JSON.parse(storedWishList) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const addToWishList = (plant) => {
  const wishList = loadWishListData();

  const exists = wishList.some(
    (item) => item.plantId === plant.plantId
  );

  if (exists) {
    toast.error("⚠️ Plant is already in your wishlist!");
    return;
  }

  wishList.push(plant);
  localStorage.setItem("wishList", JSON.stringify(wishList));

  toast.success("🌿 Plant added to wishlist!");
};

const removeFromWishList = (plantId) => {
  const wishList = loadWishListData();

  const updatedWishList = wishList.filter(
    (item) => item.plantId !== plantId
  );

  localStorage.setItem("wishList", JSON.stringify(updatedWishList));

  toast.info("🗑️ Plant removed from wishlist.");
};

export { loadWishListData, addToWishList, removeFromWishList };