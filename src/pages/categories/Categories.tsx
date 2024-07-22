import React, { useEffect, useState } from "react";
import AdminNavigation from "../../components/AdminNavigation";
import { Link } from "react-router-dom";
import AddCategories from "./AddCategories";
import { CategoryType } from "../../types/types";

const Categories = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const response = await fetch(`${apiKey}/categories`);
    const data = await response.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`${apiKey}/categories/` + id, {
      method: "DELETE",
    });
    fetchCategories();
  };

  console.log(categories);
  return (
    <div className="admin-container">
      <AdminNavigation />
      <div className="dashboard">
        <h2>categories</h2>
        <AddCategories fetchCategories={fetchCategories} />

        <table className="products-table">
          <thead>
            <tr>
              <td>category name</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {categories.map((category: CategoryType) => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td className="td-link">
                  <Link to={"/categories/edit/" + category.id}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(category.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
