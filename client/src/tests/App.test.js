//****** this is just an example */
//this test code does not work for this app

import React from 'react'

describe('placeholder', () => {
    it('placeholder test', () => {
        let message = 'hi'
        expect(message).toEqual('hi')
    })
})




// import { mount } from 'enzyme'
// import App from '../components/App'

// describe('app', () => {
//     let app = mount(<App />)

//     it('renders the App title', () => {
//         console.log(app.debug())
//         expect(app.find('h2').text()).toEqual('Note to Self')
//     })

//     it('renders the clear button', () => {
//         expect(app.find('.btn').st(1).text()).toEqual('Clear Notes')
//     })

//     describe('when rendering the form', () => {
//         it('creates a Form comonent', () => {
//             expect(app.find('Form').exists()).toBe(true)
//         })

//         it('renders a FormControl component', () => {
//             expect(app.find('FormControl').exists()).toBe(true)
//         })

//         it('renders a submit button', () => {
//             expect(app.find('.btn').at(0).text()).toEqual('submit')
//         })
//     })

//     describe('when creating a note', () => {
//         let testNote = 'test note';
        
//         //going to change the state
//         //beforeEach fires before the it
//         beforeEach(() => {
//             app.find('FormControl').simulate('change', {
//                 target: { value: testNote }
//             })
//         })

//         it('updates the text in state', () => {
//             expect(app.state().test).toEqual(testNote)
//         })

//         describe('and submitting the new note', () => {
//             beforeEach(() => {
//                 app.find('.btn').at(0).simulate('click')
//             })

//             /////////////////// this is different
//             //////////// we are going to clear the state, giving only on thing in the cookies instead of two
//             afterEach(() => {
//                 app.find('.btn').at(1).simulate('click')
//             })

//             it('adds the new to state', () => {
//                 //console.log(app.state())
//                 expect(app.state().notes[0].text).toEqual(testNote)
//             })

//             ///////////////////////////////////
//             describe('and remounting the component', () => {
//                 let app2

//                 beforeEach(() => {
//                     app2 =mount(<App />)
//                 })

//                 it('should reads the sotred note cookies', () => {
//                     //console.log(app2.state())
//                     expext(app2.state().notes).toEqual([{}])
//                 })
                
//             })
            

//             describe('and clicking the clear button', () => {
//                 beforeEach(() => {
//                     app.find('.btn').at(1).simulate('click')
//                 })

//                 it('clear the notes in the state', () => {
//                     //console.log(app.state())
//                     expect(app.state().notes).toEqual([])
//                 }) 
//             })
            
            
//         })
        
        
//     })
    

// })