import Topbar from '../../components/ui/topbar/Topbar';
import DoctorRegCard from '../../components/ui/DoctorCard/DoctorRegCard';
import UserRegCard from '../../components/ui/UserCard/UserRegCard';

import './signup.css';

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="regContent">
        <DoctorRegCard path="/docreg" />
        <UserRegCard path="/userreg" />
      </div>
    </>
  );
}
