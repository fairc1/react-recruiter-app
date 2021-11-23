import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { collection, getDocs, doc, setDoc, deleteDoc, addDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import db from './config/firebase-setup';
import Home from './pages/Home';
import ListRecruits from './pages/ListRecruits';
import CreateRecruit from './pages/CreateRecruit';
import EditRecruit from './pages/EditRecruit';
import ShowRecruit from './pages/ShowRecruit';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

const recruitCol = collection(db, 'recruits');

export default class App extends Component {
  state = {
    recruits: [],
    user: null,
  }

  createRecruit = async newRecruit => {
    await addDoc(recruitCol, newRecruit);
    this.props.history.push('/recruit/allrecruits');
    this.readRecruits();
  }

  removeRecruit = async id => {
    const recruitDoc = doc(recruitCol, id);
    await deleteDoc(recruitDoc);
    this.props.history.push('/recruit/allrecruits');
    this.readRecruits();
  }

  updateRecruit = async editedRecruit => {
    const recruitDoc = doc(recruitCol, editedRecruit.id);
    await setDoc(recruitDoc, editedRecruit);
    this.props.history.push('/recruit/allrecruits')
    this.readRecruits();
  }

  readRecruits = async () => {
    const recruitsSnapshot = await getDocs(recruitCol)
    const recruitData = [];
    recruitsSnapshot.forEach(doc => {
      recruitData.push({
        id: doc.id,
        age: doc.data().age,
        availability: doc.data().availability,
        favorability: doc.data().favorability,
        hired: doc.data().hired,
        image: doc.data().image,
        name: doc.data().name,
        position: doc.data().position,
      });
    });
    this.setState({
      recruits: recruitData
    });
  }

  login = async existingUser => {
    try {
      const auth = getAuth();
      const data = await signInWithEmailAndPassword(
        auth,
        existingUser.email,
        existingUser.password
      );
      this.setState(
        {
          user: data.user
        },
        () => this.props.history.push('/recruit/allrecruits')
      );
    } catch (error) {
      console.log('err:', error);
    }
  }

  logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.setState(
          {
            user: null
          },
          () => this.props.history.push('/')
        )
      })
      .catch((err) => {
        console.log('err:', err);
      })
  }

  register = async newUser => {
    try {
      const auth = getAuth();
      const data = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      console.log('data:', data);
      this.setState(
        {
          user: data.user
        },
        () => this.props.history.push('/recruit/allrecruits')
      );
    } catch (error) {
      console.log('err:', error);
    }
  }

  componentDidMount() {
    this.readRecruits();
  }
  
  render() {
    return(
      <div className="App">
        <header className="App-header">
            <NavLink exact to='/'>Recruiter Dashboard</NavLink>
          <nav>
            {
              this.state.user ? (
                <>
                  <NavLink exact to='/recruit/allrecruits'>All Potential Recruits</NavLink>
                  <NavLink exact to='/recruit/add'>Add Recruit</NavLink>
                  <NavLink exact to='/logout'>Logout</NavLink>
                </>
              ) : (
                <NavLink exact to ="/login">
                  Signup/Login
                </NavLink>
              )
            }
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login login={this.login} />
            </Route>
            <Route exact path='/register'>
              <Register register={this.register}/>
            </Route>
            <Route exact path='/logout' render={() => this.logout()} />
            <Route exact path='/recruit/allrecruits'>
              {
                this.state.user
                ? <ListRecruits listRecruits={this.state.recruits} removeRecruit={this.removeRecruit} />
                : <Redirect to={{ pathname: '/login' }} />
              }
              </Route>
            <Route exact path='/recruit/allrecruits'>
              {
                this.state.user
                ? <ListRecruits listRecruits={this.listRecruits} />
                : <Redirect to={{ pathname: '/login' }} />
              }
            </Route> 
            <Route exact path='/recruit/add'>
              {
                this.state.user
                ? <CreateRecruit createRecruit={this.createRecruit} />
                : <Redirect to={{ pathname: '/login' }} />
              }
            </Route>
            <Route exact path='/recruit/edit' render = {({ location }) =>
              {
                this.state.user
                ? <EditRecruit updateRecruit={this.updateRecruit} location={location} />
                : this.props.history.push('/login')
              }
            } />
            <Route path='/recruit/details' render = {({ location }) => 
              {
                this.state.user
                ? <ShowRecruit removeRecruit={this.removeRecruit} location={location} />
                : this.props.history.push('/login')
              }
            } />
            <Route path='*'>
              <div className='pannel panel-default homepage'>404</div>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }

}