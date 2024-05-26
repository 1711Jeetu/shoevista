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
            style={{ left: "176px" }}
            className='select-none absolute pl-1 top-7 w-44 z-10 bg-white rounded divide-gray-100 mt-3 shadow dark:bg-gray-700 dark:divide-gray-600'
        >
            <ul
                className='py-1  text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownuserAvatarButton'
            >
                <div className="py-4 overflow-y-auto">
                    <h2 className="font-bold dark:text-slate-100 pl-2">Price</h2>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="lowToHigh">
                            <span className="ml-2"></span>
                            <input type="radio" id="lowToHigh" name="sortByPrice"
                                onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: { sortByprice: "lowtohigh" } }) }}
                            //    checked={state.sortByPrice==="lowtohigh"}
                            />
                            <span className="ml-2"></span>
                            Price - Low to High
                        </label>
                    </div>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="highToLow">
                            <span className="ml-2"></span>
                            <input type="radio" id="highToLow" name="sortByPrice"
                                onChange={() => { dispatch({ type: "SORT_BY_PRICE", payload: { sortByprice: "hightolow" } }) }}
                            //    checked={state.sortByPrice==="hightolow"} 
                            />
                            <span className="ml-2"></span>
                            Price - High to Low
                        </label>
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
                        <h2 className="font-bold dark:text-slate-100 pl-2">Brand</h2>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Nike">
                                <span className="ml-2"></span>
                                <input type="checkbox" id="Nike" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                />
                                <span className="ml-2"></span>
                                Nike
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Adidas">
                                <span className="ml-2"></span>
                                <input type="checkbox" id="Adidas" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' />
                                <span className="ml-2"></span>
                                Adidas
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="Vans">
                                <span className="ml-2"></span>
                                <input type="checkbox" id="Vans" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' />
                                <span className="ml-2"></span>
                                Vans
                            </label>
                        </div>
                        <div className="form-control dark:text-slate-100">
                            <label htmlFor="HushPuppies">
                                <span className="ml-2"></span>
                                <input type="checkbox" id="HushPuppies" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' />
                                <span className="ml-2"></span>
                                HushPuppies
                            </label>
                        </div>
                    </div>
                    <div className="form-control dark:text-slate-100">
                        <label htmlFor="Reebok">
                            <span className="ml-2"></span>
                            <input type="checkbox" id="Reebok" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800' />
                            <span className="ml-2"></span>
                            Reebok
                        </label>
                    </div>

                </div>
            </ul>
        </div>
    )
}
