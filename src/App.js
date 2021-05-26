import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const projectID = '6646ee2f-241d-453c-83b4-b0f05042165b';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return (

            <
            ChatEngine height = "100vh"
            projectID = { projectID }
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />}
                onNewMessage = {
                    () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
                }
                />
            );
        };

        // infinite scroll, logout, more customizations...

        export default App;