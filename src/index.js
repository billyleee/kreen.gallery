import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    NavLink,
    useLocation,
    useOutlet,
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Skincare from './pages/Skincare'
import Personalcare from './pages/Personalcare'
import Haircare from './pages/Haircare'
import Decorative from './pages/Decorative'
import Bodymist from './pages/Bodymist'
import Logo from './asset/kreen.jpg'
import Swipe from './components/Swipe'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const routes = [ 

    { path: '/', name: 'Skincare', element: <Skincare />, nodeRef: createRef(), },
    { path: '/Personalcare', name: 'Personalcare', element: <Personalcare/>, nodeRef: createRef(),},
    { path: '/Haircare', name: 'Haircare', element: <Haircare />, nodeRef: createRef(),},
    { path: '/Decorative', name: 'Decorative', element: <Decorative />, nodeRef: createRef(), },
    { path: '/BodyMist', name: 'Body Mist', element: <Bodymist />, nodeRef: createRef(), },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: routes.map((route) => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
])

function Master () {
    const location = useLocation()
    const currentOutlet = useOutlet()
    const { nodeRef } =
        routes.find((route) => route.path === location.pathname) ?? {}

        
    return (
        
                                              <div class="HeaderLogo">
                                                        <div class='Logo'>
                                                            <img  class='Logo1' src={Logo} alt="" />           
                                                        </div>
                                                <div>
                                        
                                                                <div class='containerHome'>
                                                                
                                                                    <Swipe class='SwipeContainer' />
                                                                    
                                                </div>
                                                    <hr />
                                                                <Navbar bg="light">
                                                                        <Nav className="mx-auto">
                                                                            {routes.map((route) => (
                                                                                <Nav.Link
                                                                                    key={route.path}
                                                                                    as={NavLink}
                                                                                    to={route.path}
                                                                                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                                                                                    end
                                                                                >
                                                                                    {route.name}
                                                                                </Nav.Link>
                                                                            ))}
                                                                        </Nav>
                                                                </Navbar>
                                                        <hr />
                                                                <Container className="container">
                                                                    <SwitchTransition>
                                                                        <CSSTransition
                                                                            key={location.pathname}
                                                                            nodeRef={nodeRef}
                                                                            timeout={300}
                                                                            classNames="page"
                                                                            unmountOnExit
                                                                        >
                                                                            {(state) => (
                                                                                <div ref={nodeRef} className="page">
                                                                                    {currentOutlet}
                                                                                </div>
                                                                            )}
                                                                        </CSSTransition>
                                                                    </SwitchTransition>
                                                                </Container>
                                        </div>
                                    </div>

    )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)

export default Master;
