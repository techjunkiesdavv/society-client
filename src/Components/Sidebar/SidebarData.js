
import {ReactComponent as Homeicon} from '../../assets/home.svg';
import {ReactComponent as Noticeicon} from '../../assets/notice.svg';
import {ReactComponent as Facilityicon} from '../../assets/facility.svg';
import {ReactComponent as Fundicon} from '../../assets/funds.svg';
import {ReactComponent as Expendicon} from '../../assets/expend.svg';
import {ReactComponent as Complainticon} from '../../assets/complaint.svg';

export const SidebarData= [
        {
            title: "Home",
            icon: <Homeicon/>,
            link: "/home",
        },
        {
            title: "Announcement",
            icon: <Noticeicon/>,
            link: "/home",
        },
        {
            title: "Facility Contact",
            icon: <Facilityicon/>,
            link: "/home",
        },
        {
            title: "Funds",
            icon: <Fundicon/>,
            link: "/home",
        },
        {
            title: "Expenditure",
            icon: <Expendicon/>,
            link: "/home",
        },
        {
            title: "Complaint",
            icon: <Complainticon/>,
            link: "/home",
        },
    ];
export default SidebarData;



