import React from 'react'
import { mount } from 'enzyme'
import Landing from '../components/Landing'

//const props = { note: {text: 'text note'}}

describe('Landing', () => {
    let landing = mount(<Landing />)
    //let landing = mount(<Landing {...props} />)

    it ('rendered the Landing text', () => {
      //console.log(landing.debug())
      expect(landing.find('h1').text()).toEqual('Landing')
        
    })
})
