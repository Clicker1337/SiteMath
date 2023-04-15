export default class BackendApi {
    static LOCATION = 'http://26.202.142.249:8080';

    static REGISTRATION = '/api/auth/signup';

    static LOGIN = '/api/auth/signin';

    static REFRESH = '/api/auth/refresh';

    static LOGOUT = '/api/auth/logout';

    static GETGROUPS = '/api/request/groups';

    static ADDSTUDENT = '/api/admin/createStudent';
}
