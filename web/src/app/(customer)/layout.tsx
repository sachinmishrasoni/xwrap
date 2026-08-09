import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default CustomerLayout;
