import MainLayout from '../../../components/layouts/MainLayout.component';
import NavigationPanel from '../../../components/ui/admin/navigationPanel/NavigationPanel';
import s from './adminDisc.module.scss';

function AdminDisc() {
    return (
        <MainLayout selfClassName={s.auth}>
            <NavigationPanel currentPage="discipline" />
        </MainLayout>
    );
}

export default AdminDisc;
