import '@/assets/styles/globals.css'

export const metadata = {
    title: "Property Pulse",
    keywords: "rental, property real estate",
    description: "find the perfect rental property"
}

const MainLayout = ({children}) => {
    console.log('app');
    console.log('app');
    console.log('app');
    return ( <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> );
}

 
export default MainLayout;