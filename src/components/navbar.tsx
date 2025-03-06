import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='flex items-center h-16 mx-4'>
            <Link href='/' className='flex items-center'>
                <span className='font-moveSans text-lx'>stocKING</span>
                <Image
                    src='/icons/king.svg'
                    width={24}
                    height={24}
                    alt='왕관 아이콘'
                    title='왕관 아이콘 (제작자: Rahul Kaklotar - Flaticon)'
                />
            </Link>
            <div className='flex-grow'></div>
        </div>
    );
}
