import './App.css';
import Dashboard from './Pages/dashboard/Dashboard';
import home from './Pages/Home/home';
import Login from './Pages/Login/Login'
import Signup from './Pages/signp/Signup';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import StudentList from './Pages/Student/StudentList';
import FacultyList from './Pages/Faculty/FacultyList';
import Student from './Pages/Student/Student';
import Faculty from './Pages/Faculty/Faculty';
import AddStudent from './Pages/Student/AddStudent';
import AddFaculty from './Pages/Faculty/AddFaculty';

const mainRouter = createBrowserRouter([
  {path:'', Component: Login},
  { path: '/login', Component: Login },
  { path: '/signup', Component: Signup },
  {
    path: '/dashboard', Component: Dashboard, children: [
      {path: '',Component: home},
      { path: 'home', Component: home },
      {
        path: 'student', Component: Student, children: [
          { path: '', Component: StudentList },
          { path: 'student-list', Component: StudentList },
          { path: 'add-student', Component: AddStudent }
      ]},
      {
        path: 'faculty', Component: Faculty, children: [
          { path: '', Component: FacultyList },
          { path: 'faculty-list', Component: FacultyList },
          { path: 'add-faculty', Component: AddFaculty}
      ]}
  ]}
])


function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
