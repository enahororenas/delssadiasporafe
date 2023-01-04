import {FaNewspaper} from 'react-icons/fa'
import {FaInfo} from 'react-icons/fa'
import {FaWpforms} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import { FaHome } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { ImFilePicture } from 'react-icons/im'
import {IoIosPeople} from 'react-icons/io'
import {FaEdit} from 'react-icons/fa'
import {RiRefund2Line} from 'react-icons/ri'
import {GrProjects} from 'react-icons/gr'

    const adminlinks = [
        {id:1,text:'news',path:'/news',icon:<FaNewspaper/>},
        {id:2,text:'about',path:'/about',icon:<FaInfo/>},
        {id:3,text:'Resources',path:'/resources',icon:<FaWpforms/>},
        {id:4,text:'Edit profile',path:'/profile',icon:<ImProfile/>},
        {id:5,text:'Home',path:'/user',icon:<FaHome/>},
        {id:6,text:'Gallery',path:'/gallery',icon:<ImFilePicture/>},
        {id:7,text:'Members',path:'/members',icon:<IoIosPeople/>},
        {id:8,text:'Chapter Projects',path:'/project',icon:<RiRefund2Line/>},
        {id:9,text:'Executive Committee',path:'/exco',icon:<IoIosPeople/>},
        {id:10,text:'Add news Item/Event',path:'/addnewsitem',icon:<ImNewspaper/>},
        {id:11,text:'Add Image',path:'/addimage',icon:<ImFilePicture/>},
        {id:12,text:'Add User/Admin',path:'/adduser',icon:<FaEdit/>},
        {id:13,text:'Add/Update Project',path:'/addproject',icon:<GrProjects/>},
        {id:14,text:'Delete News/Event',path:'/deletenews',icon:<ImNewspaper/>},
        {id:15,text:'Add Executive Member',path:'/addexec',icon:<ImFilePicture/>},
    ]
        
export default adminlinks
