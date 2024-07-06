import React,{forwardRef} from 'react'
import { useFilter } from '../../../context/FilterContext';

export const DropDownCategory = forwardRef((props, ref) => {
    const { state, dispatch } = useFilter();
    return (
        <div
            ref={ref}
            id='dropdownAvtar'
            style={{ left: "1000px",top: "230px",width: '120px'}}
            className='select-none absolute pl-1 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <div className=" py-2 overflow-y-auto" >

                    <div>
                        <h2 className="font-bold dark:text-slate-100 pl-2 pb-2" style={{fontSize: '17px'}}>Category</h2>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="sortByCategory" style={{fontSize: '16px'}}>
                                <span className="ml-2"></span>
                                <input type="radio" id="sortByCategory" className='w-3 h-3  border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "RUNNING"}})}
                                checked={state.sortByCategory === "RUNNING"}
                                />
                                <span className="ml-2"></span>
                                Running
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Football" style={{fontSize: '16px'}}>
                                <span className="ml-2"></span>
                                <input type="radio" id="Football" className='w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' 
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "FOOTBALL"}})}
                                checked={state.sortByCategory === "FOOTBALL"}
                                />
                                <span className="ml-2"></span>
                                Football
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Casual" style={{fontSize: '16px'}}>
                                <span className="ml-2"></span>
                                <input type="radio" id="Casual" className='w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "CASUAL"}})}
                                checked={state.sortByCategory === "CASUAL"}
                                />
                                <span className="ml-2"></span>
                                Casual
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Formal" style={{fontSize: '16px'}}>
                                <span className="ml-2"></span>
                                <input type="radio" id="Formal" className='w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' 
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "FORMAL"}})}
                                checked={state.sortByCategory === "FORMAL"}
                                />
                                <span className="ml-2"></span>
                                Formal
                            </label>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
});
