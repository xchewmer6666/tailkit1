import Link from 'next/link';

export default function BasicTabsUnderline() {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <div>
                        <Link
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                        >
                            Home
                        </Link>
                    </div>
                </li>
                <li className="mr-2">
                    <div>
                        <Link
                            href="#"
                            className="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active "
                            aria-current="page"
                        >
                            Calendar
                        </Link>
                    </div>
                </li>
                <li className="mr-2">
                    <div>
                        <Link
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                        >
                            Results
                        </Link>
                    </div>
                </li>
                <li className="mr-2">
                    <div>
                        <Link
                            href="#"
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                        >
                            Live
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}
