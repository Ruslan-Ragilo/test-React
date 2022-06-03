import React, { Component } from 'react';
import ActiveCountryItem from './ActiveCountryItem';
// import { Dropdown } from 'semantic-ui-react';
import { countryOptions } from './CountryForForm';
import DropdownCustoms from './dropdown/DropdownCustoms ';
import { Wrapper_form } from './Form.style';



export default class Form extends Component {

    constructor(props) {
        super(props)
        this.dropActive = this.dropActive.bind(this);
        this.wrapperDropActive = this.wrapperDropActive.bind(this);
        
        this.state = {
           country: '',
           dropShowItem: false,
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
    
    render() {
        // let timeInMs = new Date();
        // let dateNow = timeInMs.getFullYear()+ '-0' +timeInMs.getMonth()+ '-0' +timeInMs.getDay();
        let {country, dropShowItem} = this.state;
        let isActiveItem = dropShowItem;

        //Item inner select (option)
        const DropdownCustomsItem = countryOptions.map(el => {
            return <DropdownCustoms isActiveItem={isActiveItem} dropActive={this.dropActive} key={el.key} flag={el.flag} text={el.text}/>
        })

        //Active item country
        let DropdownActive;
        if (country) {
            DropdownActive = countryOptions.map(el => {
            if (el.text == country) {
                return <ActiveCountryItem className='active' dropActive={this.dropActive} key={el.key} flag={el.flag} text={el.text}/>
             }
            })
            } 

        return (
        <Wrapper_form>
            <form>
                <label htmlFor="login">Login</label><input type="text" id="login" required />
                <label htmlFor="password">Password</label><input type="password" id="password" required />
                <label htmlFor="password">Enter country</label>
                <div className={dropShowItem ? 'wrapperDrop active' : 'wrapperDrop'} onClick={this.wrapperDropActive}>
                    <div className='activeCountry'>{DropdownActive}</div>
                    {DropdownCustomsItem}
                </div>
                <label htmlFor="start">Bird date:</label>
                <input type="date" id="start" name="trip-start" value='1920-01-01'
                    min="1920-01-01" max='2024-01-01'></input>
                <label htmlFor="email">Email</label><input type="email" id="email" required />
                <label htmlFor="phone">Number phone</label><input type="text" id="phone" required />
                <label htmlFor="checkbox">Political information agreement</label><input type="checkbox" id="checkbox" />
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </form>
        </Wrapper_form>
        )
    }
}
