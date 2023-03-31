import { render,screen,fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import  {SignedOutDropdown} from '../../components/layout/Navbar/SignedOutDropdown'

describe('<SignedOutDropdown />', () => {
    const setup = (): void => {
        render(
            <BrowserRouter>
                <SignedOutDropdown/>
            </BrowserRouter >
        )
    }
    it ('should initially render',() => {
        setup();
    })
    it ('should have a button named AUTH',() => {
       setup();
       const spy = jest.spyOn(console, 'log');
       const button = screen.getByRole('button',{name : /AUTH/i })
       fireEvent.click(button);
       expect(spy).toHaveBeenCalledWith('Menu opened');      
    })
    it ('After Clicking the AUTH Button It should open a Menu',() => {
        setup();
       
        const button = screen.getByRole('button',{name : /AUTH/i })
        fireEvent.click(button);
        const menu = screen.getByRole('menu')
        expect(menu.textContent).toContain('Sign in')
        expect(menu.textContent).toContain('Sign up')
     })
});
