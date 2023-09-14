import Link from 'next/link';

export default function BasicTabsDisabled() {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="mr-2">
                <Link href="#" className="inline-block p-4 text-gray-800 bg-white rounded-t-lg active ">
                    Home
                </Link>
            </li>
            <li className="mr-2">
                <Link href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Calendar
                </Link>
            </li>
            <li className="mr-2">
                <Link href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Results
                </Link>
            </li>
            <li className="mr-2">
                <Link href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Live
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
                >
                    Disabled
                </Link>
            </li>
        </ul>
    );
}
