import MainLayout from '../../../components/layouts/MainLayout.component';
import NavigationPanel from '../../../components/ui/admin/navigationPanel/NavigationPanel';
import s from './adminGroup.module.scss';

function AdminGroup() {
    return (
        <MainLayout selfClassName={s.auth}>
            <NavigationPanel currentPage="group" />
        </MainLayout>
    );
}

export default AdminGroup;
