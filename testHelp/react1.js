import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-testHelp-utils'
import {Tetris, Board} from '../src/client/components/test'

chai.should()
chai.use(equalJSX)

describe('Fake react testHelp', function(){
  it('works', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(Tetris))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<Board/>)
  })

})
