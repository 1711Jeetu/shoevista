import React from 'react'
import { Link } from 'react-router-dom'
import { useFilter } from '../../../context/FilterContext';

export const DropDownSortBy = ({ setSortBy, refProp }) => {
    const { state, dispatch } = useFilter();
    console.log('hi');
    return (
        <div
            ref={refProp}
            id='dropdownAvtar'
            style={{ left: "176px"}}
            className='select-none absolute pl-1 top-7 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <div className="py-4 overflow-y-auto">
                    <div>
                    <h2 className="font-bold dark:text-slate-100 pl-2">Price</h2>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="lowtohigh">
                            <span className="ml-2"></span>
                            <input type="radio" id="lowtohigh" name="sortByPrice"
                                onChange={() =>  dispatch({ type: "SORT_BY_PRICE", payload: { sortByPrice: "lowtohigh" } }) }
                                checked={state.sortByPrice==="lowtohigh"}
                            />
                            <span className="ml-2"></span>
                            Price - Low to High
                        </label>
                    </div>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="hightolow">
                            <span className="ml-2"></span>
                            <input type="radio" id="hightolow" name="sortByPrice"
                                onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: { sortByPrice: "hightolow" } }) }}
                                checked={state.sortByPrice==="hightolow"} 
                            />
                            <span className="ml-2"></span>
                            Price - High to Low
                        </label>
                    </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold dark:text-slate-100 pl-2">Rating</h2>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="fourNAbove">
                                <span className="ml-2"></span>
                                <input type="radio" id="fourNAbove" name="sortByRating"
                                    onChange={() => { dispatch({ type: "SORT_BY_RATINGS", payload: { sortByRatings: "4STARSABOVE" } }) }} />
                                <span className="ml-2"></span>
                                4 stars &amp; Above
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="threeNAbove">
                                <span className="ml-2"></span>
                                <input type="radio" id="threeNAbove" name="sortByRatings"
                                    onChange={() => { dispatch({ type: "SORT_BY_RATINGS", payload: { sortByRatings: "3STARSABOVE" } }) }} />
                                <span className="ml-2"></span>
                                3 stars &amp; Above
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="twoNAbove">
                                <span className="ml-2"></span>
                                <input type="radio" id="twoNAbove" name="sortByRatings"
                                onChange={()=>{dispatch({type: "SORT_BY_RATINGS" , payload:{sortByRatings : "2STARSABOVE"}})}}
                                />
                                <span className="ml-2"></span>
                                2 stars &amp; Above
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="oneNAbove">
                                <span className="ml-2"></span>
                                <input type="radio" id="oneNAbove" name="sortByRatings"
                                onChange={()=>{dispatch({type: "SORT_BY_RATINGS" , payload:{sortByRatings : "1STARSABOVE"}})}}
                                />
                                <span className="ml-2"></span>
                                1 stars &amp; Above
                            </label>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold dark:text-slate-100 pl-2">Category</h2>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="sortByCategory">
                                <span className="ml-2"></span>
                                <input type="radio" id="sortByCategory" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "RUNNING"}})}
                                checked={state.sortByCategory === "RUNNING"}
                                />
                                <span className="ml-2"></span>
                                Running
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Football">
                                <span className="ml-2"></span>
                                <input type="radio" id="Football" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' 
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "FOOTBALL"}})}
                                checked={state.sortByCategory === "FOOTBALL"}
                                />
                                <span className="ml-2"></span>
                                Football
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Casual">
                                <span className="ml-2"></span>
                                <input type="radio" id="Casual" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                onChange={()=>dispatch({type:"SORT_BY_CATEGORY",payload: {sortByCategory: "CASUAL"}})}
                                checked={state.sortByCategory === "CASUAL"}
                                />
                                <span className="ml-2"></span>
                                Casual
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Formal">
                                <span className="ml-2"></span>
                                <input type="radio" id="Formal" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' 
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
}
