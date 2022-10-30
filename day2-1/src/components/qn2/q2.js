import React from 'react'
import _ from 'lodash'

const q2 = () => {
    //2a
    const arrOne = [{
        id: 20,
        name: 'alex'
    }, {
        id: 30,
        name: 'alina'
    }]

    const arrTwo = [{
        id: 40,
        name: 'hello'
    }, {
        id: 30,
        name: 'world'
    }]

    const arrXor = _.xorBy(arrOne, arrTwo, 'id')
    const arrU = _.union(arrOne, arrTwo)
    const arrR = _.pullAll(arrU, arrXor)

    //2b
    const str = ['u', 'ec']
    const arr = [{
        storageVal: 'u',
        table: ['E', 'F']
    }, {
        storageVal: 'data',
        id: 3
    }, {
        storageVal: 'ec',
        table: ['E']
    }]

    const arrFilter = arr.filter(a => {
        return (a.storageVal == str[0] || a.storageVal == str[1])
        }
    )

    const arrMap = arrFilter.map(a => {
        return a.table
    })

    //2c
    const a = [['E'], ['F']]
    const aFlat = _.flatten(a)

    //2d
    const t = [['E', 'F'], [['F'], ['G']]]
    const t1 = _.flatten(t[1])
    const tXor = _.xor(t[0], t1)
    const tUnion = _.union(tXor, t1)

    return (
        <div>
            {console.log('2a')}
            {console.log(arrR)}
            {console.log(arrXor)}

            {console.log('2b')}
            {console.log(arrMap)}

            {console.log('2c')}
            {console.log(aFlat)}

            {console.log('2d')}
            {console.log(tUnion)}
        </div>
    )
}

export default q2