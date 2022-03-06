import logo from './logo.svg';
import './App.css';
import {NavBar} from "./ui-components"
import { DestinationcardCollection , AddDestination } from './ui-components';
import {withAuthenticator} from "@aws-amplify/ui-react";
import {useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Destination} from "./models";

function App({user,signOut}) {
  const [name,setName] = useState("");
  const [budget,setBudget] = useState("");
  const [description,setDescription] = useState("");
  const [imageurl,setImageurl] = useState("");
  
  const savedestcard = async () => {
    try{
      await DataStore.save(
        new Destination({
          name:name,
          setBudget:budget,
          description:description,
          imageurl: imageurl
        })
      );

      window.location.reload();
    }
    catch(err) {
      console.log(err);
    }
  }

  const adddestoverride = {
    "Flex.Flex[0].Flex[1].TextField[0]":{
        onChange: (event) => {
          setName(event.target.value);
        }
    },
    "Flex.Flex[0].Flex[1].TextField[1]":{
        onChange: (event) => {
          setBudget(event.target.value);
        }
    },
    "Flex.Flex[0].Flex[1].TextField[2]":{
        onChange: (event) => {
          setDescription(event.target.value);
        }
    },
    "Flex.Flex[0].Flex[1].TextField[3]":{
        onChange: (event) => {
          setImageurl(event.target.value);
        }
    },
    "Flex.Flex[0].Flex[2].Button[0]":{
      onClick: savedestcard

    }
  }

  const navbaroverides = {
    "Flex.Image[0]":{
      src:"https://upload.wikimedia.org/wikipedia/commons/5/51/Backpack_icon.svg"      
    },
    "Flex.Flex[1].Image[0]" :{
      src:user?.attributes?.profile
    },
    "Flex.Flex[1].Button[0]":{
      onClick: signOut
    }
  }

  return (
    <div className="App">
     <NavBar overrides={navbaroverides} />
      <header className="App-header">
        <AddDestination overrides={adddestoverride} style={{textAlign:"left" , margin:"1rem"}}/>
        <DestinationcardCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
