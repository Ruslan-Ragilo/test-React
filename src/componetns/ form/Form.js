import React, { Component } from 'react';
import ActiveCountryItem from './ActiveCountryItem';
// import { Dropdown } from 'semantic-ui-react';
import { countryOptions } from './CountryForForm';
import DropdownCustoms from './dropdown/DropdownCustoms ';
import Card_data from './cardData/cardData';
import { Wrapper_form } from './Form.style';



export default class Form extends Component {

    constructor(props) {
        super(props)
        this.dropActive = this.dropActive.bind(this);
        this.wrapperDropActive = this.wrapperDropActive.bind(this);
        this.sendDataForm = this.sendDataForm.bind(this);
        this.phone = React.createRef();
        this.login = React.createRef();
        this.dataBird = React.createRef();
        this.email = React.createRef();
        this.political = React.createRef();
        this.switcher = React.createRef();

        this.state = {
           country: '',
           dropShowItem: false,
           cardForm: [],
        }
    }

    dropActive(e) {
        this.setState({
            country: e.target.textContent
        })
    }

    wrapperDropActive() {
        this.setState((state) => {
            return {dropShowItem: !state.dropShowItem}
        })
    }
    
sendDataForm(e) {
    e.preventDefault()
    const cardFormData = {
        email: this.email.current.value,
        login: this.login.current.value,
        dataBird: this.dataBird.current.value,
        country: this.state.country,
        phone: this.phone.current.value,
        political: this.political.current.checked,
        switcher: this.switcher.current.checked,
    }
    // this.state.cardForm.push(cardFormData)
    this.setState({
        cardForm: [{...cardFormData}]
    })
}

        
    
    render() {
        // let timeInMs = new Date();
        // let dateNow = timeInMs.getFullYear()+ '-0' +timeInMs.getMonth()+ '-0' +timeInMs.getDay();
        let {country, dropShowItem, cardForm} = this.state;
        let isActiveItem = dropShowItem;
        //Item inner select (option)
        const DropdownCustomsItem = countryOptions.map(el => {
            return <DropdownCustoms isActiveItem={isActiveItem} dropActive={this.dropActive} key={el.key} flag={el.flag} text={el.text}/>
        })
        console.log(cardForm)
        //Active item country
        let DropdownActive;
        if (country) {
            DropdownActive = countryOptions.map(el => {
            if (el.text == country) {
                return <ActiveCountryItem className='active' flag={el.flag} text={el.text}/>
             }
            })
            }
            
        let itemDataCard; 
        if(cardForm.length > 0) {
            itemDataCard = cardForm.map(el => {
                return <Card_data key={el.email} login={el.login}
                email={el.email}
                phone={el.phone}
                dataBird={el.dataBird}
                political={el.political}
                country={el.country}
                switcher={el.switcher} />
            })
        }

        return (
        <Wrapper_form>
            <form>
                <label htmlFor="login">Login</label><input onChange={this.handlerChangeInput} ref={this.login} type="text" id="login" required />
                <label htmlFor="select">Select country</label>
                <div className={dropShowItem ? 'wrapperDrop active' : 'wrapperDrop'}
                 onClick={this.wrapperDropActive}>
                     
                    <div className='activeCountry'>{DropdownActive}</div>
                    {DropdownCustomsItem}
                </div>
                <label htmlFor="start">Bird date:</label>
                <input onChange={this.handlerChangeInput} ref={this.dataBird} type="date" id="start" name="trip-start"
                    min="1920-01-01" max='2024-01-01' />
                <label htmlFor="email">Email</label><input onChange={this.handlerChangeInput} ref={this.email} type="email" id="email" required />
                <label htmlFor="phone">Number phone</label><input onChange={this.handlerChangeInput} ref={this.phone} type="text" id="phone" required />
                <label htmlFor="checkbox">Political information agreement</label><input onChange={this.handlerChangeCheckbox} ref={this.political} type="checkbox" onClick={this.handlerCheckbox} id="checkbox" required/>
                <label onClick={this.handlerSwitcher} className="switch">
                    <input onChange={this.handlerChangeCheckbox} ref={this.switcher} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <button onClick={this.sendDataForm}>Send</button>
            </form>
            {itemDataCard}
        </Wrapper_form>
        )
    }
}
