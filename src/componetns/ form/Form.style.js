import styledComponents from 'styled-components';


export const Wrapper_form = styledComponents.div`

    form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
    }

    input {
        padding: 5px 15px;
        border-radius: 20px;
        border: none;
    }

    label {
         color: #fff;
         margin: 10px 0;
    }

/* The switch - the box around the slider */
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {display:none;}

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: #2196F3;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }
    .ui.fluid.dropdown {
        margin: 10px 0;
    }

    .wrapperDrop {
        height: 40px;
        position: relative;
        background-color: white;
    }
`