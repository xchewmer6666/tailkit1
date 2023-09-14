import React from 'react';
import NextJSCta from '../../../components/pagesection/cta/NextJSCta';
import Link from 'next/link';

const NextJs = () => {
    return (
        <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
            <header className="z-30 flex items-center w-full h-24 sm:h-32">
                <div className="container flex items-center justify-between px-6 mx-auto">
                    <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
                        <svg aria-hidden="true" focusable="false" width="100" height="100" viewBox="0 0 512 309">
                            <path
                                d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56L391.441 0l-103.85 150.65l53.515 74.127h-10.663l-48.686-67.462l-48.888 67.462h-10.461l53.917-74.128l-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323l-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212c0-1.81 1.356-3.212 3.165-3.212c1.83 0 3.165 1.401 3.165 3.212c0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29c3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853c-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828c3.875 0 6.717-2.005 6.717-4.764c0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602c0-5.54 4.521-9.227 11.303-9.227c6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657c-3.81 0-6.35 1.833-6.35 4.635c0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753c0 5.95-4.607 9.68-11.97 9.68c-6.89 0-11.52-3.558-11.864-9.12z"
                                fill="#000"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            <Link href="#" className="flex px-6 py-2 text-indigo-500 border-b-2 border-indigo-500">
                                Home
                            </Link>
                            <Link href="#" className="flex px-6 py-2 hover:text-indigo-500">
                                Watch
                            </Link>
                            <Link href="#" className="flex px-6 py-2 hover:text-indigo-500">
                                Product
                            </Link>
                            <Link href="#" className="flex px-6 py-2 hover:text-indigo-500">
                                Contact
                            </Link>
                            <Link href="#" className="flex px-6 py-2 hover:text-indigo-500">
                                Carrer
                            </Link>
                        </nav>
                        <button className="flex flex-col ml-4 lg:hidden">
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                            <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                        </button>
                    </div>
                </div>
            </header>
            <NextJSCta />
        </main>
    );
};
export default NextJs;
