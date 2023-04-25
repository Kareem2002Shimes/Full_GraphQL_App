import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="container">
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />

      <hr />
      <Clients />
    </div>
  );
}

export default Home;
