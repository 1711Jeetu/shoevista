import React,{forwardRef} from 'react'
import { useFilter } from '../../../context/FilterContext';

export const DropDownPrice = forwardRef((props,ref) => {
    const { state, dispatch } = useFilter();
    return (
        <div
            ref={ref}
            id='dropdownAvtar'
            style={{ left: "1150px",top:"230px",width: "170px"}}
            className='select-none absolute pl-1 top-7 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <div className="py-2 overflow-y-auto">
                    <div>
                    <h2 className="font-bold dark:text-slate-100 pl-2 pb-2" style={{fontSize: '17px'}}>Price</h2>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="lowtohigh" style={{fontSize: '16px'}}>
                            <span className="ml-2"></span>
                            <input type="radio" id="lowtohigh" name="sortByPrice"
                                onChange={() =>  dispatch({ type: "SORT_BY_PRICE", payload: { sortByPrice: "lowtohigh" } }) }
                                checked={state.sortByPrice==="lowtohigh"}
                            />
                            <span className="ml-2"></span>
                            Low to High
                        </label>
                    </div>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="hightolow" style={{fontSize: '16px'}}>
                            <span className="ml-2"></span>
                            <input type="radio" id="hightolow" name="sortByPrice"
                                onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: { sortByPrice: "hightolow" } }) }}
                                checked={state.sortByPrice==="hightolow"} 
                            />
                            <span className="ml-2"></span>
                            High to Low
                        </label>
                    </div>
                    </div>
                </div>
            </ul>
        </div>
    )
});
