import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const Search = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="">
                <form action="/search" className="md:max-w-[80%] w-full px-4 mx-auto py-5 md:pt-3 md:pb-10">
                    <div className="relative">
                        <input
                            type="text"
                            name="q"
                            className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
                            placeholder="আপনি কী খুঁজছেন?"
                        />
                        <button type="submit">
                            <svg
                                className=" h-10 w-10 bg-yellow-500 absolute top-1 pt-2 pl-2 rounded-full right-1.5 fill-current "
                            >
                                <IoMdSearch className='text-2xl '></IoMdSearch>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Search