import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function TypeheadAutoSuggestions(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [multiSelections, setMultiSelections] = useState([]);
    const [options, setOptions] = useState([]);
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [ignoreDiacritics, setIgnoreDiacritics] = useState(true);

    const onSuggestionsFetchRequested = (value) => {
        setMultiSelections(value);
        props.addautohandlechange(value, props.name);
        if (value === "") {
            setMultiSelections([]);
        }
    };

    const onInputChangeFun = (value, e) => {
        const filteredServices = props.services.filter(
            (service) => service.service_name.toLowerCase().includes(value.toLowerCase())
        );
        const darray = filteredServices.map((item) => ({
            serid: item.service_id,
            label: item.service_name,
            price: item.clinic_fee,
            c_discount: item.discount,
            discount:0, 
            id:item.id,
            
        }));
        setOptions(darray);
    };


    return (
        <Form.Group>
            <Typeahead
                caseSensitive={caseSensitive}
                ignoreDiacritics={ignoreDiacritics}
                id="basic-typeahead-multiple"
                isLoading={isLoading}
                className={props.className}
                onChange={onSuggestionsFetchRequested}
                options={options}
                placeholder={props.name === "services" ? "Add Services" : "Enter Name"}
                selected={multiSelections}
                onInputChange={(text, e) => { onInputChangeFun(text, e) }}
            />
        </Form.Group>
    );

}
