import React, {useState, useRef, useEffect} from 'react'
import {firebaseApp} from '../firebase'
import {ChatEngine} from 'react-chat-engine';
import {useHistory} from 'react-router-dom'
import {useAuth} from '../AuthContext'
import axios from 'axios';
import MiniDrawer from './Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function ChatMain() {
    let history = useHistory();
    const {user} = useAuth();

    let loginRef = useRef()

    const [loading, setLoading] = useState(true);
    console.log(user.displayName)

    let handelLogout =  () => {
        firebaseApp.signOut()
        history.push('/')

}

    let getFile =  async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpeg', {type : 'image/jpeg'})
    }

    useEffect(() => {

        if(!user) {
            history.push('/')
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers : {
                "project-id" : "318ba17b-3aee-4477-8002-ddc75143d081",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        }).then(() => {
            setLoading(false)
        }).catch(()=> {
            let formData = new FormData();
            formData.append('email', user.email)
            formData.append('username', user.email)
            formData.append('secret', user.uid)

            getFile(user.PhotoURL).then((avatar) => {
                formData.append('avatar', avatar, avatar.name)

                axios.post('https://api.chatengine.io/users/', formData, 
                {headers: {'private-key': '53a0019e-f3a8-4aef-a405-cac39e137bd4'}}
                ).then(()=> {
                    setLoading(false)
                }).catch(error => {
                    console.log(error)
                })
            })
        })
    }, [user, history])

    console.log(user)

    return (
        <div className = 'chats-page'>
        <div className = 'nav-bar'>
        <MiniDrawer />

        </div>
        <Switch>
        <Route exact path = '/chats'>
            <ChatEngine 
                height = 'calc(100vh- 66px)'
                projectID = '318ba17b-3aee-4477-8002-ddc75143d081'
                userName = {user.email}
                userSecret = {user.uid}
                onConnect={(creds) => console.log(creds)}
                onFailAuth={(props) => console.log(props)}
            />
            </Route>
            </Switch>
        </div>
    )
}

export default ChatMain
