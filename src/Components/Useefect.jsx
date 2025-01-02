import { useState, useEffect } from "react";
import axios from "axios";

function Useffect() {
  const [post, setPost] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (fetch) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          console.log(res.data);
          setPost(res.data.categories); // Update this line
        })
        .catch((err) => console.log(err));
    }
  }, [fetch]);

  const fetchData = () => {
    setFetch(true);
  };

  return (
    <section>
      <h1>Fetching data from JSON Placeholder API</h1>
      <button onClick={fetchData}>Fetch Posts</button>
      <h2>Posts are</h2>
      <ol>
        {post.map((data) => (
          <>
            <img src={data.strCategoryThumb} alt={data.strCategory} />
            <li key={data.idCategory}>{data.strCategory}</li>
          </>
        ))}
      </ol>
    </section>
  );
}

export default Useffect;

