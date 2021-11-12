import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

createServer({

    routes(){

        this.namespace = 'api'

        this.get('/teste', ()=>{
            return[
                {
                    id: 1,
                    imgName:'teste',
                    Logo: '../assets/placeholders/lena_gray_512.jpeg',
                },
            ]
        })
    }

})

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );