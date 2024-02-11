import Topbar from '../../components/ui/topbar/Topbar';
import UserRegFrm from '../../components/form/UserRegFrm';

import './userReg.css';

export default function DoctorReg() {
  return (
    <>
      <Topbar />
      <div className="homeContent">
        <div className="UserRegForm">
          <UserRegFrm />
        </div>
        <div className="homeBody"></div>
      </div>
    </>
  );
}
