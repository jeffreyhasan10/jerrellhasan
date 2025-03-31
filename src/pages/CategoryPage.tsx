
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "@/components/Gallery";
import { getProjectsByCategory, categories } from "@/data/projects";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === id);
  const projects = id ? getProjectsByCategory(id as any) : [];

  useEffect(() => {
    if (!category) {
      navigate("/");
    }
  }, [category, navigate]);

  if (!category) return null;

  return (
    <div className="pt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{category.title} Photography</h1>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            {category.description}
          </p>
        </div>

        <Gallery projects={projects} columns={3} />
      </div>
    </div>
  );
};

export default CategoryPage;
