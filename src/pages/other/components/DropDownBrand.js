import React, { forwardRef } from 'react';
import { useFilter } from '../../../context/FilterContext';

export const DropDownBrand = forwardRef((props, ref) => {
    const { state, dispatch } = useFilter();

    const handleBrandChange = (brand) => {
        if (state.sortByBrand.includes(brand)) {
            dispatch({ type: "REMOVE_BRAND", payload: { brand } });
        } else {
            dispatch({ type: "ADD_BRAND", payload: { brand } });
        }
    };

    return (
        <div
            ref={ref}
            id='dropdownAvatar'
            style={{ left: "1100px", top: "230px", width: "140px" }}
            className='select-none absolute pl-1 top-7 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <div className="py-2 overflow-y-auto">
                    <div>
                        <h2 className="font-bold dark:text-slate-100 pl-2 pb-2" style={{fontSize: '17px'}}>Brand</h2>
                        {['Nike', 'Adidas', 'Reebok', 'Vans', 'HushPuppies'].map(brand => (
                            <div key={brand} className="form-control dark:text-slate-100 pl-2" style={{fontSize: '16px'}}>
                                <label htmlFor={brand}>
                                    <input
                                        type="checkbox"
                                        id={brand}
                                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                        onChange={() => handleBrandChange(brand.toUpperCase())}
                                        checked={state.sortByBrand.includes(brand.toUpperCase())}
                                    />
                                    <span className="ml-2"></span>
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </ul>
        </div>
    );
});
