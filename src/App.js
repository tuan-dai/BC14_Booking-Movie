import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import PageNotFound from './pages/PageNotFound/PageNotFound'
import AdminTemplate from './templates/AdminTemplate';
import Dashboard from './pages/AdminTemplates/Dashboard/Dashboard'
import FilmManagement from './pages/AdminTemplates/FilmManagement/FilmManagement';
import { HomeTemplate } from './templates/HomeTemplate';
import Home from './pages/HomeTemplates/Home/Home';
import BookingTicket from './pages/HomeTemplates/Home/BookingTicket'
import SignIn from './pages/HomeTemplates/User/SignIn';
import SignUp from './pages/HomeTemplates/User/SignUp';
import AddFilm from './pages/AdminTemplates/FilmManagement/AddFilm';
import EditFilm from './pages/AdminTemplates/FilmManagement/EditFilm'
import ShowTime from './pages/AdminTemplates/FilmManagement/ShowTime';
import FilmDetail from './pages/HomeTemplates/FilmDetail/FilmDetail'
import UserManagement from './pages/AdminTemplates/UserManagement/UserManagement';
import AddUser from './pages/AdminTemplates/UserManagement/AddUser';
import EditUser from './pages/AdminTemplates/UserManagement/EditUser';
import Profile from './pages/HomeTemplates/User/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/ticketroom/:id' exact Component={BookingTicket} />
        <HomeTemplate path='/detail/:id' exact Component={FilmDetail} />
        <HomeTemplate path='/profile' exact Component={Profile} />


        <AdminTemplate path='/admin/dashboard' exact Component={Dashboard} />
        <AdminTemplate path='/admin/film-management' exact Component={FilmManagement} />
        <AdminTemplate path='/admin/add-film' exact Component={AddFilm} />
        <AdminTemplate path='/admin/edit-film/:id' exact Component={EditFilm} />
        <AdminTemplate path='/admin/films/showtime/:id' exact Component={ShowTime} />

        <AdminTemplate path='/admin/user-management' exact Component={UserManagement} />
        <AdminTemplate path='/admin/user-management/add-user' exact Component={AddUser} />
        <AdminTemplate path='/admin/user-management/edit-user/:id' exact Component={EditUser} />
        <Route path='*' exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
