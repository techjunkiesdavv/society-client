 const ContactQuery = '*[_type == "contact"]';
const ExpenditureQuery= '*[_type == "expenditure"]' 
const CommitteeMembersQuery='*[_type == "committeMembers"]' 
const AnnouncementsQuery='*[_type == "announcements"]' 
const AboutQuery='*[_type == "about"]' 

 export const getquery=(text)=>{

    switch(text)
    {
        case  'contact':    return ContactQuery ;
        case 'expenditure' : return ExpenditureQuery ;
        case 'committe_members' : return CommitteeMembersQuery ;
        case 'about' : return AboutQuery ;
        case 'announcements' : return AnnouncementsQuery

        default : return -1 ; // check 
    }

 }