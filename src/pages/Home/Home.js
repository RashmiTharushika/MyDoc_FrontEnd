import './home.css';
import Topbar from '../../components/ui/topbar/Topbar';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContent">
        <div className="homeBody"></div>
      </div>
    </>
  );
}
