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
        this.validationErorr = this.validationErorr.bind(this);
        this.onChangeInputForBTN = this.onChangeInputForBTN.bind(this);
        this.validInput = this.validInput.bind(this);
        this.phone = React.createRef();
        this.login = React.createRef();
        this.dataBird = React.createRef();
        this.email = React.createRef();
        this.political = React.createRef();
        this.switcher = React.createRef();
        this.file = React.createRef();

        this.state = {
           country: '',
           dropShowItem: false,
           cardForm: [],
           disabled: true,
           checked: false,
           indexError: Number,
        }
    }

    dropActive(e) {
        this.setState({
            country: e.target.textContent,
            indexError: Number,
            disabled: false,
        })
    }

    wrapperDropActive() {
        this.setState((state) => {
            return {dropShowItem: !state.dropShowItem}
        })
    }

    validationErorr() {
        this.setState({
            disabled: true
        })
        return 'error';
    }


    onChangeInputForBTN (e) {
        if (e.target.value.length) {
            this.setState({
                disabled: false,
                indexError: Number
            })
        }
        if (e.target.id == 'checkboxPolitical') {
            this.setState({
                checked: !this.state.checked,
            })
        }
    }
    
    validInput (cardFormData) {
        let arrError = '';
        const arrVal = Object.values(cardFormData);
        for (let i = 0; i < arrVal.length; i++) {
            if (arrVal[i] == 'error') {
                arrError = arrVal[i];
                this.setState({
                    disabled: true,
                    indexError: i
                })
                break;
            }
        }

        if (!arrError) {
            this.setState({
                cardForm: [{...cardFormData}]
            })
        }
    }
    
    sendDataForm(e) {
        e.preventDefault()
        const cardFormData = {
            login: 
                this.login.current.value.length > 3 ? this.login.current.value : 
                this.validationErorr(),
            country: 
                this.state.country ? this.state.country : 
                this.validationErorr(),
            dataBird: 
                this.dataBird.current.value ? this.dataBird.current.value : 
                this.validationErorr(),
            email: 
                this.email.current.value.indexOf('@') > -1 && 
                this.email.current.value.length > 3 ? this.email.current.value : 
                this.validationErorr(),
            phone: 
                this.phone.current.value ? this.phone.current.value : 
                this.validationErorr(),
            file:               
                this.file.current.value ? this.file.current.value : 
                this.validationErorr(),
            political: 
                this.political.current.checked ? this.political.current.checked : 
                this.validationErorr(),
            switcher: 
                this.switcher.current.checked,
        }
        this.validInput (cardFormData)
    }

        
    
    render() {
        let {country, dropShowItem, cardForm, disabled, checked, indexError} = this.state;  
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
                        return <ActiveCountryItem key={el.flag} className='active' flag={el.flag} text={el.text}/>
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
                switcher={el.switcher}
                file={el.file} />
            })
        }
        
        return (
        <Wrapper_form>
            <form>
                <label htmlFor="login">Login</label><input className={indexError == 0 ? 'errorColor' : ''} onChange={this.onChangeInputForBTN} ref={this.login} type="text" id="login" />
                <label htmlFor="select">Select country</label>
                <div className={dropShowItem ? 'wrapperDrop active' : 'wrapperDrop'}
                 onClick={this.wrapperDropActive}>  
                    <div className={indexError == 1 ? 'errorColorCounrtry activeCountry' : 'activeCountry'}>{DropdownActive}</div>
                    {DropdownCustomsItem}
                </div>
                <label htmlFor="start">Bird date:</label>
                <input className={indexError == 2 ? 'errorColor' : ''}  onChange={this.onChangeInputForBTN} ref={this.dataBird} type="date" id="start" name="trip-start"
                    min="1920-01-01" max='2024-01-01' />
                <label htmlFor="email">Email</label><input className={indexError == 3 ? 'errorColor' : ''} onChange={this.onChangeInputForBTN} ref={this.email} type="email" id="email" />
                <label htmlFor="phone">Number phone</label><input className={indexError == 4 ? 'errorColor' : ''} onChange={this.onChangeInputForBTN} ref={this.phone} type="text" id="phone" />
                <label htmlFor="phone">Upload file</label><input className={indexError == 5 ? 'errorColor' : ''} onChange={this.onChangeInputForBTN} ref={this.file} type="file" id="file" />
                <label className={indexError == 6 ? 'errorCheckbox' : ''} htmlFor="checkbox">Political information agreement</label><input checked={checked ? 'checked' : ''} onChange={this.onChangeInputForBTN}  
                ref={this.political} type="checkbox" id="checkboxPolitical"/>
                <label onClick={this.handlerSwitcher} className="switch">
                    <input ref={this.switcher} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <button disabled={disabled} className={disabled ? 'btn isDisabled' : 'btn active'} onClick={this.sendDataForm}>Send</button>
            </form>
            {itemDataCard}
        </Wrapper_form>
        )
    }
}
