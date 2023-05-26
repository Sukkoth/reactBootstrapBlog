import React from 'react';

const Search = () => {
    return (
        <div className='col-lg-12'>
            <div className='sidebar-item search'>
                <form id='search_form' name='gs' method='GET' action='#'>
                    <input
                        type='text'
                        name='q'
                        className='searchText'
                        placeholder='type to search...'
                        autoComplete='on'
                    />
                </form>
            </div>
        </div>
    );
};

export default Search;
