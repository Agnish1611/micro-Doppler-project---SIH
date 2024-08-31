import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">NAME!!</h1>
                        <p className="text-sm">
                            © {new Date().getFullYear()} NAME!!. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="/home" className="hover:text-gray-400">Home</a>
                        <a href="/about" className="hover:text-gray-400">About Us</a>
                        <a href="/solution" className="hover:text-gray-400">Solution</a>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-400">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="https://twitter.com" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
