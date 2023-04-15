import MainLayout from '../../../components/layouts/MainLayout.component';
import NavigationPanel from '../../../components/ui/admin/navigationPanel/NavigationPanel';
import s from './adminPrepod.module.scss';

function AdminPrepod() {
    return (
        <MainLayout selfClassName={s.auth}>
            <NavigationPanel currentPage="prepod" />
        </MainLayout>
    );
}

export default AdminPrepod;
