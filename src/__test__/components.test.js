import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from '../components/Homepage';
import Quote from "../components/quote";

describe('Rendering components Test if it satiesfies', () => {
  it('snapshot for Caculator', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot for Home', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

 it("snapshot for Quote", () => {
   const tree = renderer.create(<Quote />).toJSON();
   expect(tree).toMatchSnapshot();
 });


//   it("Renders Navbar component", () => {
//       const tree = renderer.create(
//         <MemoryRouter>
//           <Navbar />
//         </MemoryRouter>
//       ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

});
