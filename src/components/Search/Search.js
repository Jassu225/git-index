import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchText } from '../../store/selectors';
import { setSearchText, getUsers } from '../../store/actions';
import './Search.css';
// import { debounce } from 'lodash';

function Search(props) {
    const dispatch = useDispatch();
    const searchText = useSelector(state => getSearchText(state));
    const onChange = useCallback((event) => {
        dispatch(setSearchText(event.target.value));
    }, [dispatch]);
    const onClick = useCallback((event) => {
        dispatch(getUsers());
    }, [dispatch]);
    return (
        <div className="search-bar-container">
            <div className="search-input-container">
                <input
                    type="text"
                    className="search-input"
                    value={searchText}
                    onChange={onChange}
                />
            </div>
            <div className="custom-button-container">
                <button
                    className="custom-button"
                    type="button"
                    onClick={onClick}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Search;