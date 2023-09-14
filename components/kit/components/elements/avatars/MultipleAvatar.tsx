import Link from 'next/link';
import React from 'react';
interface Props {
    size?: 'small' | 'normal' | 'big';
    withHoverEffect?: boolean;
}
const MultipleAvatar = ({ size, withHoverEffect }: Props) => {
    let sizeClasses = 'h-16 w-16';
    if (size && size !== 'normal') {
        sizeClasses = size === 'small' ? 'h-10 w-10' : 'h-20 w-20';
    }

    const effectClasses = withHoverEffect
        ? 'hover:scale-150 hover:z-10 transform ease-in-out transition duration-500'
        : '';

    return (
        <div className="flex -space-x-2">
            <Link href="#" className={`${effectClasses}`}>
                <img
                    className={`inline-block ${sizeClasses} rounded-full object-cover ring-2 ring-white`}
                    src="/images/person/1.jpg"
                    alt="Guy"
                />
            </Link>
            <Link href="#" className={`${effectClasses}`}>
                <img
                    className={`inline-block ${sizeClasses} rounded-full object-cover ring-2 ring-white`}
                    src="/images/person/2.jpeg"
                    alt="Max"
                />
            </Link>
            <Link href="#" className={`${effectClasses}`}>
                <img
                    className={`inline-block ${sizeClasses} rounded-full object-cover ring-2 ring-white`}
                    src="/images/person/3.jpg"
                    alt="Charles"
                />
            </Link>
            <Link href="#" className={`${effectClasses}`}>
                <img
                    className={`inline-block ${sizeClasses} rounded-full object-cover ring-2 ring-white`}
                    src="/images/person/4.jpg"
                    alt="Jade"
                />
            </Link>
        </div>
    );
};
export default MultipleAvatar;
