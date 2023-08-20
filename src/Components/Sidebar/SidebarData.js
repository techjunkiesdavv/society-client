
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
            link: "/",
        },
        {
            title: "Announcement",
            icon: <Noticeicon/>,
            link: "/announcement",
        },
        {
            title: "Facility Contact",
            icon: <Facilityicon/>,
            link: "/fcontact",
        },
        {

            title: "Bills",
            icon: <Complainticon/>,
            link: "/bills",
        },
         {
            title: "Expenditure",
            icon: <Expendicon/>,
            link: "/expenditure",
        },
        {
            title: "Funds",
            icon: <Fundicon/>,
            link: "funds",
        },
        {
            title: "Complaint",
            icon: <Complainticon/>,
            link: "/complaint",
        },
    ];
export default SidebarData;



