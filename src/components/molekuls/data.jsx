import ImgHero from '../../assets/images/Hero-Image.png';
import AboutImg from '../../assets/images/About/About_image.png';
import ImgFeaturs1 from '../../assets/images/Featurs/Featurs-1.png';
import ImgBgFeatur1 from '../../assets/images/Featurs/feature1_bg.png';
import ImgFeaturs2 from '../../assets/images/Featurs/Featurs-2.png';
import ImgBgFeatur2 from '../../assets/images/Featurs/feature2_bg.png';
import MenuIcon1 from '../../assets/icons/sidebar/Chart_fill.png';
import MenuIcon2 from '../../assets/icons/sidebar/Chat.png';
import MenuIcon3 from '../../assets/icons/sidebar/User.png';
import MenuIcon4 from '../../assets/icons/sidebar/Calendar.png';
import MenuIcon5 from '../../assets/icons/sidebar/Search.png';
import MenuIcon6 from '../../assets/icons/sidebar/Chart.png';
import MenuIcon7 from '../../assets/icons/sidebar/Folder.png';
import MenuIcon8 from '../../assets/icons/sidebar/Setting.png'
 
export const NavMenu = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about'},
    { name: 'Featurs', path: '#featurs' },
    { name: 'Contact', path: '#contact' }
];

export const HeroCom = {
    title: 'Notull Brings Together All Your Notes, Tasks,and Team Mates',
    description: 'keep everything in the same place easily and quickly.',
    image: ImgHero
};

export const AboutCom = {
    image: AboutImg,
    title: 'Tentang Notull',
    description: 'Notull merupakan sebuah website yang dapat anda gunakan untuk mencatat baik secara individu maupun secara tim'
}

export const Features = [
    {
        image: ImgFeaturs1,
        bgImage: ImgBgFeatur1,
        title: 'Expense Trackering',
        description: 'We use an application designed a testing gnose to keep away',
    },
    {
        image: ImgFeaturs2,
        bgImage: ImgBgFeatur2,
        title: 'Finance Snapshot',
        description: 'We use an application designed a testing gnose to keep away',
    },
];

export const FooterCom = [
    {name: 'Home', path: '#home'},
    {name: 'About', path: '#about'},
    {name: 'Featurs', path: '#featurs'},
    {name: 'Contact', path: '#contact'},
];

export const MenuSidebar = [
    { title: "Dashboard", icon: MenuIcon1, path: '/s/dashboard' },
    { title: "Inbox", icon: MenuIcon2, path: '/s/note' },
    { title: "Accounts", icon: MenuIcon3, gap: true, path: '/s/dashboard' },
    { title: "Schedule ", icon: MenuIcon4, path: '/s/dashboard' },
    { title: "Search", icon: MenuIcon5, path: '/s/dashboard' },
    { title: "Analytics", icon: MenuIcon6, path: '/s/dashboard' },
    { title: "Files ", icon: MenuIcon7, gap: true, path: '/s/dashboard' },
    { title: "Setting", icon: MenuIcon8, path: '/s/dashboard' },
];

export const NotesCardHeadCom = [
    { icon: "Logo Reca", title: "Baru Update" },
    { icon: "Logo Work", title: "Catatan Pribadi" }
]