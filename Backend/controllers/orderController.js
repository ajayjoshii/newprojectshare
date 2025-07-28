exports.getRecommendations = async (req, res) => {
  try {
    res.json([
      { id: 1, name: "Momo", price: 120 },
      { id: 2, name: "Chowmein", price: 150 },
    ]);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recommendations" });
  }
};
