export const fetchBlogs = async () => {
  try {
    const response = await fetch("http://localhost:8000/blogs");
    return response.json();
  } catch (error) {
    console.error("Fetch blog error ", error);
  }
};

export const fetchMenus = async () => {
  try {
    const response = await fetch("http://localhost:8000/categories");
    return response.json();
  } catch (error) {
    console.error("Fetch blog error ", error);
  }
};
