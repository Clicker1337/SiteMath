export default class BackendApi {
    static LOCATION = 'http://26.202.142.249:8080';

    static REGISTRATION = '/api/auth/signup';

    static LOGIN = '/api/auth/signin';

    static REFRESH = '/api/auth/refresh';

    static LOGOUT = '/api/auth/logout';

    static GET_GROUPS = '/api/request/groups';

    static ADD_STUDENT = '/api/admin/createStudent';

    static GET_STUDENT_INFO = '';

    static GET_STUDENTS_IN_GROUP = '';

    static EDIT_STUDENT = '/api/admin/editStudent';

    static DELETE_USER = '/api/admin/delUser';
}
