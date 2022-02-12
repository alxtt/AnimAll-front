import React from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const SearchBar = (props) => {
    return (
            <div className="search_buttons">
                    <div className="rectangle">
                        <MyButton>Search</MyButton>
                    </div>
            </div>
    );
};

export default SearchBar;