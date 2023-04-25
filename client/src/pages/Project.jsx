import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../components/queries/projectQueries";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

function Project() {
  const { projectId } = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id: projectId },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p className="mt-3">{data.project.description}</p>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
}

export default Project;
