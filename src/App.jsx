import { CardTop } from "./components/CardTop";
import { CardBottom } from "./components/CardBottom";
import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <CardTop />
      <CardBottom />
    </div>
  );
}
