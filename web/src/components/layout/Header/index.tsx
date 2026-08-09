import React from 'react';
import Container from '@/components/common/Container';
import AppLogo from '../AppLogo';
import Navigation from './Navigation';
import HeaderActions from './HeaderActions';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'>
            <Container maxWidth='full' className='flex h-14 items-center justify-between'>
                <AppLogo />

                <Navigation />

                <HeaderActions />

                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </Container>
        </header>
    )
}

export default Header;
